import React from 'react'

function Footer() {
  return (
    <div className='lg:mx-56 flex justify-between '>
      <div>@ 2023 - 2024 OpenRouter, LLC</div>
      <div className='flex lg:gap-4  '><button  className='hover:font-semibold hover:bg-gray-200 cursor-pointer  rounded p-2 '>Discord</button>
      <button className='hover:font-semibold hover:bg-gray-200 cursor-pointer p-2  rounded'>Github</button>
      <button  className='hover:font-semibold hover:bg-gray-200 cursor-pointer p-2  rounded'>Pricing</button>
      <button  className='hover:font-semibold hover:bg-gray-200 cursor-pointer p-2 rounded'>Privacy</button>
      <button  className='hover:font-semibold hover:bg-gray-200 cursor-pointer p-2 rounded'>Term</button> </div>
    </div>
  )
}

export default Footer
