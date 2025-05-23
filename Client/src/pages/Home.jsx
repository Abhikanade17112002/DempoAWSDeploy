import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to MyApp</h1>
      <p className="text-xl mb-6 max-w-2xl mx-auto">
        Your go-to platform for building vibrant, responsive, and modern web applications.
      </p>
      <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
        Get Started 🚀
      </button>
    </div>
  );
}
