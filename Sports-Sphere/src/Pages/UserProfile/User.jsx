import React from 'react'
import './user.css' // Ensure to link your CSS for styles
import profileImage from '../../assets/user.jpg'
const User = () => {
  return (
    <div className='profile-container'>
      {/* Profile Picture and Online Status */}
      <div className='profile-picture-section'>
        <div className='profile-picture'>
          <div className='loading-text'>Profile Picture</div>
          <img className='ram'
            src={profileImage} // Use the imported image
            alt='Profile Placeholder'
          />
         
        </div>
        <label className='online-status'>
          <input type='checkbox' />
          Show as Online
        </label>
      </div>

      {/* Profile Information Section */}
      <div className='profile-information-section'>
        <h3>👤 Profile Information</h3>
        <div className='form-group'>
          <label>Full Name</label>
          <input type='text' placeholder='Enter your full name' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' placeholder='Enter your email' />
        </div>
        <div className='form-group'>
          <label>Age</label>
          <input type='number' placeholder='Enter your Age' />
        </div>
        <div className='form-group'>
          <label>Bio</label>
          <textarea placeholder='Enter your bio'></textarea>
        </div>
        {/* <div className='form-group'>
          <label>Interests</label>
          <button className='add-interest-btn'>+ Add Interest</button>
        </div> */}
        <button className='save-changes-btn'>Save Changes</button>
      </div>

      {/* Privacy Settings Section */}
      <div className='privacy-settings-section'>
        <h3>🛡️ Privacy Settings</h3>
        <label className='privacy-option'>
          <input type='checkbox' />
          Allow others to view my profile
        </label>
        <label className='privacy-option'>
          <input type='checkbox' />
          Allow messages from team members
        </label>
      </div>
    </div>
  )
}

export default User
