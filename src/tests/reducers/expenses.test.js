import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import demoExpensesState from '../fixtures/demoExpenses';

test('should return empty Array by default', () => {
  expect(expensesReducer(undefined, {type: '@@INIT'})).toEqual([]);
});


test('should add an expense', () => {
  const newExpense = {
    id: "4",
    description: "internet",
    amount: 200,
    note: "",
    createdAt: moment(1200)
  };
  const state = expensesReducer(demoExpensesState, {
    type: 'ADD_EXPENSE',
    newExpense
  });
  expect(state).toEqual([...demoExpensesState, newExpense]);
});

test('should edit an expense', () => {
  const updatedData = {
    description: "utility",
    amount: 9200,
    note: "",
    createdAt: moment(900)
  };
  const state = expensesReducer(demoExpensesState, {
    type: 'EDIT_EXPENSE',
    id: "3",
    updatedData
  });
  expect(state).toEqual([demoExpensesState[0], demoExpensesState[1], {
    id: '3',
    description: "utility",
    amount: 9200,
    note: "",
    createdAt: moment(900)
  }]);
});

test('should NOT edit an expense WHEN ID NOT FOUND', () => {
  const updatedData = {
    description: "utility",
    amount: 9200,
    note: "",
    createdAt: moment(900)
  };
  const state = expensesReducer(demoExpensesState, {
    type: 'EDIT_EXPENSE',
    id: "-1",
    updatedData
  });
  expect(state).toEqual(demoExpensesState);
});

test('should remove an expense', () => {
  const state = expensesReducer(demoExpensesState, {
    type: 'REMOVE_EXPENSE',
    id: "2"
  });
  expect(state).toEqual([demoExpensesState[0], demoExpensesState[2]]);
});

test('should NOT remove an expense WHEN ID NOT FOUND', () => {
  const state = expensesReducer(demoExpensesState, {
    type: 'REMOVE_EXPENSE',
    id: "-1"
  });
  expect(state).toEqual(demoExpensesState);
});

