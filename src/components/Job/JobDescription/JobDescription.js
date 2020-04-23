import React from "react";
import styled from "styled-components";

const JobDescription = styled.div`
  background-color: yellowgreen;
  display: ${props => props.open ? `initial` : `none`};
`;

const jobDescription = props => {
  return (
    <JobDescription open={props.open}>
      <p>{props.description}</p>
    </JobDescription>
  );
};

export default jobDescription;
