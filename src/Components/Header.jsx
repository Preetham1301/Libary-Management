import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      {/* Header Section */}
      <header className="bg-gradient-to-r from-teal-700 to-teal-500 p-5 rounded-lg shadow-lg mb-6">
        <h1 className="text-center text-4xl font-extrabold text-white font-serif tracking-wide">
          Welcome To Online Library System
        </h1>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-700 shadow-md rounded-lg">
        <ul className="flex justify-center gap-10 text-white py-4">
          <li className="hover:font-bold hover:scale-105 transition-all duration-200 hover:text-violet-300">
            <NavLink to={"/"} className="flex items-center">
              <FontAwesomeIcon className="mr-2" icon={faHome} />
              Home
            </NavLink>
          </li>
          <li className="hover:font-bold hover:scale-105 transition-all duration-200 hover:text-violet-300">
            <NavLink to={"BrowserBooks"} className="flex items-center">
              <FontAwesomeIcon className="mr-2" icon={faBook} />
              Browse Books
            </NavLink>
          </li>
          <li className="hover:font-bold hover:scale-105 transition-all duration-200 hover:text-violet-300">
            <NavLink to={"AddBook"} className="flex items-center">
              <FontAwesomeIcon className="mr-2" icon={faPlus} />
              Add Book
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
