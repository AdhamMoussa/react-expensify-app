import React from 'react';
import { shallow } from 'enzyme';
import ExpensesDashboardPage from '../../components/ExpensesDashboardPage';

test('should render ExpensesDashboardPage correctly', () => {
  const wrapper = shallow(<ExpensesDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
