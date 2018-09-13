import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import ExpenseItem from "./ExpenseItem";
import FiltersControls from "./FiltersControls";

export const ExpensesList = props => {
  return (
    <div>
      <FiltersControls />
      <div>
        {props.expenses.length === 0 ? (
          <p>No Expenses</p>
        ) : (
          props.expenses.map(exp => {
            return <ExpenseItem {...exp} key={exp.id} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);
