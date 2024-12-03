const cron = require("node-cron");
const expenses = require("../src/models/expenseModel");

cron.schedule("0 0 * * *", () => {
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const weeklyExpenses = expenses.filter(e => new Date(e.date) >= lastWeek);

  const total = weeklyExpenses.reduce((sum, e) => sum + e.amount, 0);
  console.log(`Weekly Summary: Total Spending = $${total}`);
});

module.exports = {};
