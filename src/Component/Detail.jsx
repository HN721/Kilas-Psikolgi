import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";

export default function Detail({ Tokoh }) {
  const { id } = useParams();
  const person = Tokoh.find((item) => item.id === parseInt(id));

  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility after the component is mounted
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Delay for transition effect
  }, []);

  if (!person) return <p>Tokoh tidak ditemukan</p>;

  // Pisahkan materi menjadi dua paragraf
  const materiParagraphs = person.materi.split("\n\n");

  return (
    <div
      className={`text-center p-8 transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <Link to={"/tokoh"}>
        <button className="flex justify-start mt-6 px-4 py-2 bg-secondary text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Kembali
        </button>
      </Link>
      <h1 className="text-3xl font-bold">{person.nama}</h1>
      <img
        className="w-64 h-64 mx-auto my-6 object-cover rounded-full transition-all duration-500 ease-in-out transform hover:scale-105"
        src={person.gambar}
        alt={person.nama}
      />
      <p className="text-xl font-semibold mb-4">{person.teori}</p>

      {/* Render specific subsections for ID 4 */}
      <div className="text-justify text-base my-4 mx-8 space-y-4">
        {materiParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {id === "4" && (
        <div className="text-left text-base my-4 mx-8 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Subsections:</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Stimulus Netral (NS):</strong> Stimulus yang awalnya tidak
              memicu respons otomatis.
            </li>
            <li>
              <strong>Stimulus Tidak Terkondisi (UCS):</strong> Stimulus yang
              secara alami memicu respons otomatis tanpa memerlukan pembelajaran
              sebelumnya.
            </li>
            <li>
              <strong>Respons Tidak Terkondisi (UCR):</strong> Respons otomatis
              yang terjadi secara alami sebagai reaksi terhadap UCS.
            </li>
            <li>
              <strong>Stimulus Terkondisi (CS):</strong> Stimulus awalnya netral
              yang setelah dipasangkan dengan UCS, menjadi mampu memicu respons.
            </li>
            <li>
              <strong>Respons Terkondisi (CR):</strong> Respons yang dipelajari
              yang terjadi sebagai reaksi terhadap CS.
            </li>
          </ul>
        </div>
      )}
      {id === "8" && (
        <div className="text-left text-base my-4 mx-8 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">
            Eksperimen ini menunjukkan prinsip-prinsip:
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Classical Conditioning :</strong> Merespons suara bel
              dengan rasa sakit
            </li>
            <li>
              <strong>Operant Conditioning:</strong> Mengganti meloncat dengan
              menekan pengumpil
            </li>
            <li>
              <strong>Respons Tidak Terkondisi (UCR):</strong> Respons otomatis
              yang terjadi secara alami sebagai reaksi terhadap UCS.
            </li>
            <li>
              <strong>Extinction:</strong> Perubahan perilaku.
            </li>
            <li>
              <strong>Primary dan secondary drive :</strong> Rasa sakit
              menyebabkan rasa takut.
            </li>
          </ul>
        </div>
      )}

      {/* Tampilkan materi sebagai dua paragraf */}

      <img
        className="w-164 h-164 mx-auto my-6 object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
        src={person.gambar2}
        alt={person.nama}
      />

      <Comments />
    </div>
  );
}
