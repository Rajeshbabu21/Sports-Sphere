import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TeamList from './TeamList'
import './FindTeamPage.css'

const FindTeamPage = () => {
  const [teams, setTeams] = useState([]) // State to hold the list of teams
  const [searchQuery, setSearchQuery] = useState('') // State for the search query
  const navigate = useNavigate()

  // Fetch teams from the backend
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/teams')
        const data = await response.json()
        setTeams(data)
      } catch (err) {
        console.error('Error fetching teams:', err)
      }
    }
    fetchTeams()
  }, []) // This effect runs only once when the component mounts

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Filter teams based on the search query
  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.gamePreferences.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreateTeamClick = () => {
    navigate('/create-team')
  }

  return (
    <div className='find-team-page'>
      <div className='search-bar-container'>
        <input
          type='text'
          placeholder='Find Team'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <i className='search-bar-icon fas fa-search'></i>
      </div>
      <button className='raj' onClick={handleCreateTeamClick}>
        Create Team
      </button>
      <TeamList teams={filteredTeams} />{' '}
      {/* Display the filtered list of teams */}
    </div>
  )
}

export default FindTeamPage
