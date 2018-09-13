import moment from "moment";
import {
  setFilterText,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount
} from "../../actions/filters";

test("should setup filter text action object with provided text", () => {
  const action = setFilterText("filter text");
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text: "filter text"
  });
});

test("should setup filter text action object with default value", () => {
  const action = setFilterText();
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text: ""
  });
});

test("should setup set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  });
});
test("should setup set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  });
});

test("should setup sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});
test("should setup sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
