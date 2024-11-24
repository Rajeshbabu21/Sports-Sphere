const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Initialize the app
const app = express()

// Middleware
app.use(cors())
app.use(express.json()) 

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/teamDB' 
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')

    
    createInitialCollection()
  })
  .catch((err) => console.error('MongoDB connection error:', err))

// Define the schema and model
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gamePreferences: { type: String, required: true },
})

const Team = mongoose.model('Team', teamSchema)

// Function to create an initial collection
const createInitialCollection = async () => {
  try {
    const existingTeams = await Team.find() 
    if (existingTeams.length === 0) {
 
      const defaultTeam = new Team({
        name: 'Default Team',
        gamePreferences: 'Football',
      })
      await defaultTeam.save()
      console.log('Default collection created with initial data')
    } else {
      console.log('Collection already exists with data')
    }
  } catch (err) {
    console.error('Error creating initial collection:', err)
  }
}

// Routes
app.get('/api/teams', async (req, res) => {
  try {
    const teams = await Team.find()
    res.json(teams)
  } catch (err) {
    res.status(500).json({ error: 'Error fetching teams' })
  }
})

app.post('/api/teams', async (req, res) => {
  try {
    const { name, gamePreferences } = req.body

    const newTeam = new Team({ name, gamePreferences })
    const savedTeam = await newTeam.save()
    res.status(201).json(savedTeam)
  } catch (err) {
    res.status(500).json({ error: 'Error creating team' })
  }
})

// Start the server
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
