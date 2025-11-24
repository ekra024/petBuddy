import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PetLogo from "./PetLogo";
import { IoIosLock } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightOnRectangleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [open, setOpen] = useState(false);
  console.log(user);

  const menu = [
    { item: "Home", route: "/" },
    { item: "Pets", route: "/pets" },
    { item: "Contact", route: "/contact" },
  ];

  const links = menu.map((items, idx) => (
    <li key={idx} className="plus text-lg">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#894b8d]" : "hover:text-[#894b8d]"
        }
        to={`${items.route}`}
      >
        {items.item}
      </NavLink>
    </li>
  ));

  const handleLogout = () => {
    logoutUser().then(() => {
      toast.success("Logout Successfully");
    });
  };

  return (
    <div className="navbar bg-[#002169] shadow-sm text-white p-2">
      <div className="ml-10 mx-auto navbar-start flex gap-10">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="dropdown flex items-center">
          <div tabIndex={0} role="button" className="lg:hidden -ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#002169] rounded-box z-1 mt-30 -ml-13 w-32 p-2 shadow plus"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="plus">
        <PetLogo />
      </div>
      <div className="navbar-end mr-10">
        {user && user?.email ? (
          <div onClick={() => setOpen(!open)}
            className="relative group cursor-pointer"
          >
            <img
              src={user?.photoURL}
              alt="user"
              className="w-12 h-12 rounded-full border-2 border-gray-200 object-cover"
            />
            {/* Hover Name */}
            <div className="bg-black text-white text-sm px-3 py-1 absolute top-10 opacity-0 rounded-xl group-hover:opacity-100 transition">
              {user?.displayName}
            </div>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-3 w-48 
                       bg-white shadow-xl rounded-xl border border- py-2 z-50"
                >
                  {/* User Info */}
                  <div className="px-4 py-2 border-b border-">
                     <div className="flex justify-center" onClick={()=>setOpen(!open)}>
                      <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="" />
                     </div>
                    <p className="text-xs text-center text-gray-500">{user?.email}</p>
                  </div>

                  {/* Link to Dashboard */}
                  <div className="">
                    <Link
                    to="/dashboard"
                    className="flex items-center gap-3 px-4 py-2 hover:bg- transition"
                    onClick={() => setOpen(false)}
                  >
                    <Squares2X2Icon className="w-5 text-" />
                    <span className="text-sm text-gray-700">Dashboard</span>
                  </Link>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="w-full ml-8 flex items-center gap-1 px-4 py-2"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 text-red-500" />
                    <span className="text-sm text-red-500 hover:text-red-600 font-medium">
                      Logout
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              ></div>
            )}
          </div>
        ) : (
          <Link
            to="/signIn"
            className="bg-[#37528e] text-white flex items-center rounded-2xl p-2 gap-2 hover:bg-[#894b8d] transition-transform px-6 plus"
          >
            <IoIosLock /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
