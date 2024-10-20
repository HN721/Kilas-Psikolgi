import React, { useState } from 'react'

export default function Tokoh({Tokoh}) {
  const [Select , setSelect ] = useState (null)
  console.log(Select);
  function handleSelect(Select){
 setSelect(Select)
  } 
  return (
    <div className='mx-16 mt-5  '>
        <h1 className='font-bold  text-3xl'>Tokoh Psikologi</h1>
        <div className='grid grid-cols-4'>
            {Tokoh.map(person =>
            <div  className='bg-slate drop-shadow-md py-6 px-6 mx-8 my-8 rounded-lg'>
                <img className='w-full h-64 object-cover' src={person.gambar} alt="" />
                <h1 onClick={()=> handleSelect(Select)}  className='font-sans text-2xl mt-4 font-semibold'>{person.nama}</h1>
                <p className='font-sans text-xl text-button font-normal'>{person.bidang}</p>
                <p className='font-serif text-base  font-normal mb-3'>{person.teori}</p>
                <button  className='w-full bg-black hover:bg-button p-3 rounded-md text-slate'>Lihat Teori</button>
            </div>
        )
        
            }
        </div>
    </div>
  )
}
