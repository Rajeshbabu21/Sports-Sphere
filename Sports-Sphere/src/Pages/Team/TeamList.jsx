// src/components/TeamList/TeamList.jsx
import React from 'react'
import './TeamList.css'

const TeamList = ({ teams }) => {
  return (
    <div className='team-list'>
      {teams.length === 0 ? (
        <p>No teams found.</p>
      ) : (
        teams.map((team, index) => (
          <div className='team-item' key={index}>
            <h3>{team.name}</h3>
            <p>Game Preference: {team.gamePreferences}</p>
            <button>Join</button>
          </div>
        ))
      )}
    </div>
  )
}

export default TeamList
