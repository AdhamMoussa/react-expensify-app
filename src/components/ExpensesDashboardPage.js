import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListHeader from './ExpensesListHeader';

const ExpensesDashboardPage = (props) => {
  return (
    <div>
      <ExpensesListHeader />
      <ExpensesList />
    </div>
  )
};


export default ExpensesDashboardPage;
