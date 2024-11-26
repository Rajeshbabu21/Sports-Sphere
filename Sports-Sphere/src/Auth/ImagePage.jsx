
import React from 'react'
import { Button, Box, Typography, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logoImage from '../assets/logo.jpg' 

function ImagePage() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'rgb(11 17 32)',
      }}
    >
      <Box
        component='img'
        src={logoImage}
        alt='Centered Image'
        sx={{
          width: 200,
          height: 200,
          mb: 3,
          border: '2px solid black',
        }}
      />
      <Typography variant='h4' gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Container maxWidth='xs' sx={{ textAlign: 'center' }}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/login')}
          sx={{ mb: 3, width: '100%', borderRadius: '3' }}
        >
          Login
        </Button>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => navigate('/signup')}
          sx={{ width: '100%' }}
        >
          Sign Up
        </Button>
      </Container>
    </Box>
  )
}

export default ImagePage
