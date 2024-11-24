import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../Componenets/Navbar/Navbar"

function MainContent() {
  const navigate = useNavigate()

  const sports = [
    {
      name: 'Football',
      img: 'https://images.unsplash.com/photo-1606107638712-6b9aefc2ee48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      route: '/football',
    },
    {
      name: 'Carrom',
      img: 'https://images.unsplash.com/photo-1547782363-92b260dc8d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      route: '/carrom',
    },
    {
      name: 'Chess',
      img: 'https://images.unsplash.com/photo-1601279880975-4c8ccbd00169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
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
      img: 'https://images.unsplash.com/photo-1601279880975-4c8ccbd00169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      route: '/cricket',
    },

    {
      name: 'Handball',
      img: 'https://images.unsplash.com/photo-1601279880975-4c8ccbd00169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      route: '/handball',
    },
  ]

  return (
    <div className='min-h-screen'>
      
      <Navbar />

      <div className='sm:mt-[50px] md:mt-[130px] mb-20 px-4 lg:mt-[130px]'>
        <h1 className='text-center text-2xl font-bold mb-8'>Sports Sphere</h1>

        
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {sports.map((sport, index) => (
            <div
              key={index}
              className='bg-white border rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 transition-transform transform hover:scale-105 hover:rotate-[2deg] hover:shadow-lg mt-10 cursor-pointer'
              onClick={() => navigate(sport.route)} 
            >
              <div className='relative w-full rounded-t-xl overflow-hidden pt-[40%]'>
                <img
                  className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-90'
                  src={sport.img}
                  alt={sport.name}
                />
              </div>
              <div className='flex flex-col p-4'>
                <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
                  {sport.name}
                </h3>
                <p className='mt-1 text-gray-500 dark:text-neutral-400'>
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
