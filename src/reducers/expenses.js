const defaultExpensesState = [];

const expensesReducer = (state = defaultExpensesState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.newExpense];
    case "EDIT_EXPENSE":
      return state.map(
        expense =>
          expense.id === action.id
            ? { ...expense, ...action.updatedData }
            : expense
      );
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);
    default:
      return state;
  }
};

export default expensesReducer;
