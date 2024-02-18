const Income = require('../models/income.model');

async function getAllIncomes() {
  try {
    const income = await Income.find();
    console.log('All income:', income);
    return income;
  } catch (error) {
    console.error('Error while getting income:', error);
    throw error; 
  }
}

async function addIncome(incomeData) {
  try {
    const newIncome = new Income(incomeData);
    const savedIncome = await newIncome.save();

    if (savedIncome) {
      console.log('Income added successfully:', savedIncome);
      return savedIncome;
    } else {
      console.error('Error adding income:', 'Saved income is falsy');
      throw new Error('Saved income is falsy');
    }
  } catch (error) {
    console.error('Error adding income:', error.message);
    throw error; 
  }
}

module.exports = {
  getAllIncomes,
  addIncome
};
