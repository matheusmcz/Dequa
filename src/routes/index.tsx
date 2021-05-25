import React from "react";
import { Switch } from "react-router-dom";
import { DashboardJobs } from "src/pages/DashboardJobs";
import { JobDescription } from "src/pages/JobDescription";
import { Home } from "../pages/Home";
import Route from "./route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard-jobs" component={DashboardJobs} />
      <Route path="/job-description" component={JobDescription} />
    </Switch>
  );
};

export default Routes;
