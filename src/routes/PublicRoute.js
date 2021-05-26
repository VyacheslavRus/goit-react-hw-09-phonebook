import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelector } from "../redux/auth/authSelectors";
const PublicRoute = ({ path, exact, component, restricted }) => {
  const auth = useSelector((state) => authSelector(state));

  return auth && restricted ? (
    <Redirect to="/clients" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
