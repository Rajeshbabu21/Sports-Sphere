import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from './Auth/SignUpForm'
import ImagePage from './Auth/ImagePage'
import LoginForm from './Auth/LoginForm'
import CreateProfile from './Profile/create/CreateProfile'
import MainContent from './MainContent/MainContent'
import Navbar from '../src/Componenets/Navbar/Navbar'
import Team from '../src/Pages/Team/Team'
import Gallery from '../src/Pages/Gallery/Gallery'
import Schedule from '../src/Pages/Schedule/Schedule'
import Message from './Pages/Message/Message'
import Football from "../../Sports-Sphere/src/Pages/Football/Football"
import CreateTeamPage from "../src/Pages/Team/CreateTeamPage" 
import Chess from './Pages/Chess/Chess'
import Cricket from './Pages/Cricket/Cricket'
import Handball from './Pages/Handball/Handball'
import Volleyball from './Pages/Volleyball/Volleyball'
import Carrom from './Pages/Carrom/Carrom'
import User from "./Pages/UserProfile/User"
// import Footer from "./Componenets/Navbar/Footer"
import './App.css'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<ImagePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/create-profile' element={<CreateProfile />} />
          <Route path='/football' element={<Football />} />
          <Route path='/carrom' element={<Carrom />} />
          <Route path='/chess' element={<Chess />} />
          <Route path='/cricket' element={<Cricket />} />
          <Route path='/handball' element={<Handball />} />
          <Route path='/volleyball' element={<Volleyball />} />

          {/* Wrap MainContent and other pages with Navbar */}
          <Route
            path='/maincontent'
            element={
              <>
                <Navbar />
                <MainContent />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path='/team'
            element={
              <>
                <Navbar />
                <Team />
                {/* <Footer /> */}
              </>
            }
          />

          <Route
            path='/create-team'
            element={
              <>
                <Navbar />
                <CreateTeamPage />
                {/* <Message /> */}
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path='/gallery'
            element={
              <>
                <Navbar />
                <Gallery />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path='/schedule'
            element={
              <>
                <Navbar />
                <Schedule />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path='/message'
            element={
              <>
                <Navbar />
                <Message />
                {/* <Footer /> */}
              </>
            }
          />

          <Route
            path='/user'
            element={
              <>
                <Navbar />
                <User />
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
