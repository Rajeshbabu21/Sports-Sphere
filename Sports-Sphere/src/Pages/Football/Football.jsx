import React from 'react'
import "./football.css"
import Navbar from '../../Componenets/Navbar/Navbar'

const Football = () => {
  return (
    <div>
      {/* From Uiverse.io by ammarsaa */}
      <Navbar />
      <form className='form'>
        <p className='title'>Register</p>
        {/* <p className='message'>Register now and get full access to our app.</p> */}
        <div className='flex'>
          <label>
            <input className='input' type='text' placeholder='' required />
            <span>Firstname</span>
          </label>

          <label>
            <input className='input' type='text' placeholder='' required />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input className='input' type='email' placeholder='' required />
          <span>Age</span>
        </label>

        <label>
          <input className='input' type='email' placeholder='' required />
          <span>Position</span>
        </label>

        <label>
          <input className='input' type='password' placeholder='' required />
          <span>Experience </span>
        </label>


        <label>
          <input className='input' type='password' placeholder='' required />
          <span>Contact Information</span>
        </label>

        <button className='submit'>Submit</button>

        {/* <p className='signin'> */}
          {/* Already have an account? <a href='#'>Signin</a> */}
        {/* </p> */}
      </form>
    </div>
  )
}

export default Football
