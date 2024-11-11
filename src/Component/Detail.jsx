import React from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";

export default function Detail({ Tokoh }) {
  const { id } = useParams();
  const person = Tokoh.find((item) => item.id === parseInt(id));

  if (!person) return <p>Tokoh tidak ditemukan</p>;

  // Pisahkan materi menjadi dua paragraf
  const materiParagraphs = person.materi.split("\n\n");

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold">{person.nama}</h1>
      <img
        className="w-64 h-64 mx-auto my-6 object-cover rounded-full"
        src={person.gambar}
        alt={person.nama}
      />
      <p className="text-xl font-semibold mb-4">{person.teori}</p>
      {/* Tampilkan materi sebagai dua paragraf */}
      <div className="text-justify text-base my-4 mx-8 space-y-4">
        {materiParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <img
        className="w-164 h-164 mx-auto my-6 object-cover"
        src={person.gambar2}
        alt={person.nama}
      />
      <Link to={"/tokoh"}>
        <button className="mt-6 px-4 py-2 bg-secondary text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Kembali
        </button>
      </Link>
    </div>
  );
}
