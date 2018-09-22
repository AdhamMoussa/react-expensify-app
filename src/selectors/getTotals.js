export default (expenses) => {
  return expenses.reduce((a, b) => a + b.amount, 0);
};