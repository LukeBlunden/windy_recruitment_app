import React from 'react'
import styled from 'styled-components'
 
const WideButton = styled.button`
  width: 100%;
  /* border-radius: .8rem; */
  border: none;
  background-color: rgba(0,0,0,0.02);
  /* background-color: #dff1ff; */
  padding: .7rem;
  outline: none;
  box-shadow: 0 2px 3px lightgray;
  font-size: 1rem;
  color: gray;

  &:hover {
      box-shadow: 0 1px 2px lightgray;
      transform: translateY(1px);
    }
`;

const wideButton = props => {
  return (
    <WideButton onClick={props.clicked}>{props.children}</WideButton>
  )
}
 
export default wideButton