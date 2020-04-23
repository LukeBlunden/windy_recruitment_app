import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Sidebar = styled.section`
  width: 13%;
  height: 92vh;
  background-color: #81b9ff;
  display: inline-block;

  & ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;

    & li {
      font-size: 1.2rem;
      border-bottom: 2px solid transparent;
      cursor: pointer;
    }
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: white;
  border-bottom: 2px solid transparent;

  &:visited {
    color: white;
  }
  
  &:hover,
  &:active,
  &.active {
    background-color: orange;
    border-bottom: 2px solid orange;
  }
`;

const sidebar = (props) => {
  return (
    <Sidebar>
      <ul>
        <li>
          <StyledLink to={"/"}>Jobs</StyledLink>
        </li>
        <li>
          <StyledLink to={"/teams"}>Teams</StyledLink>
        </li>
        <li>
          <StyledLink to={"/candidates"}>Candidates</StyledLink>
        </li>
      </ul>
    </Sidebar>
  );
};

export default sidebar;
