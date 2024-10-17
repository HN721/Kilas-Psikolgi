import React from 'react'
import Logo from "../assets/logo.png"
export default function Navbar() {
  return (
    <div className='container mx-auto py-10 flex justify-between items-center'>
      <div className='flex gap-4'>
      <img className ="h-10"src={Logo}/>
       <h1 className='font-bold text-2xl'>Kilas Psikologi</h1>
      </div>
       <div className='flex gap-5'>
        <a href='#' className='font-semibold text-lg'> Pengenalan tokoh</a>
        <a className='font-semibold text-lg'>Teori</a>
        <a className='font-semibold text-lg'>Perilaku</a>
        <a className='font-semibold text-lg'>Pikiran</a>
       </div>
    </div>

  )
}
