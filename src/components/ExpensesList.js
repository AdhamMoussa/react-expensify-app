import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import ExpenseItem from "./ExpenseItem";

export const ExpensesList = props => {
  return (
    <div className="expenses-list">
      <div className="wrapper">
      <table>
        <thead>
          <tr>
            <td>Expenses</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
        {props.expenses.length === 0 ? (
          <tr>
            <td>
              <p className="no-expenses">No Expenses</p>
            </td>
          </tr>
        ) : (
          props.expenses.map(exp => {
            return <ExpenseItem {...exp} key={exp.id} />;
          })
        )}
        </tbody>
      </table>
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
