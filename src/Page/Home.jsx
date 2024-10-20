import React from 'react'
import Gambar from '../assets/pngwing.com.png'
export default function Home() {
  return (
    <div className='flex columns-1  lg:mx-16   lg:flex  lg:pt-14 '>
        <img  className=" hidden  lg:flex w-10 h-10 lg:w-1/3 lg:h-1/3 object-contain"src={Gambar}/>
        <div className='  lg:px-14'>
            <p className='font-medium font-serif text-sm lg:text-2xl'>Welcome to Kilas Psikologi</p>
            <h1 className='font-bold  text-base lg:text-7xl'>Menjelajahi Psikologi dan Mengenali Tokoh-Tokoh Psikologi</h1>
          <div className='flex mt-12 gap-4 justify-center mr-44'>
          <button className='bg-secondary w-56  p-3 rounded-2xl'>@Kilas Psikologi</button>
            <button className='bg-black hover:bg-button w-56 p-3 rounded-2xl text-slate'>Selanjutnya</button>
          </div>
        </div>
    </div>
  )
}
