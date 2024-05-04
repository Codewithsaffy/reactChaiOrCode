import React from 'react'

function Navebar() {
  return (
  <nav className='flex justify-between px-4 min-w-full items-center bg-gray-700 text-white'>
    <h1 className='text-2xl font-bold text-green-600'>PassOp <span className='text-black text-lg font-bold '>{"</>"}</span></h1>
    <ul className='flex gap-4'>
        <li className='hover:text-green-500'>Home</li>
        <li className='hover:text-green-500'>About</li>
        <li className='hover:text-green-500'>Contact</li>
    </ul>
  </nav>
  )
}

export default Navebar
