import React from "react";
import Gambar from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";

export default function Pendahuluan() {
  return (
    <>
      <div className=" mx-10 lg:mx-16 flex items-center gap-4 ">
        <h1 className="font-bold font-serif text-xl">Pendahuluan |</h1>
        <p>Eksplorasi Dunia Psikologi</p>
      </div>
      <div className="flex lg:items-center">
        <div className=" px-10 lg:mx-16 mt-10">
          <h1 className="font-bold font-mono text-2xl lg:text-5xl">
            Pengenalan Singkat Psikologi
          </h1>
          <p className="font-semibold w-full  text-2xl lg:w-2/5">
            Psikologi adalah ilmu tentang perilaku manusia dan binatang, serta
            penerapannya pada permasalahan manusia.
          </p>
          <div className="flex py-10 lg:mt-12 gap-2">
            <Link to={"/"}>
              <button className=" bg-black text-primary lg:w-56 w-35   p-3 rounded-2xl">
                Back
              </button>
            </Link>
            <Link to={"/tokoh"}>
              <button className="bg-secondary  hover:bg-button lg:w-56 w-36 p-3 rounded-2xl text-slate">
                Selanjutnya
              </button>
            </Link>
          </div>
        </div>
        <img
          className="hidden lg:flex   lg:w-1/3 lg:h-3/4 object-contain"
          src={Gambar}
        />
      </div>
    </>
  );
}
