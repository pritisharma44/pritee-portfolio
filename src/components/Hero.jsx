import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile_image_1.png";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#171717] text-white pt-24 md:pt-28"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center gap-12 px-6 py-12 md:flex-row md:px-12 lg:gap-20">
        {/* Text Content */}
        <div className="order-2 w-full space-y-6 text-center md:order-1 md:w-3/5 md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-200">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            Open to Backend &amp; Full Stack opportunities
          </p>
          <div className="space-y-2">
            <p className="text-lg text-gray-400">Hi, I’m</p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Pritee Sharma
            </h1>
          </div>
          <h2 className="text-2xl font-semibold leading-tight text-orange-400 md:text-3xl lg:text-4xl">
            Full Stack Developer
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 md:mx-0 md:text-lg">
            4+ years building scalable web applications, reliable REST APIs,
            and polished digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {["PHP", "Laravel", "Django", "React.js", "Vue.js", "PostgreSQL"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 md:text-sm"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-3 text-gray-300 md:justify-start">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/priti.sharma_2546?igsh=ejV6bXp6d2g3dXBv"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-orange-400/60 hover:text-orange-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/pritee-sharma-a19994227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-orange-400/60 hover:text-orange-300"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-orange-400/60 hover:text-orange-300"
            >
              <FaTwitter size={22} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-1 md:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Let's Connect
            </Link>
            <a
              href="/pritee-portfolio/Pritee_Sharma_CV.pdf"
              download
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-gray-200 transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto grid max-w-lg grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6 text-center md:mx-0 md:text-left">
            <div className="px-2 md:px-4">
              <span className="text-xl font-bold text-orange-400 md:text-2xl">4+</span>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">Years experience</p>
            </div>
            <div className="px-2 md:px-4">
              <span className="text-xl font-bold text-orange-400 md:text-2xl">15+</span>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">Projects delivered</p>
            </div>
            <div className="px-2 md:px-4">
              <span className="text-xl font-bold text-orange-400 md:text-2xl">10+</span>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">Happy clients</p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 flex w-full justify-center md:order-2 md:w-2/5">
          <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-orange-400 via-orange-600 to-amber-300 p-1 shadow-2xl shadow-orange-500/20 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div className="h-full w-full overflow-hidden rounded-full bg-[#242424]">
              <img
                src={profileImage}
                alt="Pritee Sharma, Full Stack Developer"
                className="h-full w-full scale-110 object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
