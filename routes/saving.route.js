const express = require('express');
const savingRouter = express.Router();
const { getAllSavings, addSaving } = require('../controllers/saving.controller');

savingRouter.get('/', async (req, res) => {
  try {
    const allSavings = await getAllSavings();
    res.status(200).json({ message: 'All savings fetched successfully', savings: allSavings });
  } catch (error) {
    console.error('Error while fetching all savings:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

savingRouter.post('/', async (req, res) => {
  try {
    const newSaving = await addSaving(req.body);
    if (newSaving) {
      res.status(201).json({ message: 'Saving added successfully', saving: newSaving });
    } else {
      res.status(404).json({ error: 'Failed to add saving' });
    }
  } catch (error) {
    console.error('Error while creating saving:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = savingRouter;
