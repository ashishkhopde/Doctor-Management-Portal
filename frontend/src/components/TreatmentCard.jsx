import React from "react";
import { Link } from "react-router-dom";

export default function TreatmentCard({ treatment }) {
    return (
        <div
            key={treatment._id}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
        >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                    {treatment.name}
                </h2>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {treatment.description}
                </p>

                {/* Doctors */}
                {treatment.operatingDoctor?.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                            Operating Doctors:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {treatment.operatingDoctor.map((doc) => (
                                <span
                                    key={doc._id}
                                    className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                                >
                                    {doc.fullName}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <Link to={`/TreatmentsDetails/${treatment._id}`}>
                    <button className="mt-6 w-full bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition">
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
}
