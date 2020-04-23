import React from "react";
import styled from "styled-components";

import Widebutton from "../../UI/WideButton/WideButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem;

  & input,
  & textarea {
    margin: 0.5rem 0;
    border: none;
    background-color: #ffffff;
    padding: 0.5rem;
    border: 1px solid #dff1ff;
  }
`;

const newCandidate = (props) => {
  return (
    <Form onSubmit={props.submitted}>
      <label>Candidate Name</label>
      <input
        type="text"
        value={props.name}
        name={"name"}
        onChange={props.changed}
      />
      <label>Source</label>
      <input
        type="text"
        value={props.source}
        name={"source"}
        onChange={props.changed}
      />
      <label>Recruiter</label>
      <input
        type="text"
        value={props.recruiter}
        name={"recruiter"}
        onChange={props.changed}
      />
      <label>Experience</label>
      <textarea
        value={props.experience}
        name={"experience"}
        onChange={props.changed}
      />
      <Widebutton clicked={props.clicked}>Submit</Widebutton>
    </Form>
  );
};

export default newCandidate;
