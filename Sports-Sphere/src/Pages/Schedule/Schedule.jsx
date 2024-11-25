import React from 'react'
import './Dashboard.css' // Assuming styles are in a separate CSS file

const Schedule = () => {
  return (
    <div className='dashboard-container'>
      {/* Sidebar Section */}
      <div className='sidebar-1'>
        {/* Filters Section */}
        <div className='filters-section'>
          <h3>Filters</h3>
          <div className='filter-item'>
            <p>Event Type</p>
            <label>
              <input type='checkbox' defaultChecked />
              Matches
            </label>
            <label>
              <input type='checkbox' defaultChecked />
              Practices
            </label>
            <label>
              <input type='checkbox' defaultChecked />
              Team Meetings
            </label>
          </div>
          <div className='filter-item'>
            <p>Teams</p>
            {/* Add team filtering options here */}
          </div>
        </div>

        {/* Quick Add Section */}
        <div className='quick-add-section'>
          <h3>Quick Add</h3>
          <button className='quick-add-btn match-btn'>🏆 Schedule Match</button>
          <button className='quick-add-btn practice-btn'>
            🛠️ Schedule Practice
          </button>
          <button className='quick-add-btn meeting-btn'>
            👤 Schedule Meeting
          </button>
        </div>
      </div>

      {/* Schedule View Section */}
      <div className='schedule-view'>
        {/* Replace with your schedule view component or table */}
        <h2>Schedule View</h2>
        <div className='schedule-table'>
          {/* Add your schedule table or grid view here */}
          <p>Scheduled Events</p>
        </div>
      </div>
    </div>
  )
}

export default Schedule
