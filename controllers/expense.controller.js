const Expense = require("../models/expense.model");

async function getAllExpenses() {
  try {
    const allExpenses = await Expense.find();
    console.log("Retrieved all expenses:", allExpenses);
    return allExpenses;
  } catch (error) {
    console.error("Error while fetching all expenses:", error);
    throw error;
  }
}

async function addExpense(newExpenseData) {
  try {
    const newExpense = new Expense(newExpenseData);
    const savedExpense = await newExpense.save();

    if (savedExpense) {
      console.log("Expense added successfully:", savedExpense);
      return savedExpense;
    } else {
      throw new Error("Saved expense is falsy");
    }
  } catch (error) {
    console.error("Error adding expense:", error.message);
    throw error;
  }
}

module.exports = {
  getAllExpenses,
  addExpense,
};
