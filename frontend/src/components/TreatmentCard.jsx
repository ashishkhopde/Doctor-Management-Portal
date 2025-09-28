import React from "react";
import { Link } from "react-router-dom";

export default function TreatmentCard({ treatment }) {
    return (
        <div
            key={treatment._id}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden group border border-gray-100 h-[425px] flex flex-col"
        >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden flex-shrink-0">
                <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition line-clamp-1">
                    {treatment.name}
                </h2>

                {/* Description (truncate) */}
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {treatment.description}
                </p>


                {treatment.operatingDoctor?.length > 0 && (
                    <div className="mt-3">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                            Operating Doctors:
                        </h3>
                        <div className="flex flex-nowrap gap-2 overflow-x-auto pr-1
     scrollbar scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent pb-1">
                            {treatment.operatingDoctor.map((doc) => (
                                <span
                                    key={doc._id}
                                    className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full flex-shrink-0"
                                >
                                    {doc.fullName}
                                </span>
                            ))}
                        </div>
                    </div>
                )}


                <div className="mt-auto">
                    <Link to={`/TreatmentsDetails/${treatment._id}`}>
                        <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
