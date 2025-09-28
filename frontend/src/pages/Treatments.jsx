import React, { useEffect, useState } from "react";
import axios from "axios";
import TreatmentCard from "../components/TreatmentCard";

export default function Treatments() {
  const [treatments, setTreatments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/disease/list`);
        setTreatments(res.data.data);
      } catch (err) {
        console.error("Error fetching treatments:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  const filteredTreatments = treatments.filter(
    (treatment) =>
      treatment.name.toLowerCase().includes(search.toLowerCase()) ||
      treatment.operatingDoctor?.some((doctor) =>
        doctor.fullName.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-4">
          Available Treatments
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore the treatments offered at our hospital. Find details about
          procedures and the doctors who specialize in them.
        </p>

       
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by treatment or doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        
        {loading ? (
          <p className="text-center text-gray-500">Loading treatments...</p>
        ) : (
          <>
            
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTreatments.map((treatment) => (
                <TreatmentCard treatment={treatment}/>
              ))}
            </div>

            
            {filteredTreatments.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                No treatments found. Try searching with another keyword.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
