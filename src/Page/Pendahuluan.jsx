import React from 'react'
import Gambar from '../assets/pngwing.com.png'

export default function Pendahuluan() {
  return (
    <>
     <div className='mx-16 flex items-center gap-4 '>
        <h1 className='font-bold font-serif text-xl'>Pendahuluan |</h1>
        <p>Eksplorasi Dunia Psikologi</p>
    </div>
    <div className='mx-16 mt-20  flex items-center'>
       <div >
       <h1 className='font-bold font-mono text-5xl'>Pengenalan Singkat Psikologi</h1>
        <p className='font-semibold  text-2xl w-2/5'>Psikologi adalah ilmu tentang perilaku manusia dan binatang, serta penerapannya pada permasalahan manusia.</p>
        <div className='flex mt-12 gap-4  mr-44'>
          <button className='bg-secondary w-56  p-3 rounded-2xl'>@Kilas Psikologi</button>
            <button className='bg-black hover:bg-button w-56 p-3 rounded-2xl text-slate'>Selanjutnya</button>
          </div>
       </div>
        <img  className="hidden lg:flex w-10 h-10  lg:w-1/3 lg:h-3/4 object-contain"src={Gambar}/>

    </div>
    </>
   
  )
}
