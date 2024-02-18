const Saving = require('../models/saving.model');

async function getAllSavings() {
  try {
    const allSavings = await Saving.find();
    console.log('Successfully retrieved all savings:', allSavings);
    return allSavings;
  } catch (error) {
    console.error('Error while getting all savings:', error);
    throw error;
  }
}

async function addSaving(newSavingData) {
  try {
    const newSaving = new Saving(newSavingData);
    const savedSaving = await newSaving.save();
    if (savedSaving) {
      console.log('Saving added successfully:', savedSaving);
      return savedSaving;
    } else {
      console.error('Error adding saving: Saving not found');
      return null;
    }
  } catch (error) {
    console.error('Error adding saving:', error);
    throw error;
  }
}

module.exports = {
  getAllSavings,
  addSaving,
};
