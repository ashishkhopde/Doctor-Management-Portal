import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: clean icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to={"/"}>
          <h2 className="text-2xl font-bold text-blue-600">Health Sync</h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Doctors"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Doctors
              </Link>
            </li>
            <li>
              <Link
                to="/Treatments"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Treatments
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
