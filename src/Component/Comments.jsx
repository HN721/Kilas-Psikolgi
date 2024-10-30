import React from "react";

export default function Comments() {
  return (
    <div className="flex items-start space-x-4 p-4 w-full max-w-2xl mx-auto">
      {/* Avatar */}
      <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>

      {/* Comment Input */}
      <div className="flex  flex-col w-full ">
        <input
          className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Tambahkan komentar..."
        />
      </div>
    </div>
  );
}
