import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // for hamburger & close icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["home", "skills", "about", "projects", "contact"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#171717]/95 px-5 py-3 text-white shadow-lg shadow-black/10 backdrop-blur-md md:px-12 lg:px-16">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="group flex cursor-pointer flex-col leading-none"
        aria-label="Pritee Sharma, home"
      >
        <span className="font-sans text-[27px] font-bold tracking-[-0.06em] text-white transition group-hover:text-orange-100">
          Pritee<span className="text-orange-400">.</span>
        </span>
        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-gray-400">
          Developer portfolio
        </span>
      </Link>
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 text-sm md:flex">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="!text-orange-400"
            className="cursor-pointer font-medium text-gray-400 transition-colors hover:text-white"
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
