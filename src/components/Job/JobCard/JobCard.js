import React from "react";
import styled from "styled-components";

import JobDescription from "../JobDescription/JobDescription";

const Job = styled.div`
  display: flex;
  background-color: #Ffffff;
  border: 1px solid #dff1ff;
  padding: 1rem;
  margin: 0.5rem 0;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba(238, 238, 238, .4);
  }

  & h3, & p {
    width: 25%;
  }

  & button {
    background-color: transparent;
    border: none;
    box-shadow: 0 2px 3px #AFB0CC;
    border-radius: 5px;
    outline: none;
    margin: 0 0.5rem;
    padding: 0.2rem 0.8rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1px 2px #AFB0CC;
      transform: translateY(1px);
    }
  }
`;

const jobCard = props => {
  return (
    <div onClick={props.goToJob}>
      <Job>
        <button onClick={props.showDescription}>V</button>
        <h3>{props.jobTitle}</h3>
        <p>{props.hiringManager}</p>
        <p>{props.location}</p>
        <div>
          <button>Filled</button>
          <button onClick={props.delete} >Delete</button>
        </div>
      </Job>
      <JobDescription description={props.description} open={props.open} />
    </div>
  );
};

export default jobCard;
