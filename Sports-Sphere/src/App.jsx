import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Auth Components
import SignUpForm from './Auth/SignUpForm'
import ImagePage from './Auth/ImagePage'
import LoginForm from './Auth/LoginForm'
// import ForgotPassword from './Auth/ForgotPassword'
import ForgotPassword from './Auth/ForgetPassword'

// Profile Components
import CreateProfile from './Profile/create/CreateProfile'

// Main Content Components
import MainContent from './MainContent/MainContent'

// Navbar and Pages
import Navbar from './Componenets/Navbar/Navbar'
import Team from './Pages/Team/Team'
import Gallery from './Pages/Gallery/Gallery'
import Schedule from './Pages/Schedule/Schedule'
import Message from './Pages/Message/Message'

// Sports Pages
import Football from './Pages/Football/Football'
import CreateTeamPage from './Pages/Team/CreateTeamPage'
import ManageTeam from "./Pages/Team/Manageteam"
import Chess from './Pages/Chess/Chess'
import Cricket from './Pages/Cricket/Cricket'
import Handball from './Pages/Handball/Handball'
import Volleyball from './Pages/Volleyball/Volleyball'
import Carrom from './Pages/Carrom/Carrom'

// User Profile
import User from './Pages/UserProfile/User'

// CSS File
import './App.css'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path='/' element={<ImagePage />} />

          {/* Auth Routes */}
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-profile' element={<CreateProfile />} />

          {/* Main Content */}
          <Route
            path='/maincontent'
            element={
              <>
                <Navbar />
                <MainContent />
              </>
            }
          />

          {/* Team Routes */}
          <Route
            path='/team'
            element={
              <>
                <Navbar />
                <Team />
              </>
            }
          />
          <Route
            path='/create-team'
            element={
              <>
                <Navbar />
                <CreateTeamPage />
              </>
            }
          />

          <Route
            path='/manageteam'
            element={
              <>
                <Navbar />
                <ManageTeam />
                
              </>
            }
          />

          {/* Other Pages */}
          <Route
            path='/gallery'
            element={
              <>
                <Navbar />
                <Gallery />
              </>
            }
          />
          <Route
            path='/schedule'
            element={
              <>
                <Navbar />
                <Schedule />
              </>
            }
          />
          <Route
            path='/message'
            element={
              <>
                <Navbar />
                <Message />
              </>
            }
          />

          {/* Sports Pages */}
          <Route path='/football' element={<Football />} />
          <Route path='/chess' element={<Chess />} />
          <Route path='/cricket' element={<Cricket />} />
          <Route path='/handball' element={<Handball />} />
          <Route path='/volleyball' element={<Volleyball />} />
          <Route path='/carrom' element={<Carrom />} />

          {/* User Profile */}
          <Route
            path='/user'
            element={
              <>
                <Navbar />
                <User />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
