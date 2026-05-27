const mongoose = require('mongoose');

// A player acquired by a team in a specific game
const squadSchema = new mongoose.Schema(
  {
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game',
      required: true,
    },
    gameTeamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GameTeam',
      required: true,
    },
    playerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player',
      required: true,
    },
    soldPrice: {
      type: Number, // in Lakhs
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Squad', squadSchema);
