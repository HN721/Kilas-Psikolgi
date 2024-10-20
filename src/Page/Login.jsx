import React from 'react'

export default function Login({isLogin}) {

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
         
      
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          
        
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
         
  
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your password"
        />
      </div>
      <button
       
        className="w-full bg-green text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </div>
  </div>
  )
}
