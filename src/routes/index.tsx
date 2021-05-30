import React from "react";
import { Switch } from "react-router-dom";
import { Payment } from "src/components/Payment";
import { DashboardJobs } from "src/pages/DashboardJobs";
import { EventPage } from "src/pages/EventPage";
import { JobDescription } from "src/pages/JobDescription";
import { PremiumDashboard } from "src/pages/PremiumDashboard";
import { Register } from "src/pages/Register";
import { Home } from "../pages/Home";
import Route from "./route";
import {
  dashboardEvents,
  dashboardJobs,
  eventDescription,
  home,
  jobDescription,
  payment,
  signup,
} from "./routes_constants";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={home} exact component={Home} />
      <Route path={dashboardJobs} component={DashboardJobs} />
      <Route path={jobDescription} isPrivate component={JobDescription} />
      <Route path={signup} component={Register} />
      <Route path={payment} component={Payment} />
      <Route path={dashboardEvents} isPrivate component={PremiumDashboard} />
      <Route path={eventDescription} isPrivate component={EventPage} />
    </Switch>
  );
};

export default Routes;
