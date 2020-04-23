import React from 'react'
import styled from 'styled-components'

import Logo from '../../../assets/images/logo_svg.svg';

// Color primary: #4484ce
// Color primary light: #81b9ff
// Color primary lightest: #dff1ff
// Color secondary: #dba11c  
// Color Black: #3f4756
// Color gray: #a3abbd

// Shade: #AFB0CC


const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  color: white;
  background-color: #4484ce;
  display: flex;

  & img {
    height: 100%;
    padding: .2rem;
    margin-left: 1rem;
  }

  & ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & li {
      font-size: 1.2rem;
      height: 100%;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid transparent;
      cursor: pointer;

      &:hover, &:active, &.active {
        color: orange;
        border-bottom: 2px solid orange;
      }
    }
  }
`;

const navbar = props => {
  return (
    <Nav>
      <img src={Logo} alt="Logo"></img>
      <ul>
        <li>Dashboard</li>
        <li>Info</li>
        <li>Contact</li>
      </ul>
    </Nav>
  )
}
 
export default navbar