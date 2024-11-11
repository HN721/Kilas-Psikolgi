import React, { useState, useEffect } from "react";
import Gambar from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";

export default function Pendahuluan() {
  const fullText =
    "Psikologi adalah ilmu tentang perilaku manusia dan binatang, serta penerapannya pada permasalahan manusia.";
  const [text, setText] = useState(""); // State untuk teks yang ditampilkan
  const [index, setIndex] = useState(0); // Indeks untuk karakter yang akan ditambahkan

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < fullText.length) {
          setText((prevText) => prevText + fullText[prevIndex]); // Menambahkan karakter
          return prevIndex + 1;
        } else {
          clearInterval(intervalId); // Hentikan interval setelah teks selesai
          return prevIndex;
        }
      });
    }, 100); // Mengatur kecepatan mengetik, 100ms per karakter

    // Cleanup saat komponen unmount
    return () => clearInterval(intervalId);
  }, []); // Efek hanya dijalankan sekali setelah komponen pertama kali dirender

  return (
    <>
      <div className="mx-10 lg:mx-16 flex items-center gap-4">
        <h1 className="font-bold font-serif text-xl">Pendahuluan |</h1>
        <p>Eksplorasi Dunia Psikologi</p>
      </div>
      <div className="flex lg:items-center">
        <div className="px-10 lg:mx-16 mt-10">
          <h1 className="font-bold font-mono text-2xl lg:text-5xl">
            Pengenalan Singkat Psikologi
          </h1>
          <p className="font-semibold w-full text-2xl lg:w-2/5">
            {text}
            <span className="cursor-blink">|</span>{" "}
            {/* Menambahkan kursor berkedip */}
          </p>
          <div className="flex py-10 lg:mt-12 gap-2">
            <Link to={"/"}>
              <button className="bg-black text-primary lg:w-56 w-35 p-3 rounded-2xl">
                Back
              </button>
            </Link>
            <Link to={"/tokoh"}>
              <button className="bg-secondary hover:bg-button lg:w-56 w-36 p-3 rounded-2xl text-slate">
                Selanjutnya
              </button>
            </Link>
          </div>
        </div>
        <img
          className="hidden lg:flex lg:w-1/3 lg:h-3/4 object-contain"
          src={Gambar}
        />
      </div>
    </>
  );
}
