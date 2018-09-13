import React from 'react';
import { shallow } from 'enzyme';
import getType from 'jest-get-type';
import ExpenseForm from '../../components/ExpenseForm';
import { SingleDatePicker } from 'react-dates';
import expenses from '../fixtures/demoExpenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data correctly', () => {
  const wrapper = shallow(<ExpenseForm editedExpense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid description & amount inputs', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(getType(wrapper.state('descriptionError'))).toBe('string');
  expect(getType(wrapper.state('amountError'))).toBe('string');
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'some text';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('#description-input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set amount on input change', () => {
  const value = '452.15';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('#amount-input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set amount state when input is invalid', () => {
  const value = '452.222';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('#amount-input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should set note state on input change', () => {
  const value = 'note text';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('#note-input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should call onSubmit props for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm editedExpense={expenses[1]} onSubmitHandler={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  delete expenses[1].id;
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
});

test('should set createdAt state on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set datePickerFocused state on focus change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
  expect(wrapper.state('datePickerFocused')).toBe(focused);
});












