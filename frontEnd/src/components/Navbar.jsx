import React from "react";
import { FaInfinity } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const x = true;

  return (
    <div className="w-full flex justify-between items-center py-4 px-8 bg-slate-100">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <FaInfinity className="text-3xl hover:text-orange-400" />
        </Link>
        <span className="font-inter font-semibold text-xl">
          AI IMAGE <span className="text-orange-400">GENERATOR</span>
        </span>
      </div>
      <div>
        <ul className="flex md:flex-row flex-col gap-6 uppercase">
          <li className="hover:text-orange-400 font-semibold font-inter cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-400 font-semibold font-inter cursor-pointer">
            <Link to="/create-post">Create Post</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-6">
        <button className="border py-1 px-5 rounded-full bg-gradient-to-r from-orange-200 to-orange-400 hover:opacity-80 uppercase">
          Name
        </button>
        <button className="border py-1 px-5 rounded-full hover:bg-orange-400 uppercase">
          {x ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
