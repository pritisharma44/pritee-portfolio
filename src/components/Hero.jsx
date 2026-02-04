import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile_image.jpg";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 md:px-20 py-4">
        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="text-[#FF6B00] font-medium">
            Home
          </a>
          <a href="#skills">Skills</a>
          <a href="#about">About me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact me</a>
        </nav>
        {/* <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-[#FF6B00] text-white px-5 py-2 rounded-md hover:bg-orange-600 cursor-pointer"
        >
          Hire Me
        </Link> */}
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 gap-10 py-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 order-1 md:order-1">
          <p className="text-gray-400 text-sm">Hi, I am</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Pritee Sharma
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B00]">
            Software Engineer
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-5 text-gray-300">
            <a href="https://www.instagram.com/priti.sharma_2546?igsh=ejV6bXp6d2g3dXBv" target="_blank" rel="noreferrer">
              <FaInstagram
                className="hover:text-white cursor-pointer"
                size={22}
              />
            </a>
            <a href="https://www.linkedin.com/in/pritee-sharma-a19994227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <FaLinkedinIn
                className="hover:text-white cursor-pointer"
                size={22}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter
                className="hover:text-white cursor-pointer"
                size={22}
              />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-[#FF6B00] text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 cursor-pointer"
            >
              Let's Connect
            </Link>
            <a
              href="/pritee-portfolio/PriteeSharmaCV.pdf"
              download
              className="border border-gray-400 px-6 py-2 rounded-md font-medium hover:border-white hover:text-white"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 divide-x divide-gray-600 text-center text-sm text-gray-300">
            <div className="px-2">
              <span className="text-[#FF6B00] text-xl font-bold">3+</span>
              <p>Experiences</p>
            </div>
            <div className="px-2">
              <span className="text-[#FF6B00] text-xl font-bold">15+</span>
              <p>Project done</p>
            </div>
            <div className="px-2">
              <span className="text-[#FF6B00] text-xl font-bold">10+</span>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-2">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-[#2A2A2A] rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover grayscale scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
