const expenses = require("../models/expenseModel");

function addExpense(req, res) {
  const { amount, category, description, date } = req.body;

  // Validate the expense
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ status: "error", data: null, error: "Amount must be a positive number." });
  }
  
  const expense = {
    id: expenses.length + 1,
    amount,
    category,
    description: description || '',
    date,
  };

  expenses.push(expense); // Store in memory
  res.status(201).json({ status: "success", data: expense, error: null });
}

function getExpenses(req, res) {
  // Return all expenses
  res.json({ status: "success", data: expenses, error: null });
}

function analyzeSpending(req, res) {
  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  const totalSpending = Object.values(categoryTotals).reduce((a, b) => a + b, 0);
  const highestSpendingCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    Object.keys(categoryTotals)[0]
  );

  res.json({
    status: "success",
    data: {
      totalSpending,
      categoryBreakdown: categoryTotals,
      highestSpendingCategory,
    },
    error: null,
  });
}

module.exports = { addExpense, getExpenses, analyzeSpending };

