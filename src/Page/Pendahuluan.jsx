import React, { useState, useEffect } from "react";
import Gambar from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";

export default function Pendahuluan() {
  const [isVisible, setIsVisible] = useState(false);
  const fullText =
    "Psikologi adalah ilmu tentang perilaku manusia dan binatang, serta penerapannya pada permasalahan manusia.";

  useEffect(() => {
    // Set elemen menjadi terlihat setelah komponen dirender
    setTimeout(() => setIsVisible(true), 100); // Delay untuk efek transisi
  }, []);

  return (
    <div
      className={`flex-column justify-center lg:pt-9 transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="mx-10 lg:mx-16 flex items-center gap-4 py-6">
        <h1 className="font-bold font-serif text-xl">Pendahuluan |</h1>
        <p className="text-gray-700">Eksplorasi Dunia Psikologi</p>
      </div>

      <div className="h-screen flex flex-col mt-2 lg:flex-row lg:items-center">
        {/* Text Section */}
        <div className="px-10 lg:mx-16 mt-10 transition-all duration-700 ease-in-out opacity-100 transform lg:opacity-100 lg:translate-y-0">
          <h1 className="font-bold font-mono text-2xl lg:text-5xl transition-all duration-500 ease-in-out transform hover:scale-105">
            Pengenalan Singkat Psikologi
          </h1>
          <p
            className={`font-semibold text-lg lg:text-2xl text-black lg:w-4/5 mt-6 transition-all duration-700 ease-in-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 lg:translate-x-full translate-x-0"
            }`}
          >
            {fullText}
          </p>

          {/* Buttons */}
          <div className="flex py-10 lg:mt-12 gap-4">
            <Link to={"/"}>
              <button className="bg-black text-slate lg:w-56 w-auto p-3 rounded-2xl transition-all duration-500 ease-in-out hover:bg-gray-800 hover:shadow-lg">
                Back
              </button>
            </Link>
            <Link to={"/tokoh"}>
              <button className="bg-green hover:bg-greenHover text-white lg:w-56 w-auto p-3 rounded-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Selanjutnya
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex lg:w-1/2 justify-center transition-all duration-700 ease-in-out opacity-0 translate-y-10 lg:opacity-100 lg:translate-y-0">
          <img
            className="lg:w-3/4 lg:h-auto object-contain"
            src={Gambar}
            alt="Pendahuluan Gambar"
          />
        </div>
      </div>
    </div>
  );
}
