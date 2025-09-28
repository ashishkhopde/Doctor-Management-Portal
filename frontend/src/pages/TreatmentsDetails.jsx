import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function TreatmentDetails() {
  const { id } = useParams();
  const [disease, setDisease] = useState(null);

  useEffect(() => {
    async function fetchDisease() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/disease/details/${id}`);
        setDisease(res.data.data);
      } catch (err) {
        console.error("Error fetching disease details:", err);
      }
    }
    fetchDisease();
  }, [id]);

  if (!disease) {
    return (
      <div className="flex items-center justify-center h-[100vh] text-gray-500 text-lg">
        Loading treatment details...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row gap-8">
        <img
          src={disease.image}
          alt={disease.name}
          className="w-48 h-48 rounded-xl object-cover border-4 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{disease.name}</h1>
          <p className="text-gray-600 mt-4">{disease.description}</p>
        </div>
      </div>

      
      <div className="bg-white shadow-md rounded-2xl p-6 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Doctors who treat this disease
        </h2>

        {disease.operatingDoctor && disease.operatingDoctor.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {disease.operatingDoctor.map((doctor) => (
              <div
                key={doctor._id}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-700">
                  {doctor.fullName}
                </h3>
                <p className="text-blue-600">{doctor.education}</p>
                <p className="text-gray-600 text-sm mt-2">{doctor.description}</p>
                <Link
                  to={`/DoctorDetails/${doctor._id}`}
                  className="inline-block mt-3 text-blue-500 hover:underline"
                >
                  View Doctor
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No doctors listed for this disease.</p>
        )}
      </div>
    </div>
  );
}
