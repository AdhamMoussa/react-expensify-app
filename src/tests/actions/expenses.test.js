import configureMockStore from "redux-mock-store";
import {
  addExpense,
  editExpense,
  removeExpense,
  setExpenses
} from "../../actions/expenses";
import thunk from "redux-thunk";
import expenses from '../fixtures/demoExpenses';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

test("should setup remove expense action object", () => {
  const action = removeExpense("a1b2");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "a1b2"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("a1b2", {
    description: "description text",
    amount: 100,
    note: "note text",
    createdAt: 542
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "a1b2",
    updatedData: {
      description: "description text",
      amount: 100,
      note: "note text",
      createdAt: 542
    }
  });
});
test("should setup add expense action object with provided data", () => {
  const data = {
    id: "lkjn3e456l",
    description: "description text",
    amount: 100,
    note: "note text",
    createdAt: 542
  };
  const action = addExpense(data);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    newExpense: {
      ...data
    }
  });
});

test('should setup set expenses action object with provided data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});