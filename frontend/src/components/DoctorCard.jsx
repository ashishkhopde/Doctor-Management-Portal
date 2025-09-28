import React from "react";
import { Link } from "react-router-dom";

export default function Card({ doctor }) {
  return (
    <div
      key={doctor._id}
      className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 overflow-hidden group border border-gray-100"
    >

      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-transparent to-indigo-400/20 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>


      <div className="p-6 relative z-10 flex flex-col items-center">

        <div className="relative">
          <img
            src={doctor.avatar}
            alt={doctor.fullName}
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>


        <h2 className="text-xl font-bold text-gray-800 mt-4 group-hover:text-blue-700 transition">
          {doctor.fullName}
        </h2>

        <span className="inline-block mt-2 px-4 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full shadow-sm">
          {doctor.education}
        </span>

        <p className="text-lg font-semibold text-blue-700 mt-4">
          Fee: ₹{doctor.fee}
        </p>

        <p className="text-sm text-gray-500 mt-1">5+ Years Experience</p>

        <Link to={`/DoctorDetails/${doctor._id}`}>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
