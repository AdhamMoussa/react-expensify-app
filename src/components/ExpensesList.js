import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import ExpenseItem from "./ExpenseItem";
import FiltersControls from "./FiltersControls";
import ExpensesListHeader from './ExpensesListHeader';

export const ExpensesList = props => {
  return (
    <div>
      <ExpensesListHeader />
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
