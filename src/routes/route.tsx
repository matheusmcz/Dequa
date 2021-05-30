import React from "react";
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactRouterDOMProps,
} from "react-router-dom";
import { useAuth } from "../context/auth";
import { home } from "./routes_constants";

interface RouteProps extends ReactRouterDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: home }} />
        );
      }}
    />
  );
};

export default Route;
