import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Expensify</h1>
      <nav>
        <NavLink to='/' activeClassName="active-link" exact={true}>DashBoard</NavLink>
        <NavLink to='/create' activeClassName="active-link">Add Expense</NavLink>
        <NavLink to='/help' activeClassName="active-link">Help</NavLink>
      </nav>
    </div>
  )
};

export default Header;
