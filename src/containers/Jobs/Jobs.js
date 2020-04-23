import React, { Component } from "react";
import axios from "../../axios-orders";

import JobsHeader from "../../components/Job/JobsHeader/JobsHeader";
import JobCard from "../../components/Job/JobCard/JobCard";
import WideButton from "../../components/UI/WideButton/WideButton";

class Jobs extends Component {
  state = {
    jobs: [],
  };

  // Load up the jobs on mounting
  componentDidMount() {
    this.updateJobs();
  }

  // Function to update all jobs upon init and update
  updateJobs = () => {
    axios.get("/jobs.json").then((res) => {
      const fetchedJobs = [];
      for (let key in res.data) {
        fetchedJobs.push({
          ...res.data[key],
          id: key,
          open: false,
        });
      }
      this.setState({ jobs: fetchedJobs });
    });
  };

  // Job description drop down handler
  showJobDescriptionHandler = (job) => {
    const jobsState = [...this.state.jobs];
    for (let jb of jobsState) {
      if (jb.id === job.id) {
        jb.open = !jb.open;
      }
    }
    this.setState({ jobs: jobsState });
  };

  // Routes to new job form
  // Should this be changed to a modal like the candidates?
  newJobHandler = () => {
    this.props.history.push({
      pathname: "/newjob",
    });
  };

  // BROKEN - meant to delete 1 job, deletes all of them at the moment
  // Figure out how axios works
  deleteJobHandler = (id) => {
    console.log(id);
    axios
      .delete(`/jobs/${id}`)
      .then((res) => {
        this.updateJobs();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Open up expanded job using id of job that was clicked on.
  goToJobHandler = (jobId) => {
    this.props.history.push({
      pathname: "/job",
      state: { id: jobId },
    });
  };

  render() {

    // Map list of jobs
    let jobs = this.state.jobs.map((job) => (
      <JobCard
        key={job.id}
        jobTitle={job.jobTitle}
        hiringManager={job.hiringManager}
        location={job.location}
        description={job.description}
        showDescription={() => this.showJobDescriptionHandler(job)}
        open={job.open}
        delete={() => this.deleteJobHandler(job.id)}
        goToJob={() => this.goToJobHandler(job.id)}
      />
    ));

    return (
      <div>
        <WideButton clicked={this.newJobHandler}>New Job</WideButton>
        {/* <JobsHeader /> */}
        {jobs}
      </div>
    );
  }
}

export default Jobs;
