const express = require("express");

const incomeRouter = express.Router();

const {
  getAllIncomes,
  addIncome,
} = require("../controllers/income.controller");

incomeRouter.get("/", async (req, res) => {
  try {
    const income = await getAllIncomes();
    res.status(200).json(income);
  } catch (error) {
    console.error("Error while fetching income:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

incomeRouter.post("/", async (req, res) => {
  try {
    const newIncome = await addIncome(req.body);
    res.status(201).json(newIncome);
  } catch (error) {
    console.error("Error while adding income:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = incomeRouter;
