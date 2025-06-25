import { FaDownload } from "react-icons/fa";
import profileImage from "../assets/profile_image.jpg";

export default function About() {
  return (
    <section id="about" className="bg-[#1E1E1E] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B00]">
          About Me
        </h2>
        <p className="text-gray-400 mt-2">
          Full Stack Web Developer with expertise in Laravel, Vue.js & React.js
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-[#2A2A2A] rounded-lg overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="grayscale object-cover w-80 h-auto"
            />
          </div>
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2 text-gray-300 space-y-6">
          <p className="leading-relaxed">
            I’m a skilled and professional web developer with 3+ years of
            experience in the Laravel Framework, where I’ve developed robust
            backend systems, RESTful APIs, and integrated third-party services.
            In addition to backend development, I’ve also worked with modern
            frontend technologies like React.js and Vue.js to build dynamic and
            responsive user interfaces.
            <br />
            <br />I also have knowledge of Node.js and Express.js for backend
            development, and basic understanding of Java for general
            programming.
          </p>
          <a
            href="/pritee-portfolio/PriteeSharmaCV.pdf"
            download
          >
            <button className="mt-4 flex items-center gap-2 bg-[#FF6B00] px-5 py-3 rounded-md text-white hover:bg-orange-600 transition">
              <FaDownload /> Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
