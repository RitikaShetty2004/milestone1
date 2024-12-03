const categories = ["Food", "Travel", "Shopping", "Utilities", "Health"];

function validateExpense(expense) {
  const { amount, category, date } = expense;

  if (typeof amount !== "number" || amount <= 0) {
    return "Amount must be a positive number.";
  }
  if (!categories.includes(category)) {
    return `Category must be one of: ${categories.join(", ")}.`;
  }
  if (!Date.parse(date)) {
    return "Invalid date format. Use YYYY-MM-DD.";
  }
  return null;
}

module.exports = { validateExpense, categories };
