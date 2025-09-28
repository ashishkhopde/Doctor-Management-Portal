import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/DoctorCard";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/doctor/list`);
        const data = res.data.data;
        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    }
    getData();
  }, []);

  // Filter doctors by search
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          Our Doctors
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Meet our experienced and highly qualified doctors. Book an appointment
          with the right specialist for you.
        </p>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search doctors by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <Card doctor={doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No doctors found. Try searching with another name.
          </p>
        )}
      </div>
    </div>
  );
}
