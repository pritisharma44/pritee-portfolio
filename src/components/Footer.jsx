import { FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-scroll"; // React Scroll for in-page navigation

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-400 py-10 text-center">
      {/* Logo */}
      <h1 className="text-4xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 drop-shadow-md">
        PS
      </h1>
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 mb-6 text-sm">
        {["home", "skills", "about", "projects", "contact"].map((item, i) => (
          <Link
            key={i}
            to={item}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-white"
          >
            {item === "about" ? "About me" : item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-6">
        <a href="https://www.instagram.com/priti.sharma_2546?igsh=ejV6bXp6d2g3dXBv" target="_blank" rel="noreferrer">
          <FaInstagram className="w-8 h-8 p-2 rounded-full border border-gray-500 hover:border-white" />
        </a>
        <a href="https://www.linkedin.com/in/pritee-sharma-a19994227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="w-8 h-8 p-2 rounded-full border border-gray-500 hover:border-white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="w-8 h-8 p-2 rounded-full border border-gray-500 hover:border-white" />
        </a>
        
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm mb-4">
        <div className="flex items-center gap-2">
          <FaEnvelope /> <span>sharmapritee3314@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt /> <span>+91 8738872183</span>
        </div>
      </div>

      <hr className="border-gray-700 my-4 w-1/2 mx-auto" />

      {/* Bottom line */}
      <p className="text-sm text-gray-500">
        Designed by <span className="text-white font-medium">@pritee.sharma</span> — Full Stack Developer
      </p>
    </footer>
  );
}
