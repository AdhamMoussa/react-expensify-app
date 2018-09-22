import React from "react";
import { shallow } from "enzyme";
import { ExpensesListHeader } from "../../components/ExpensesListHeader";

test("should render ExpensesListHeader correctly without expenses", () => {
  const wrapper = shallow(
    <ExpensesListHeader totalAmount={0} totalCount={0} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesListHeader correctly with expenses", () => {
  const wrapper = shallow(
    <ExpensesListHeader totalAmount={1401} totalCount={4} />
  );
  expect(wrapper).toMatchSnapshot();
});
