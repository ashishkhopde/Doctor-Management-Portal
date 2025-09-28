import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <Link to={'/'}>
          <h2 className="text-2xl font-bold text-blue-600">Health Sync</h2>
        </Link>

       
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Doctors"
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link
              to="/Treatments"
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Treatments
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
