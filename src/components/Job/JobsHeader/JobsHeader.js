import React from 'react'
import styled from 'styled-components'
 
const JobHeader = styled.div`
  display: flex;
  /* background-color: #dff1ff; */
  border-top: 2px solid #dff1ff;
  padding: 1rem;
  margin: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

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


const jobsHeader = props => {
  return (
    <JobHeader>
        <button></button>
        <h3>Job Title</h3>
        <p>Hiring Manager</p>
        <p>Location</p>
        <div>
          <button></button>
          <button></button>
        </div>
      </JobHeader>
  )
}
 
export default jobsHeader