import React from 'react'
import Gambar from '../assets/pngwing.com.png'
import Pendahuluan from './Pendahuluan'
import Tokoh from './Tokoh'
export default function Home({Figur}) {
  return (
    <>
       <div className='flex-column justify-center  mt-7   lg:items-center  lg:flex  lg:pt-9 '>
        <img  className="w-25 h-15   lg:flex   lg:w-1/3 lg:h-1/3 lg:object-contain"src={Gambar}/>
        <div className='lh: px-10 lg:px-16'>
            <p className='font-medium font-serif text-2xl lg:text-2xl'>Welcome to Kilas Psikologi</p>
            <h1 className='font-bold lg:w-full  text-3xl lg:text-5xl'>Menjelajahi Psikologi dan Mengenali Tokoh-Tokoh Psikologi</h1>
          <div className='flex py-10 lg:mt-12 gap-4 '>
          <button className='bg-secondary lg:w-56 w-56 text-sm  p-3 rounded-2xl'>@Kilas Psikologi</button>
            <button className='bg-black hover:bg-button lg:w-56 w-56 p-3 rounded-2xl text-slate'>Selanjutnya</button>
          </div>
        </div>
    </div>
     <Pendahuluan/>
     <Tokoh Tokoh={Figur}/>
    </>
 
  )
}
