import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './ForgetPassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('') // Separate state for new password
  const [confirmPassword, setConfirmPassword] = useState('') // Separate state for confirm password
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // You can add validation for the new password and confirm password matching here
    if (!email.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      setMessage('Please fill out all fields.')
    } else if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.')
    } else {
      setMessage(`Password reset link sent to ${email}`)
      setTimeout(() => {
        navigate('/login') // Redirect to login after reset
      }, 3000)
    }
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 20,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        textAlign: 'center',
        backgroundColor: 'white',
      }}
    >
      <Typography variant='h5' sx={{ mb: 3 }}>
        Forgot Password
      </Typography>

      <TextField
        label='Email Address'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <TextField
        label='New Password'
        type='password' // Use password type for the new password
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} // Update new password state
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <TextField
        label='Confirm Password'
        type='password' // Use password type for the confirm password
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        sx={{ mb: 2 }}
      >
        Send Reset Link
      </Button>

      {message && (
        <Typography variant='body2' color='textSecondary' sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  )
}

export default ForgotPassword
