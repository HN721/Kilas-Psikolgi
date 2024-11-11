import React, { useState, useEffect } from "react";
import Gambar from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";

export default function Home() {
  const fullText = "Menjelajahi Psikologi dan Mengenali Tokoh-Tokoh Psikologi";
  const [text, setText] = useState(""); // State untuk teks yang ditampilkan
  const [index, setIndex] = useState(0); // Indeks untuk karakter yang akan ditambahkan

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < fullText.length) {
          setText((prevText) => prevText + fullText[prevIndex]); // Menambahkan karakter
          return prevIndex + 1;
        } else {
          clearInterval(intervalId); // Hentikan interval setelah semua teks ditampilkan
          return prevIndex;
        }
      });
    }, 100); // Mengatur kecepatan mengetik, 100ms per karakter

    // Cleanup saat komponen unmount
    return () => clearInterval(intervalId);
  }, []); // Efek hanya dijalankan sekali setelah komponen pertama kali dirender

  return (
    <>
      <div className="flex-column justify-center mt-7 lg:items-center lg:flex lg:pt-9">
        <img
          className="w-25 h-15 lg:flex lg:w-1/3 lg:h-1/3 lg:object-contain"
          src={Gambar}
        />
        <div className="lh: px-10 lg:px-16">
          <p className="font-medium font-serif text-2xl lg:text-2xl">
            Welcome to Kilas Psikologi
          </p>
          <h1 className="font-bold lg:w-full text-3xl lg:text-5xl">
            {text}
            <span className="cursor-blink">|</span>{" "}
            {/* Menambahkan kursor berkedip */}
          </h1>
          <div className="flex py-10 lg:mt-12 gap-4">
            <button className="bg-secondary lg:w-56 w-56 text-sm p-3 rounded-2xl">
              @Kilas Psikologi
            </button>

            <Link to={"/pendahuluan"}>
              <button className="bg-black hover:bg-button lg:w-56 w-56 p-3 rounded-2xl text-slate">
                Selanjutnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
