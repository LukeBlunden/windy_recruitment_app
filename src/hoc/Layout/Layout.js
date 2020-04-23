import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import styled from 'styled-components';


import Jobs from '../../containers/Jobs/Jobs';
import Newjob from '../../components/Job/NewJob/NewJob';
import jobExpanded from '../../components/Job/jobExpanded/jobExpanded';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Main from '../../components/Navigation/Main/Main';


class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{display: 'flex'}}>
          <Sidebar />
          <Main>
            <Switch>
              <Route path="/newjob" component={Newjob} />
              <Route path="/candidates" component={jobExpanded} />
              <Route path="/teams" component={jobExpanded} />
              <Route path="/job" exact component={jobExpanded} />
              <Route path="/" exact component={Jobs} />
            </Switch>
          </Main>
        </div>
      </div>
    );
  }
}

export default Layout;
