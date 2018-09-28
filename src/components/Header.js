import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
  return (
    <div>
      <h1>Expensify</h1>
      <nav>
        <NavLink to='/dashboard' activeClassName="active-link">DashBoard</NavLink>
        <NavLink to='/create' activeClassName="active-link">Add Expense</NavLink>
        <NavLink to='/help' activeClassName="active-link">Help</NavLink>
        <button
          onClick={ startLogout }
        >Logout</button>
      </nav>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};

export default connect(null, mapDispatchToProps)(Header);
