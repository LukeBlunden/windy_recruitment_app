import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  padding: 2rem;
  display: inline-block;
  width: 87%;
  height: 92vh;
  background-color: #F9F8F9;
`;
 
const main = props => {
  return (
    <Main>
      <div>
        {props.children}
      </div>
    </Main>
  )
}
 
export default main