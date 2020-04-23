import React from "react";
import styled from "styled-components";

const SmallCandidate = styled.li`
  list-style: none;
  background-color: #f1f1f1;
  padding: 0.5rem;
  margin: 1rem 0;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 3fr;
  border-radius: 10px;

  & h3 {
    font-size: 1rem;
  }

  & p {
    font-size: 0.9rem;
  }
`;

const SmallPhoto = styled.img`
  /* width: 100%; */
  height: 100%;
  object-fit: cover;  
  grid-row: 1 / span 3;
  grid-column: 1 / span 1;
  border-radius: 1000px;
`;

const smallCandidate = (props) => {
  return (
    <SmallCandidate>
      <SmallPhoto src="https://www.mcsgroup.jobs/media/2390/dlb_7097_1.jpg" alt="Caroline Gaughan" />
      <h3>{props.name}</h3>
      <p>{props.source}</p>
      <p>{props.recruiter}</p>
      {/* <p>{props.experience}</p> */}
    </SmallCandidate>
  );
};

export default smallCandidate;
