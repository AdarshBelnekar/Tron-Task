import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between '>
      <h1 className=' text-2xl text-black font-semibold '>Hello <br /> <span className='text-2xl text-black font-medium'>Adarsh</span></h1>
      <button className='bg-red-600 text-white text-lg font-medium  rounded-lg px-2 '>Log Out </button>
    </div>
  )
}

export default Header
