import React from "react";
import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import Route from "./route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
};

export default Routes;
