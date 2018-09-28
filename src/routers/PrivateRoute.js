import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <div>
      <Header />
      <Route {...rest} render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
        )
      }} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(PrivateRoute);
