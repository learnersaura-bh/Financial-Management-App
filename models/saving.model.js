const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Saving = mongoose.model("Saving", savingSchema);

module.exports = Saving;
