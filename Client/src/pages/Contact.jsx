import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 text-white px-6">
      <h1 className="text-4xl font-bold mb-6">📬 Contact Us</h1>
      <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg max-w-lg mx-auto">
        <p className="text-lg"><strong>Email:</strong> support@myapp.com</p>
        <p className="text-lg mt-2"><strong>Phone:</strong> +91 98765 43210</p>
        <p className="text-lg mt-2"><strong>Location:</strong> Pune, India 🇮🇳</p>
      </div>
    </div>
  );
}
