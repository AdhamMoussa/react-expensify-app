import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <div>
      <Header />
      <Route {...rest} />
    </div>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(PrivateRoute);
