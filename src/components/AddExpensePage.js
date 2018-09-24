import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from '../actions/expenses';


export const AddExpensePage = (props) => {
  const handleFormSubmit = (expense) => {
    props.onSubmit(expense);
    props.history.push('/');
  };
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onSubmitHandler={handleFormSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (expense) => dispatch(startAddExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
