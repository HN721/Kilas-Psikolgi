import React, { useState, useEffect, useContext } from "react";
import Gambar from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { username } = useContext(UserContext);

  useEffect(() => {
    // Set elemen menjadi terlihat setelah komponen dirender
    setTimeout(() => setIsVisible(true), 100); // Delay untuk efek transisi
  }, []);

  const fullText = "Menjelajahi Psikologi dan Mengenali Tokoh-Tokoh Psikologi";

  return (
    <>
      <div
        className={`flex-column justify-center mt-7 lg:items-center lg:flex lg:pt-9 transition-all duration-700 ease-in-out ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <img
          className="w-25 h-15 lg:flex lg:w-1/3 lg:h-1/3 lg:object-contain transition-transform duration-700 ease-in-out hover:scale-105"
          src={Gambar}
        />
        <div className="lh: px-10 lg:px-16">
          <p className="font-medium font-serif text-2xl lg:text-2xl">
            Hello <span className="font-bold text-2xl">{username}👋🏻</span>
          </p>
          <p className="font-medium font-serif text-2xl lg:text-2xl">
            Welcome to Kilas Psikologi
          </p>
          <h1 className="font-bold lg:w-full text-3xl lg:text-5xl">
            {fullText}
            <span className="cursor-blink">|</span>{" "}
          </h1>
          <div className="flex py-10 lg:mt-12 gap-4">
            <Link to={"/pendahuluan"}>
              <button className="bg-slate shadow-md hover:bg-blue lg:w-56 w-35 p-3 rounded-2xl text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                @kilas-Psikologi
              </button>
            </Link>

            <Link to={"/pendahuluan"}>
              <button className="bg-black hover:bg-button lg:w-56 w-35 p-3 rounded-2xl text-slate transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Selanjutnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
