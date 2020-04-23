import React, { Component } from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Redirect } from "react-router-dom";

import axios from "../../../axios-orders";

import NewCandidate from "../../Candidates/NewCandidate/NewCandidate";
import SmallCandidate from "../../Candidates/SmallCandidate/SmallCandidate";
import Modal from "../../UI/Modal/Modal";

const JobContainer = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border: 1px solid #dff1ff;
  box-shadow: 0 2px 3px lightgray;
`;

const JobDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & h1 {
    grid-column: 1 / span 2;
    margin-bottom: 2rem;
  }

  & button {
    width: 10rem;
    height: 2rem;
    justify-self: end;
    background-color: transparent;
    border: 1px solid grey;
    cursor: pointer;
    box-shadow: 0 2px 3px lightgray;
  }
`;

const SmallBox = styled.p`
  grid-column: 1 / span 1;
`;

const BigBox = styled.p`
  grid-column: 2 / span 2;
  grid-row: 2 / span 2;
`;

const HiringStagesContainer = styled.div`
  overflow: scroll;
  overflow-y: hidden;
  margin-top: 2rem;
  display: flex;

  div:not(:last-child) {
    padding-right: 1rem;
  }
`;

const HiringStage = styled.div`
  min-width: 34%;
`;

class jobExpanded extends Component {
  state = {
    job: {},
    newCandidate: {
      name: "",
      source: "",
      recruiter: "",
      experience: "",
    },
    showModal: false,
    loading: true,
  };

  componentDidMount() {
    if (typeof this.props.history.location.state === "undefined") {
      return;
    }
    axios
      .get(`/jobs/${this.props.history.location.state.id}.json`)
      .then((res) => {
        const candidatesArray = [];
        if (res.data.candidates) {
          Object.entries(res.data.candidates).forEach(([key, value]) => {
            candidatesArray.push({ id: key, data: { ...value } });
          });
        }
        this.setState({
          job: {
            ...res.data,
            candidates: candidatesArray,
            id: this.props.history.location.state.id,
          },
        });
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  candidateFormChangeHandler = (e) => {
    const newCandState = { ...this.state.newCandidate };
    newCandState[e.target.name] = e.target.value;
    this.setState({ ...this.state, newCandidate: newCandState });
  };

  updateCandidates = () => {
    axios
      .get(`/jobs/${this.props.history.location.state.id}.json`)
      .then((res) => {
        const candidatesArray = [];
        Object.entries(res.data.candidates).forEach(([key, value]) => {
          candidatesArray.push({ id: key, data: { ...value } });
        });
        this.setState({
          job: {
            ...res.data,
            candidates: candidatesArray,
            id: this.props.history.location.state.id,
          },
        });
        this.setState({ loading: false });
      });
  };

  submitCandHandler = (e) => {
    e.preventDefault();
    const newCand = { ...this.state.newCandidate };
    axios
      .post(`/jobs/${this.state.job.id}/candidates.json`, newCand)
      .then((res) => {
        console.log(res);
      });
    this.updateCandidates();
  };

  showModalHandler = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    if (typeof this.props.history.location.state === "undefined") {
      return <Redirect to={"/"} />;
    }

    let candMap = "";
    if (this.state.loading === false) {
      const candidates = this.state.job.candidates;
      candMap = candidates.map((candidate) => (
        <SmallCandidate
          key={candidate.id}
          name={candidate.data.name}
          source={candidate.data.source}
          recruiter={candidate.data.recruiter}
          experience={candidate.data.experience}
        />
      ));
    }

    return (
      <div>
        <Modal show={this.state.showModal}>
          <NewCandidate
            name={this.state.newCandidate.name}
            source={this.state.newCandidate.source}
            recruiter={this.state.newCandidate.recruiter}
            experience={this.state.newCandidate.experience}
            changed={this.candidateFormChangeHandler}
            submitted={this.submitCandHandler}
            clicked={this.showModalHandler}
          />
        </Modal>
        <JobContainer>
          <JobDetails>
            <h1>{this.state.job.jobTitle}</h1>
            <button onClick={this.showModalHandler}>Add Candidate</button>
            <SmallBox>{this.state.job.hiringManager}</SmallBox>
            <SmallBox>{this.state.job.location}</SmallBox>
            <BigBox>{this.state.job.description}</BigBox>
          </JobDetails>
          <HiringStagesContainer>
            <HiringStage>
              <h2>Applied</h2>
              <ul>{candMap}</ul>
            </HiringStage>
            <HiringStage>
              <h2>Unsuitable</h2>
            </HiringStage>
            <HiringStage>
              <h2>Shortlist</h2>
            </HiringStage>
            <HiringStage>
              <h2>Phone Screen</h2>
            </HiringStage>
            <HiringStage>
              <h2>1st Interview</h2>
            </HiringStage>
          </HiringStagesContainer>
        </JobContainer>
      </div>
    );
  }
}

export default jobExpanded;
