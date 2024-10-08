import React from 'react'
import Navbar from '../components/Navbar'

const Listing = () => {
  return (
    <div className='bg-blue-900 flex flex-col justify-center items-center'>
      <Navbar />
      <h1 className='text-white m-10'>This is Listing page</h1>
    </div>
  )
}

export default Listing
