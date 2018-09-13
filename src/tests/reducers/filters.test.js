import filtersReducer from "../../reducers/filters";
import {
  setFilterText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from 'moment';

const defaultState = {
  text: "",
  sortBy: "date",
  startDate: null,
  endDate: null
};

test("should return default state when no arguments passed in", () => {
  expect(filtersReducer(undefined, {type: '@@INIT'})).toEqual(defaultState);
});

test("should set text state", () => {
  const state = filtersReducer(undefined, setFilterText("some text"));
  expect(state).toEqual({
    text: "some text",
    sortBy: "date",
    startDate: null,
    endDate: null
  });
});

test("should set sortBy-date state", () => {
  const state = filtersReducer(undefined, sortByDate());
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: null,
    endDate: null
  });
});

test("should set sortBy-amount state", () => {
  const state = filtersReducer(undefined, sortByAmount());
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: null,
    endDate: null
  });
});

test("should set start-date state", () => {
  const state = filtersReducer(undefined, setStartDate(moment(0)));
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: null
  });
});

test("should set end-date state", () => {
  const state = filtersReducer(undefined, setEndDate(moment(0)));
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: null,
    endDate: moment(0)
  });
});
