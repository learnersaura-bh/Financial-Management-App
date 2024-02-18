const express = require("express");
const expenseRouter = express.Router();
const {
  getAllExpenses,
  addExpense,
} = require("../controllers/expense.controller");

expenseRouter.get("/", async (req, res) => {
  try {
    const allExpenses = await getAllExpenses();
    res.status(200).json(allExpenses);
  } catch (error) {
    console.error("Error while getting all expenses:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

expenseRouter.post("/", async (req, res) => {
  try {
    const newExpenseData = req.body;
    const savedExpense = await addExpense(newExpenseData);
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error("Error while adding expense:", error.message);
    res.status(500).json(error);
  }
});

module.exports = expenseRouter;
