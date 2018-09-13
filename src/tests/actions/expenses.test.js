import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
    description: "description text",
    amount: 100,
    note: "note text",
    createdAt: 542
  };
  const action = addExpense(data);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    newExpense: {
      id: expect.any(String),
      ...data
    }
  });
});

test('should setup add expense action object with provided data', () => {
  const data = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    newExpense: {
      id: expect.any(String),
      ...data
    }
  });
});
