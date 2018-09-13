import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from '../actions/expenses';


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
    onSubmit: (expense) => dispatch(addExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
