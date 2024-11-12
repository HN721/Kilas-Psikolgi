import React, { useState, useEffect } from "react";
import user from "../assets/user.jpg";
export default function Comments() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  // Fungsi untuk memuat komentar dari localStorage saat komponen pertama kali dirender
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(savedComments);
  }, []);

  // Fungsi untuk menyimpan komentar ke localStorage setiap kali daftar komentar berubah
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (commentInput.trim()) {
      const newComment = {
        text: commentInput,
        date: new Date().toLocaleString(),
      };
      setComments([newComment, ...comments]);
      setCommentInput("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Komentar</h2>

      {/* Input komentar */}
      <div className="flex items-center  gap-3 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Tambahkan komentar..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-green  text-primary rounded-r-md focus:outline-none focus:ring-2 focus:ring-slate"
        >
          Kirim
        </button>
      </div>

      {/* Daftar komentar */}
      <div className="space-y-4 ">
        {comments.length === 0 && (
          <p className="text-gray-500">
            Belum ada komentar. Jadilah yang pertama!
          </p>
        )}
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex justify-start items-center p-4 border border-primary rounded-md"
          >
            <img
              src={user}
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div>
              <h1 className="font-bold text-lg">Anonim</h1>
              <p className="text-gray-800">{comment.text}</p>
              <p className="text-gray-400 text-sm mt-2">{comment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
