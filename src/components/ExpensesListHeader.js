import React from "react";
import { connect } from 'react-redux';
import getExpensesView from '../selectors/expenses';
import getTotals from "../selectors/getTotals";
import numeral from "numeral";

export const ExpensesListHeader = props => {
  return (
    <div>
      <p>
        You have {props.totalCount} expense(s), totalling
        {numeral(props.totalAmount).format("$0,0.00")}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expensesView = getExpensesView(state.expenses, state.filters);
  return {
    totalAmount: getTotals(expensesView),
    totalCount: expensesView.length
  };
};

export default connect(mapStateToProps)(ExpensesListHeader);
