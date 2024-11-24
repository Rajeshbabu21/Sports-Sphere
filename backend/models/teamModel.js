const mongoose = require('mongoose')


const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gamePreferences: { type: String, required: true },
  members: { type: Array, default: [] }, 
  createdAt: { type: Date, default: Date.now },
})


const Team = mongoose.model('Team', teamSchema)

module.exports = Team
