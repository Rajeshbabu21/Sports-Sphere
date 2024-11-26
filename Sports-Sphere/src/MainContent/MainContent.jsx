import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../Componenets/Navbar/Navbar"
import Ft from "../assets/football-main.avif"
import Cric from "../assets/vector.jpg"
import Hb from "../assets/cr.jpg"
import Chess from "../assets/chess-main.jpg"
// import Vb from "../assets/volleyball."
import Hhb from "../assets/gh.jpg"
import "./maincontent.css"
function MainContent() {
  const navigate = useNavigate()

  const sports = [
    {
      name: 'Football',
      img: Ft,
      route: '/football',
    },
    {
      name: 'Carrom',
      img: Hb,
      route: '/carrom',
    },
    {
      name: 'Chess',
      img: Chess,
      route: '/chess',
    },

    {
      name: 'Volleyball',
      img: 'https://images.unsplash.com/photo-1601279880975-4c8ccbd00169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      route: '/volleyball',
    },
    // Add other sports similarly...

    {
      name: 'Cricket',
      img: Cric,
      route: '/cricket',
    },

    {
      name: 'Handball',
      img: Hhb,
      route: '/handball',
    },
  ]

  return (
    <div className='min-h-screen bg-darkBlue'>
      <Navbar />

      <div className='sm:mt-[50px] md:mt-[130px] mb-20 px-4 lg:mt-[130px]'>
        <h1 className='text-center text-[2.5rem] font-bold mb-8 head  '>
          Dashboard
        </h1>

        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {sports.map((sport, index) => (
            <div
              key={index}
              className=' border rounded-xl shadow-sm bg-card dark:border-neutral-700 dark:shadow-neutral-700/70  hover:shadow-lg mt-10 cursor-pointer'
              onClick={() => navigate(sport.route)}
            >
              <div className='relative w-full rounded-t-xl overflow-hidden pt-[40%]'>
                <img
                  className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-90'
                  src={sport.img}
                  alt={sport.name}
                />
              </div>
              <div className='flex flex-col p-4 bg-card'>
                <h3 className='text-lg font-bold  text-customColor pi '>
                  {sport.name}
                </h3>
                <p className='mt-1  dark:text-neutral-400'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='mt-5'>
                  <p className='text-xs text-gray-500 dark:text-neutral-500'>
                    Last updated 5 mins ago
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent
