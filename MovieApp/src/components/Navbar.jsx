import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-300 text-yellow-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Home Link */}
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300">
         ROYAL TV
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/Search"
            className="text-lg font-medium hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-lg font-medium hover:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="text-lg font-medium hover:text-yellow-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


