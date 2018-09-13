import moment from 'moment';

const getExpensesView = (expenses, filters) => {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
    const startDateMatch = filters.startDate ? expense.createdAt.isSameOrAfter(filters.startDate) : true;
    const endDateMatch = filters.endDate ? expense.createdAt.isSameOrBefore(filters.endDate) : true;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (filters.sortBy === 'date') {
      return a.createdAt.isAfter(b.createdAt) ? -1 : 1;
    } else if (filters.sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1;
    }
  });
};

export default getExpensesView;
