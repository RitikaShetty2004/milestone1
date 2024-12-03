const express = require("express");
const { addExpense, getExpenses, analyzeSpending } = require("../controllers/expenseController");

const router = express.Router();

router.post("/expenses", addExpense);
router.get("/expenses", getExpenses);  // Ensure this line is correctly referencing getExpenses
router.get("/expenses/analysis", analyzeSpending);

module.exports = router;

