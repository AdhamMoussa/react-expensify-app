import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__inner">
          <Link to="/dashboard" className="header__logo">
            <h1>Expensify</h1>
          </Link>
          <button className="button" onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
