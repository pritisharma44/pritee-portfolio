import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiGit,
  SiJavascript,
  SiPhp,
} from "react-icons/si";
import { FaCloudUploadAlt, FaCode, FaJava } from "react-icons/fa";

const skillGroups = [
  {
    title: "Core expertise",
    description: "My primary backend and API development strengths",
    skills: [
      { icon: <SiPhp size={20} />, label: "PHP" },
      { icon: <SiLaravel size={20} />, label: "Laravel" },
      { icon: <FaCode size={20} />, label: "Backend Development" },
      { icon: <FaCode size={20} />, label: "REST API Development" },
    ],
  },
  {
    title: "Hands-on technologies",
    description: "Other technologies I have used in web development",
    skills: [
      { icon: <SiDjango size={20} />, label: "Django" },
      { icon: <SiVuedotjs size={20} />, label: "Vue.js" },
      { icon: <SiJavascript size={20} />, label: "JavaScript" },
      { icon: <SiMysql size={20} />, label: "MySQL" },
    ],
  },
  {
    title: "Currently working with",
    description: "Technologies I am currently using in my work",
    skills: [
      { icon: <SiReact size={20} />, label: "React.js" },
      { icon: <SiNextdotjs size={20} />, label: "Next.js" },
      { icon: <SiPython size={20} />, label: "Python" },
      { icon: <SiPostgresql size={20} />, label: "PostgreSQL" },
    ],
  },
  {
    title: "Self-project experience",
    description:
      "Learned and practiced by building personal projects, not professional client projects",
    skills: [
      { icon: <SiNodedotjs size={20} />, label: "Node.js" },
      { icon: <SiExpress size={20} />, label: "Express.js" },
      { icon: <FaJava size={20} />, label: "Core Java" },
    ],
  },
  {
    title: "Development workflow",
    description: "Tools and practices I use to manage and deploy code",
    skills: [
      { icon: <SiGit size={20} />, label: "Git" },
      { icon: <FaCloudUploadAlt size={20} />, label: "Server Deployment" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#1E1E1E] px-6 py-20 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Technologies I work with
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Skills &amp; Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Grouped by the work I do and the technologies I use—without
            arbitrary percentage ratings.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#242424] p-6 transition duration-300 hover:border-orange-400/30"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1B1B1B] px-3 py-2 text-sm text-gray-200 transition hover:border-orange-400/40 hover:text-white"
                  >
                    <span className="text-orange-400">{skill.icon}</span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
