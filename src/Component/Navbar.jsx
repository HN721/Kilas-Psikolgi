import React from 'react'
import Logo from "../assets/logo.png"
export default function Navbar() {
  return (
    <div className='flex-column  mx-6 py-3 lg:mx-16 lg:py-10  lg:flex lg:justify-between lg:items-center'>
      <div className='flex justify-center lg:flex lg:gap-4'>
      <img className ="hidden lg:h-10 lg:flex"src={Logo}/>
       <h1 className='font-bold  text-base lg:text-2xl'>Kilas Psikologi</h1>
      </div>
       <div className=' flex justify-center lg:flex gap-1 lg:gap-5'>
        <a href='#' className='font-semibold  text-sm lg:text-lg'> Pengenalan tokoh</a>
        <a className='font-semibold text-sm lg:text-lg'>Teori</a>
        <a className='font-semibold text-sm lg:text-lg'>Perilaku</a>
        <a className='font-semibold text-sm lg:text-lg'>Pikiran</a>
       </div>
    </div>

  )
}
