import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-300 text-yellow-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">


 
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-lg font-medium hover:text-yellow-300"
          >
            Home
          </Link>

          <Link
            to="*"
            className="text-lg font-medium hover:text-yellow-300"
          >
            Not Found
          </Link>

    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


