import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

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
      <div className="page-head">
        <div className="wrapper">
          <h2>Edit Expense</h2>
        </div>
      </div>
      <div className="page-body">
        <div className="wrapper">
          <ExpenseForm
            onSubmitHandler={onSubmitHandler}
            editedExpense={props.expense}
          />
          <button
            className="button button--red"
            id="remove-btn"
            onClick={onRemoveHandler}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (id, expense) => dispatch(startEditExpense(id, expense)),
    onRemoveClick: id => dispatch(startRemoveExpense(id))
  };
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(exp => exp.id === props.match.params.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
