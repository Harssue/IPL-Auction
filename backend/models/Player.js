const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Batsman', 'Bowler', 'All-Rounder', 'Wicketkeeper'],
      required: true,
    },
    nationality: {
      type: String,
      enum: ['Indian', 'Overseas'],
      required: true,
    },
    basePrice: {
      type: Number, // in Lakhs
      required: true,
      default: 20,
    },
    battingStyle: {
      type: String,
    },
    bowlingStyle: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Player', playerSchema);
