import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  // State to toggle for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between  px-5 md:px-[300px] mx-auto py-6 md:py-8">
      {/* Logo Section */}
      <section className="flex items-center gap-[60px]">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img className="w-8 md:w-[36px]" src="spoon icon.png" alt="logo" />
          </Link>
          <h2 className="text-[28px] text-white">Restaurant</h2>
        </div>
        {/* Menu for Large Devices */}
        <div className="hidden md:flex justify-center py-1.5 mx-auto">
          <nav className="flex items-center gap-10 text-lg font-semibold text-center text-white ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </section>
      {/* Button Section */}
      <div>
        <Link to="/">
          <button className="py-2.5 text-black px-6 font-semibold uppercase hidden md:inline-block bg-[#FEBF00]">
            Book A Table
          </button>
        </Link>
      </div>
      {/* -------------------------- */}
      {/* Hamburger Icon for Small Devices */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* ----------------- */}

      <div
        className={`w-56 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? " opacity-100" : "max-h-0 opacity-0"
        } md:hidden bg-[#6a1006] mx-2 mt-2 absolute top-16  right-0 z-10`}
      >
        <nav className="flex flex-col items-start p-4 space-y-2 text-lg font-semibold text-white">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/clients" onClick={() => setIsOpen(false)}>
            Clients
          </NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <Link to="/">
            <button className="py-2.5 text-black px-6 font-semibold uppercase bg-[#FEBF00]">
              Book A Table
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
