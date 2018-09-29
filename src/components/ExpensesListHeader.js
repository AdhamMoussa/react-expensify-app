import React from "react";
import { connect } from "react-redux";
import getExpensesView from "../selectors/expenses";
import getTotals from "../selectors/getTotals";
import numeral from "numeral";
import FiltersControls from "./FiltersControls";
import { Link } from 'react-router-dom';

export const ExpensesListHeader = props => {
  const expenseWord = props.totalCount === 1 ? "expense" : "expenses";
  return (
    <div className="page-head">
      <div className="wrapper">
        <h2>
          You have{" "}
          <span>{props.totalCount} {expenseWord}</span>
          , totalling{" "}
          <span>{numeral(props.totalAmount).format("$0,0.00")}</span>
        </h2>
        <FiltersControls />
        <div className="page-head__add-btn">
          <Link to="/create" className="button">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const expensesView = getExpensesView(state.expenses, state.filters);
  return {
    totalAmount: getTotals(expensesView),
    totalCount: expensesView.length
  };
};

export default connect(mapStateToProps)(ExpensesListHeader);
