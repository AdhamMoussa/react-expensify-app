import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

export const EditExpensePage = props => {
  const onSubmitHandler = expense => {
    props.onSubmit(props.expense.id, expense);
    props.history.push("/");
  };
  const onRemoveHandler = () => {
    props.onRemoveClick(props.expense.id);
    props.history.push("/");
  };
  return (
    <div>
      <h2>Edit Expense</h2>
      <ExpenseForm
        onSubmitHandler={onSubmitHandler}
        editedExpense={props.expense}
      />
      <button id="remove-btn" onClick={onRemoveHandler}>
        Remove
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (id, expense) => dispatch(editExpense(id, expense)),
    onRemoveClick: id => dispatch(removeExpense(id))
  };
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(exp => exp.id === props.match.params.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
