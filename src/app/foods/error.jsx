"use client";
import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Foods Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;