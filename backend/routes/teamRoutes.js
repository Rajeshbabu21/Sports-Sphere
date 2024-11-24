const express = require('express')
const Team = require('../models/teamModel')

const router = express.Router()

// Fetch All Teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find()
    res.json(teams)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

//  Create a New Team
router.post('/', async (req, res) => {
  const { name, gamePreferences, members } = req.body

  try {
    const newTeam = new Team({
      name,
      gamePreferences,
      members,
    })
    await newTeam.save()
    res
      .status(201)
      .json({ message: 'Team created successfully', team: newTeam })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

//  Delete a Team by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Team.findByIdAndDelete(id)
    res.json({ message: 'Team deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
