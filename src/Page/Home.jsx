import React from 'react'
import Gambar from '../assets/T.png'
export default function Home() {
  return (
    <div className='container mx-40 h-96 flex  '>
        <img  className="h-full object-cover"src={Gambar}/>
        <div className='px-14'>
            <p className='font-medium font-serif text-2xl'>Welcome to Kilas Psikologi</p>
            <h1 className='font-bold text-7xl'>Menjelajahi psikologi dan mengenali tokoh-tokoh psikologi</h1>
          <div className='flex mt-12 gap-4 justify-center mr-44'>
          <button className='bg-secondary w-56  p-3 rounded-2xl'>@Kilas Psikologi</button>
            <button className='bg-black w-56 p-3 rounded-2xl text-slate'>Selanjutnya</button>
          </div>
        </div>
    </div>
  )
}
