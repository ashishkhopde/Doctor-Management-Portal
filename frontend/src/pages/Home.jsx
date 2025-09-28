import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to <span className="text-yellow-300">Health Sync</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl mb-6"
          >
            Smart Hospital Management Portal for Doctors, Patients & Treatments
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Link
              to="/Doctors"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition transform duration-200"
            >
              Find Doctors
            </Link>
            <Link
              to="/Treatments"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-yellow-500 transition transform duration-200"
            >
              View Treatments
            </Link>
          </motion.div>
        </div>
      </section>


      <section className="container mx-auto py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Doctors", count: "120+" },
          { title: "Patients", count: "3,500+" },
          { title: "Appointments", count: "8,000+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-3xl font-bold text-blue-600">{stat.count}</h3>
            <p className="text-gray-600 mt-2">{stat.title}</p>
          </motion.div>
        ))}
      </section>


      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "24/7 Access",
              desc: "Manage your hospital anytime with our smart portal.",
              color: "from-blue-500 to-indigo-500",
            },
            {
              title: "Secure Data",
              desc: "All patient & doctor data is protected and encrypted.",
              color: "from-green-500 to-teal-500",
            },
            {
              title: "Easy Appointments",
              desc: "Quickly book & manage appointments in just a few clicks.",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-2xl shadow-md bg-gradient-to-r ${feature.color} text-white`}
            >
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/90">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
