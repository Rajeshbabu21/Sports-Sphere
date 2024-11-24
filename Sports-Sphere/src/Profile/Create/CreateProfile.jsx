import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css' // Ensure correct path to your CSS
import profileImage from '../../assets/user.jpg'

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sport: '',
  })

  const navigate = useNavigate() // Initialize navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted', formData)

    // Navigate to the main content page after form submission
    navigate('/maincontent')
  }

  return (
    <div className='form-container'>
      <h2 className='h2'>Create Profile</h2>
      <div className='profile-image'>
        <img
          src={profileImage} // Use the imported image
          alt='Profile Placeholder'
        />
      </div>
      <form className='profile-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='form-group'>
          <label>Age:</label>
          <input
            type='number'
            name='age'
            value={formData.age}
            onChange={handleChange}
            placeholder='Enter your age'
            required
          />
        </div>
        <div className='form-group'>
          <label>Sport:</label>
          <input
            type='text'
            name='sport'
            value={formData.sport}
            onChange={handleChange}
            placeholder='Enter your sport'
            required
          />
        </div>
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateProfile
