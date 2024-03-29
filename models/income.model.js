const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
  }
}, {
  timestamps: true
})

const Income = mongoose.model('Income', incomeSchema)

module.exports = Income