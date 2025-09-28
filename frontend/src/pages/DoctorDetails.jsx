import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DoctorDetails() {
  const [doctorData, setDoctorData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/doctor/details/${id}`
        );
        setDoctorData(res.data);
      } catch (err) {
        console.error("Error fetching doctor details:", err);
      }
    }
    getData();
  }, [id]);

  if (!doctorData) {
    return (
      <div className="flex items-center justify-center h-[100vh] text-gray-500 text-lg">
        Loading doctor details...
      </div>
    );
  }

  // destructure for easy use
  const { DoctorData, DiseaseData } = doctorData;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 h-min-[100vh]">
      {/* Doctor Info Card */}
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-8 p-8">
        <div className="flex-shrink-0">
          <img
            src={DoctorData.avatar || "https://via.placeholder.com/150"}
            alt={DoctorData.fullName}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 object-cover shadow-md"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">
            {DoctorData.fullName}
          </h1>
          <p className="text-blue-600 text-lg mt-1">{DoctorData.education}</p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {DoctorData.description ||
              "An experienced healthcare professional dedicated to patient well-being."}
          </p>
          <p className="text-xl font-semibold text-blue-700 mt-6">
            Consultation Fee: ₹{DoctorData.fee}
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transform transition">
            Book Appointment
          </button>
        </div>
      </div>

      {/* About + Availability */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">About</h3>
          <p className="text-gray-600">
            {DoctorData.fullName} is a specialist in {DoctorData.education}.
            They have helped hundreds of patients and are known for their
            patient-first approach.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Availability
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>🕒 Mon - Fri: 10:00 AM - 5:00 PM</li>
            <li>🕒 Saturday: 11:00 AM - 3:00 PM</li>
            <li>❌ Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* ✅ Treatment Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-5">
          Treatments Offered
        </h3>
        {DiseaseData && DiseaseData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DiseaseData.map((disease) => (
              <div
                key={disease._id}
                className="border rounded-xl shadow-sm p-4 hover:shadow-md transition"
              >
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {disease.name}
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  {disease.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No treatments available for this doctor.</p>
        )}
      </div>
    </div>
  );
}
