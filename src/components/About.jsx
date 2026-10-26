import { FaDownload } from "react-icons/fa";
import profileImage from "../assets/profile_image.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#1E1E1E] px-6 py-20 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            A little about me
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-400 md:text-base">
            Full Stack Developer focused on backend systems, API development,
            and reliable web application delivery.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-[#292929] to-[#242424] p-3 shadow-2xl shadow-black/20">
              <img
                src={profileImage}
                alt="Pritee Sharma"
                className="aspect-[4/5] w-full rounded-xl object-cover grayscale"
              />
              <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-white/10 bg-[#242424]/95 px-4 py-3 text-center shadow-xl backdrop-blur">
                <p className="font-semibold text-white">Pritee Sharma</p>
                <p className="mt-1 text-sm text-orange-300">
                  Full Stack Developer · 4+ years
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pt-4 text-gray-300 lg:pt-0">
            <div className="space-y-5 text-[15px] leading-7 md:text-base">
              <p className="text-lg font-medium leading-8 text-white md:text-xl">
                I’m a Full Stack Developer with 4+ years of experience in web
                development, specializing in PHP, Laravel, backend development,
                and REST API development.
              </p>
              <p>
                I have hands-on experience with Django, React.js, Vue.js,
                JavaScript, MySQL, and PostgreSQL. I enjoy building scalable
                web applications, developing reliable APIs, integrating
                frontend and backend systems, and solving complex technical
                problems with clean and efficient solutions.
              </p>
              <p>
                I also have experience with Git and Git-based workflows,
                including branch management, code integration, merging, and
                deploying application updates to servers. I’m comfortable
                working across development environments and troubleshooting
                application issues to ensure smooth and reliable deployments.
              </p>
              <p>
                I’m passionate about learning new technologies, improving
                application performance, writing maintainable code, and building
                solutions that deliver real value.
              </p>
              <p>
                Currently open to opportunities in Backend Development,
                Laravel/PHP Development, and Full Stack Development.
              </p>
            </div>
            <a
              href="/pritee-portfolio/Pritee_Sharma_CV.pdf"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
