import React from "react";
import { Switch } from "react-router-dom";
import { Payment } from "src/components/Payment";
import { DashboardJobs } from "src/pages/DashboardJobs";
import { JobDescription } from "src/pages/JobDescription";
import { Register } from "src/pages/Register";
import { Home } from "../pages/Home";
import Route from "./route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard-jobs" component={DashboardJobs} />
      <Route path="/job-description" component={JobDescription} />
      <Route path="/signin" component={Register} />
      <Route path="/payment" component={Payment} />
    </Switch>
  );
};

export default Routes;
