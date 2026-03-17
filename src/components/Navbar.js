import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
            <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
          F.A
        </div>
        <div>
          <h1 className="text-2x2 font-bold text-green-600">FaST AID</h1>
          <p className="text-xs font-bold text-red-500">Here for your safety</p>
        </div>
      </div>

    
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-1xl font-bold text-green-600">
          Personalized first aid & wellness a tap away
        </div>


        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
            
          >
            
            Login
          </NavLink>
          <button
          onClick={() => {
            localStorage.removeItem("token");
              localStorage.removeItem("username");
               window.location.href = "/login";
  }}
  className="bg-red-600 text-white px-4 py-2 rounded"
>
  Logout
</button>

        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
