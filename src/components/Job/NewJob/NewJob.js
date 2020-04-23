import React, { Component } from "react";
import styled from "styled-components";

import axios from "../../../axios-orders";

import Widebutton from "../../UI/WideButton/WideButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem;
  border: 1px solid #dff1ff;
  box-shadow: 0 2px 3px lightgray;

  & input,
  & textarea {
    margin: 0.5rem 0;
    border: none;
    background-color: #ffffff;
    padding: 0.5rem;
    border: 1px solid #dff1ff;
  }
`;

class Newjob extends Component {
  state = {
    form: {
      jobTitle: "",
      hiringManager: "",
      location: "",
      description: ""
    }    
  }

  changeFormHandler = (e, input) => {
    e.preventDefault();
    const formCopy = {...this.state.form};
    formCopy[input] = e.target.value;
    this.setState({
      ...this.state, 
      form: formCopy
    })
    // axios.post("/jobs.json", jobData).then()
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    const job = {
      ...this.state.form
    }
    axios.post("/jobs.json", job)
      .then(response => {
        // console.log(response)
        this.props.history.push("/");
      })
  }

  render() {
    return (
      <div>
        {/* <h1>Newjob</h1> */}
        <Form onSubmit={(e) => this.submitFormHandler(e)}>
          <label for="Job Title">Job Title</label>
          <input type="text" value={this.state.form.jobTitle} onChange={(e) => this.changeFormHandler(e, "jobTitle")} />
          <label for="Manager">Hiring Manager</label>
          <input type="text" onChange={(e) => this.changeFormHandler(e, "hiringManager")}/>
          <label for="location">Location</label>
          <input type="text" onChange={(e) => this.changeFormHandler(e, "location")}/>
          <label for="description">Job Description</label>
          <textarea type="text" onChange={(e) => this.changeFormHandler(e, "description")}/>
          <Widebutton clicked={this.submitFormHandler}>Submit</Widebutton>
        </Form>
      </div>
    );
  }
}

export default Newjob;
