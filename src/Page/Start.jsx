import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function Start() {
  const { setUsername, setShowIntro } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleStart = () => {
    if (name.trim()) {
      setUsername(name);
      setShowIntro(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-indigo-700 flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-6">Hello There!</h1>
      <h2 className="text-2xl font-semibold mb-8">Tolong Masukan Nama Anda</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukan nama"
        className="w-80 p-3 rounded-lg text-gray-800 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-border mb-6"
      />
      <button
        onClick={handleStart}
        className="bg-blue hover:bg-greenHover text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Mulai
      </button>
    </div>
  );
}
