import React from "react";
import { shallow } from "enzyme";
import { FiltersControls } from "../../components/FiltersControls";
import {filters, altFilters} from "../fixtures/filters";
import { DateRangePicker } from 'react-dates';

test("should render FiltersControls with default values correctly", () => {
  const wrapper = shallow(<FiltersControls filters={filters} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render FiltersControls with provided values correctly", () => {
  const wrapper = shallow(<FiltersControls filters={altFilters} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call setFilterText on filter text change", () => {
  const setFilterTextSpy = jest.fn();
  const wrapper = shallow(
    <FiltersControls filters={filters} setFilterText={setFilterTextSpy} />
  );
  wrapper.find("#filter-text-input").simulate("change", {
    target: { value: "some text" }
  });
  expect(setFilterTextSpy).toHaveBeenLastCalledWith("some text");
});

test("should call sortByDate on sort selector change to date", () => {
  const sortByDateSpy = jest.fn();
  const sortByAmountSpy = jest.fn();
  const wrapper = shallow(
    <FiltersControls
      filters={filters}
      sortByAmount={sortByAmountSpy}
      sortByDate={sortByDateSpy}
    />
  );
  wrapper.find("#sort-select").simulate("change", {
    target: { value: "date" }
  });
  expect(sortByDateSpy).toHaveBeenCalled();
  expect(sortByAmountSpy).not.toHaveBeenCalled();
});

test("should call sortByAmount on sort selector change to amount", () => {
  const sortByDateSpy = jest.fn();
  const sortByAmountSpy = jest.fn();
  const wrapper = shallow(
    <FiltersControls
      filters={filters}
      sortByAmount={sortByAmountSpy}
      sortByDate={sortByDateSpy}
    />
  );
  wrapper.find("#sort-select").simulate("change", {
    target: { value: "amount" }
  });
  expect(sortByAmountSpy).toHaveBeenCalled();
  expect(sortByDateSpy).not.toHaveBeenCalled();
});

test('should call setStartDate & setEndDate on date change', () => {
  const setStartDateSpy = jest.fn();
  const setEndDateSpy = jest.fn();
  const wrapper = shallow(
    <FiltersControls
      filters={filters}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
    />
  );
  wrapper.find(DateRangePicker).prop('onDatesChange')({
    startDate: 1000,
    endDate: 2400
  });
  expect(setStartDateSpy).toHaveBeenLastCalledWith(1000);
  expect(setEndDateSpy).toHaveBeenLastCalledWith(2400);
});

test('should set onFocusChange state when date focus changes', () => {
  const wrapper = shallow(<FiltersControls filters={filters} />);
  wrapper.find(DateRangePicker).prop('onFocusChange')("startDate");
  expect(wrapper.state("focusedInput")).toBe("startDate");
});
