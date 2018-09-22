import expenses from '../fixtures/demoExpenses';
import getTotals from '../../selectors/getTotals';

test('should return totals object of expenses', () => {
  expect(getTotals(expenses)).toBe(55590);
});

test('should return totals object of zeros when no expenses', () => {
  expect(getTotals([])).toBe(0);
});

test('should return totals object correctly when one expense', () => {
  expect(getTotals([expenses[0]])).toBe(51200);
});
