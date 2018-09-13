import uuid from "uuid";

export const addExpense = ({
  description = "",
  amount = 0,
  note = "",
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    newExpense: {
      id: uuid(),
      description,
      amount,
      note,
      createdAt
    }
  };
};

export const editExpense = (id, updatedData) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updatedData
  };
};

export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
};
