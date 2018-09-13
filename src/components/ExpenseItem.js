import React from "react";
import { Link } from 'react-router-dom';

const ExpenseItem = (props) => {
  return (
    <div>
      <Link to={`/edit/${props.id}`}>
        <h3>Expense: {props.description}</h3>
      </Link>
      <p>Amount: {props.amount}</p>
      <p>Date: {props.createdAt.format('MMM Do, YYYY')}</p>
    </div>
  );
};

export default ExpenseItem;
