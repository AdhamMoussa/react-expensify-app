import React from 'react'
import { shallow } from 'enzyme';
import ExpenseItem from '../../components/ExpenseItem';
import expenses from '../fixtures/demoExpenses';

test('should render ExpenseItem correctly with an Expense', () => {
  const wrapper = shallow(<ExpenseItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

