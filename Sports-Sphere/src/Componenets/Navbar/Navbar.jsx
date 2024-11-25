import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.jpg"
// import User from "../../assets/"
import profileImage from '../../assets/user.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null)

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index)
  }

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full fixed top-0 left-0 z-50 bg-gray-800 text-white p-7'>
      <nav className='flex justify-between items-center'>
        {/* Logo and Title Section */}
        <div className='flex items-center'>
          <img
            src={Logo}
            alt='Logo'
            className='h-[60px] w-[60px] mr-3 rounded-full'
          />
          <span className='font-bold text-xl'>Sports Sphere</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className='md:hidden p-2'
          onClick={toggleMobileMenu}
          aria-label='Toggle Menu'
        >
          {isOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                // d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu Links, Search Bar, and User Menu */}
        <div className={`hidden md:flex items-center space-x-10`}>
          <Link to='/team' className='hover:text-gray-300'>
            Team
          </Link>
          <Link to='/schedule' className='hover:text-gray-300'>
            Schedule
          </Link>
          <Link to='/message' className='hover:text-gray-300'>
            Message
          </Link>
          <Link to='/gallery' className='hover:text-gray-300'>
            Gallery
          </Link>

          {/* Search Bar */}
          <div className='relative mx-4'>
            <input
              type='text'
              placeholder='Search...'
              className='px-4 py-2 w-80 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* User Menu Button */}
          <Link to='/user' className='hover:text-gray-300'>
          <div className='relative'>
            <button
              // onClick={() => toggleDropdown(0)}
              className='flex items-center text-sm focus:outline-none'
            >
              {/* ccbc */}
              <img className='w-10 h-10 rounded-full' src={{profileImage}} alt="User" />
            </button>

          </div>
          </Link>

          <Link to='/logout' className='hover:text-gray-300'>
            Logout
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col bg-gray-800 text-white p-4 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className='flex flex-col space-y-2'>
          <Link to='/team' className='py-2 hover:text-gray-300'>
            Team
          </Link>
          <Link to='/schedule' className='py-2 hover:text-gray-300'>
            Schedule
          </Link>
          <Link to='/message' className='py-2 hover:text-gray-300'>
            Message
          </Link>
          <Link to='/gallery' className='py-2 hover:text-gray-300'>
            Gallery
          </Link>
        </div>

        {/* Search Bar in Mobile */}
        <div className='relative my-4'>
          <input
            type='text'
            placeholder='Search...'
            className='px-4 py-2 w-full rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* User Profile and Logout in Mobile */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='w-8 h-8 rounded-full'
              src={profileImage}
              alt='User'
            />
            <span className='text-sm'>Bonnie Green</span>
          </div>
          <Link to='/logout' className='text-sm hover:text-gray-300'>
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
