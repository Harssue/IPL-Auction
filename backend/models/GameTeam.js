const mongoose = require('mongoose');

// Represents one IPL franchise's participation slot in a specific game
const gameTeamSchema = new mongoose.Schema(
  {
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game',
      required: true,
    },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null, // null = AI controlled
    },
    purseRemaining: {
      type: Number, // in Lakhs
      default: 9000, // 90 Crore = 9000 Lakhs
    },
    squadSize: {
      type: Number,
      default: 0,
    },
    isAI: {
      type: Boolean,
      default: true,
    },
    overseasCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('GameTeam', gameTeamSchema);
