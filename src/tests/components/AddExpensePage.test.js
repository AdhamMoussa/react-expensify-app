import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/demoExpenses';

test('should render AddExpensePage correctly', () => {
  const wrapper = shallow(<AddExpensePage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop when onSubmitHandler called', () => {
  const onSubmitSpy = jest.fn();
  const historySpy = { push: jest.fn() };
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />);
  wrapper.find(ExpenseForm).prop('onSubmitHandler')(expenses[2]);
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[2]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
});
