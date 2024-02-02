// src/SideNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {Links} from './NavLink';


const SideNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 h-screen fixed">
      <div className="p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      {
        Links.map((nav,i)=>(
          <Link to={nav.path} key={i} className="block py-2 px-4 hover:bg-gray-700">
          {nav.name}
          </Link>
          ))
      }
      


      {/* <ul className="p-2">
        <li className="mb-2">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a>
        </li>
        <li className="mb-2">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">About</a>
        </li>
        <li className="mb-2">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Services</a>
        </li>
        <li className="mb-2">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default SideNavbar;
