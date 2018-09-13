import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/demoExpenses";

test("should render EditExpensePage correctly", () => {
  const wrapper = shallow(<EditExpensePage />);
  expect(wrapper).toMatchSnapshot();
});

test("should call onSubmitHandler on form submit", () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <EditExpensePage
      onSubmit={onSubmitSpy}
      history={history}
      expense={expenses[0]}
    />
  );
  wrapper.find(ExpenseForm).prop("onSubmitHandler")(expenses[0]);
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should call onRemoveClick on remove btn click", () => {
  const onRemoveSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <EditExpensePage
      onRemoveClick={onRemoveSpy}
      expense={expenses[1]}
      history={history}
    />
  );
  wrapper.find("#remove-btn").simulate("click");
  expect(onRemoveSpy).toHaveBeenLastCalledWith(expenses[1].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
