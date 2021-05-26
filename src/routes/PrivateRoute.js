import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelector } from "../redux/auth/authSelectors";
const PrivateRoute = ({ path, exact, component }) => {
  const auth = useSelector((state) => authSelector(state));
  return auth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
