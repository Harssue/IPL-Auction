const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    lobbyCode: {
      type: String,
      required: true,
      unique: true,
      maxlength: 8,
    },
    status: {
      type: String,
      enum: ['waiting', 'auction', 'complete'],
      default: 'waiting',
    },
    hostUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    maxPlayers: {
      type: Number,
      default: 10,
    },
    // Stores the shuffled player ObjectId pool for this game's auction
    playerPool: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Player',
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Game', gameSchema);
