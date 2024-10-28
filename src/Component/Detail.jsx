import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail({ Tokoh }) {
  const { id } = useParams();
  const person = Tokoh.find(item => item.id === parseInt(id));

  if (!person) return <p>Tokoh tidak ditemukan</p>;

  return (
    <div className="bg-primary h-screen">
    
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold">{person.nama}</h1>
        <img className="w-64 h-64 mx-auto my-6 object-cover rounded-full" src={person.gambar} alt={person.nama} />
        <p className="text-xl font-semibold">{person.teori}</p>
        <p className="text-base my-4">{person.materi}</p>
      </div>
    </div>
  );
}
