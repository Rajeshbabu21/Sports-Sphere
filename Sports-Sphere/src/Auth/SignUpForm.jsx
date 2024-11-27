import React, { useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Divider,
} from '@mui/material'
import { Google as GoogleIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function SignUpForm() {
  // States for email and password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Hook to navigate programmatically
  const navigate = useNavigate()

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault()

    // Simulate user registration logic
    console.log('Signing up with:', { email, password })

    // Redirect to the profile creation page
    navigate('/create-profile')
  }

  // Handle Google Sign-In logic
  const handleGoogleSignIn = () => {
    console.log('Signing in with Google')
    // Add Google Sign-In API logic here
  }

  return (
    <Box
      component='form'
      onSubmit={handleSignUp}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        mx: 'auto',
        mt: 17,
        // overflowY: 'hidden',
         // Prevent vertical scroll
        // height: '100vh',
         // Set container height to viewport height
        p: 3,
        // px:5,
        // pt:10,
        // border: '1px solid #ddd',
        borderRadius: 2,
        backgroundColor: 'white',
        boxShadow: 3,
      }}
    >
      {/* Title */}
      <Typography variant='h5' sx={{ mb: 3 }}>
        Create Your Account
      </Typography>

      {/* Email Field */}
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      {/* Password Field */}
      <TextField
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      {/* Sign-Up Button */}
      <Button
        variant='contained'
        color='primary'
        fullWidth
        type='submit'
        sx={{ mb: 2 }}
      >
        Sign Up
      </Button>

      {/* Divider with text */}
      <Divider sx={{ width: '100%', my: 2 }}>OR</Divider>

      {/* Google Sign-In Button */}
      <Button
        variant='outlined'
        color='primary'
        fullWidth
        onClick={handleGoogleSignIn}
        startIcon={<GoogleIcon />}
        sx={{ mb: 2 }}
      >
        Sign in with Google
      </Button>

      {/* Login Link */}
      <Typography variant='body2' sx={{ mt: 2 }}>
        Already have an account?{' '}
        <Link
          href='/login'
          sx={{ color: 'primary.main', textDecoration: 'underline' }}
        >
          Log In
        </Link>
      </Typography>
    </Box>
  )
}

export default SignUpForm
