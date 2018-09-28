import database from "../firebase/firebase";
import moment from "moment";

export const addExpense = expense => {
  return {
    type: "ADD_EXPENSE",
    newExpense: {
      ...expense
    }
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      amount = 0,
      note = "",
      createdAt = 0
    } = expenseData;
    const expense = { description, amount, note, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const editExpense = (id, updatedData) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updatedData
  };
};

export const startEditExpense = (id, updatedData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update({ ...updatedData })
      .then(() => {
        dispatch(
          editExpense(id, {
            ...updatedData,
            createdAt: moment(updatedData.createdAt)
          })
        );
      });
  };
};

export const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense(id));
      });
  };
};

export const setExpenses = expenses => {
  return {
    type: "SET_EXPENSES",
    expenses
  };
};

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(child => {
          expenses.push({
            id: child.key,
            ...child.val(),
            createdAt: moment(child.val().createdAt)
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
