import React, { useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
} from '@mui/material'
import { Google as GoogleIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  // State management for form inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  // Navigation hook
  const navigate = useNavigate()

  // Handlers
  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Logging in with:', { email, password, rememberMe })

    // Add login logic here (e.g., API call)
    navigate('/maincontent')
  }

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked')
    // Add forgot password functionality
  }

  const handleGoogleLogin = () => {
    console.log('Continue with Google clicked')
    // Add Google login logic
  }

  const handleSignUp = () => {
    console.log('Sign Up clicked')
    navigate('/signup') // Redirect to signup page
  }

  return (
    <Box
      component='form'
      onSubmit={handleLogin}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        maxWidth: 400,
        mx: 'auto',
        mt: 10,
        p: 3,
        border: '1px solid #ddd',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Title */}
      <Typography variant='h5' sx={{ mb: 3 }}>
        Login
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

      {/* Remember Me */}
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            color='primary'
          />
        }
        label='Remember Me'
        sx={{ alignSelf: 'flex-start', mb: 2 }}
      />

      {/* Login Button */}
      <Button
        variant='contained'
        color='primary'
        fullWidth
        type='submit'
        sx={{ mb: 2 }}
      >
        Log In
      </Button>

      {/* Forgot Password */}
      <Link
        href='#'
        onClick={handleForgotPassword}
        sx={{
          fontSize: '0.9rem',
          color: 'primary.main',
          textDecoration: 'underline',
          mb: 2,
        }}
      >
        Forgot Password?
      </Link>

      {/* Divider */}
      <Divider sx={{ width: '100%', my: 2 }}>OR</Divider>

      {/* Google Login */}
      <Button
        variant='outlined'
        color='primary'
        fullWidth
        onClick={handleGoogleLogin}
        startIcon={<GoogleIcon />}
        sx={{ mb: 2 }}
      >
        Continue with Google
      </Button>

      {/* Signup Link */}
      <Typography variant='body2' sx={{ mt: 2 }}>
        Don’t have an account?{' '}
        <Link
          href='#'
          onClick={handleSignUp}
          sx={{ color: 'primary.main', textDecoration: 'underline' }}
        >
          Sign Up
        </Link>
      </Typography>
    </Box>
  )
}

export default LoginForm
