import getExpensesView from "../../selectors/expenses";
import moment from "moment";
import expenses from '../fixtures/demoExpenses';

test("should filter expenses by text", () => {
  const filters = {
    text: "t",
    sortBy: "date",
    startDate: null,
    endDate: null
  };
  const filteredExpenses = getExpensesView(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[2], expenses[1]]);
});

test("should filter expenses by start-date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(-10),
    endDate: null
  };
  const filteredExpenses = getExpensesView(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[2], expenses[0]]);
});

test("should filter expenses by end-date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: null,
    endDate: moment(700)
  };
  const filteredExpenses = getExpensesView(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[0], expenses[1]]);
});

test("should sort expenses by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: null,
    endDate: null
  };
  const filteredExpenses = getExpensesView(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort expenses by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: null,
    endDate: null
  };
  const filteredExpenses = getExpensesView(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[0], expenses[2], expenses[1]]);
});



