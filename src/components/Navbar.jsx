import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // for hamburger & close icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["home", "skills", "about", "projects", "contact"];

  return (
    <header className="bg-[#1E1E1E] text-white py-4 px-6 md:px-16 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <h1 className="text-4xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 drop-shadow-md">
        PS
      </h1>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-sm">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="text-orange-500 font-medium"
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1E1E1E] flex flex-col items-center gap-6 py-6 md:hidden z-40 shadow-lg">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)} // close on click
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
        {/* Hire Me Button */}
      {/* <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
        <button className="bg-[#FF6B00] hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-md">
          Hire Me
        </button>
      </Link> */}
    </header>
  );
}
