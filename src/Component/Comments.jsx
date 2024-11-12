import React, { useState, useEffect } from "react";
import user from "../assets/user.jpg";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [replyInputs, setReplyInputs] = useState({});

  // Fungsi untuk memuat komentar dari localStorage saat komponen pertama kali dirender
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(savedComments);
  }, []);

  // Fungsi untuk menyimpan komentar ke localStorage setiap kali daftar komentar berubah
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Fungsi untuk menambahkan komentar baru
  const handleAddComment = () => {
    if (commentInput.trim()) {
      const newComment = {
        text: commentInput,
        date: new Date().toLocaleString(),
        replies: [], // Tambahkan array replies untuk menyimpan balasan
      };
      setComments([newComment, ...comments]);
      setCommentInput("");
    }
  };

  // Fungsi untuk menambahkan balasan ke komentar tertentu
  const handleAddReply = (index) => {
    const replyText = replyInputs[index]?.trim();
    if (replyText) {
      const newReply = {
        text: replyText,
        date: new Date().toLocaleString(),
      };
      const updatedComments = [...comments];
      updatedComments[index].replies = [
        ...updatedComments[index].replies,
        newReply,
      ];
      setComments(updatedComments);
      setReplyInputs((prev) => ({ ...prev, [index]: "" }));
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Komentar</h2>

      {/* Input komentar */}
      <div className="flex items-center gap-3 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Tambahkan komentar..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-green text-primary rounded-r-md focus:outline-none focus:ring-2 focus:ring-slate"
        >
          Kirim
        </button>
      </div>

      {/* Daftar komentar */}
      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-gray-500">
            Belum ada komentar. Jadilah yang pertama!
          </p>
        )}
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-4 border border-primary rounded-md space-y-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={user}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h1 className="font-bold text-lg">Anonim</h1>
                <p className="text-gray-800">{comment.text}</p>
                <p className="text-gray-400 text-sm">{comment.date}</p>
              </div>
            </div>

            {/* Input untuk balasan */}
            <div className="flex items-center gap-3 mt-2 ml-10">
              <input
                type="text"
                className="flex-1 p-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Balas komentar ini..."
                value={replyInputs[index] || ""}
                onChange={(e) =>
                  setReplyInputs((prev) => ({
                    ...prev,
                    [index]: e.target.value,
                  }))
                }
              />
              <button
                onClick={() => handleAddReply(index)}
                className="px-3 py-1 bg-blue-500 text-white rounded-r-md"
              >
                Balas
              </button>
            </div>

            {/* Menampilkan balasan */}
            <div className="ml-10 space-y-2 mt-2">
              {comment.replies.map((reply, replyIndex) => (
                <div
                  key={replyIndex}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user}
                      alt=""
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <div>
                      <h2 className="font-bold text-sm">Anonim</h2>
                      <p className="text-gray-800">{reply.text}</p>
                      <p className="text-gray-400 text-xs">{reply.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
