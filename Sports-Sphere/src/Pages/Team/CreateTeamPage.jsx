import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateTeamPage.css'

const CreateTeamPage = () => {
  const [name, setName] = useState('')
  const [gamePreferences, setGamePreferences] = useState('')
  const navigate = useNavigate()

  const handleCreateTeam = async (e) => {
    e.preventDefault() // Prevent form submission

    try {
      const response = await fetch('http://localhost:5000/api/teams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, gamePreferences }),
      })

      if (!response.ok) {
        throw new Error('Failed to create team')
      }

      
      navigate('/manageteam')
    } catch (err) {
      console.error('Error creating team:', err)
    }
  }

  return (
    <div className='cen'>
      <h1 className='h1'>Create a New Team</h1>
      <div className='create-team-page'>
        <form onSubmit={handleCreateTeam}>
          <div>
            <label>Team Name:</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Game Preferences:</label>
            <select
              value={gamePreferences}
              onChange={(e) => setGamePreferences(e.target.value)}
              required
            >
              <option value=''>Select Sport</option>
              <option value='football'>Football</option>
              <option value='volleyball'>Volleyball</option>
              <option value='handball'>Handball</option>
              <option value='chess'>Chess</option>
              <option value='cricket'>Cricket</option>
              <option value='carrom'>Carrom</option>
            </select>
          </div>
          

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTeamPage
