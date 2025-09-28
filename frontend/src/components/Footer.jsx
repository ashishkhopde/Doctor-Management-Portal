import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 text-center mt-auto">
      <p className="flex flex-col md:flex-row justify-center items-center gap-1">
        &copy; {new Date().getFullYear()} 
        <span className="md:hidden block"></span>
        <span>Health Sync. All Rights Reserved.</span>
      </p>
    </footer>
  );
}
