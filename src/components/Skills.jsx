import {
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiJavascript,
  SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { icon: <SiLaravel size={28} />, label: "Laravel", percent: 95 },
  { icon: <SiVuedotjs size={28} />, label: "Vue.js", percent: 80 },
  { icon: <SiReact size={28} />, label: "React.js", percent: 85 },
  { icon: <SiNodedotjs size={28} />, label: "Node.js", percent: 70 },
  { icon: <SiExpress size={28} />, label: "Express.js", percent: 75 },
  { icon: <SiMysql size={28} />, label: "MySQL", percent: 95 },
  { icon: <FaJava size={28} />, label: "Core Java", percent: 80 },
  { icon: <SiJavascript size={28} />, label: "JavaScript", percent: 85 },
  { icon: <SiPhp size={28} />, label: "PHP", percent: 85 },
];

  export default function Skills() {
    return (
      <section id="skills" className="bg-[#1E1E1E] text-white py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B00] text-center mb-12">
          My Skills
        </h2>
  
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <div className="relative w-24 h-24 mx-auto">
                <svg className="transform -rotate-90" width="96" height="96">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="#2A2A2A"
                    strokeWidth="5"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="#FF6B00"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={264} // 2πr ≈ 2 * 3.14 * 42 = 264
                    strokeDashoffset={(264 * (100 - skill.percent)) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-lg">
                  {skill.percent}%
                </div>
              </div>
              <div className="flex justify-center text-[#FF6B00]">{skill.icon}</div>
              <p className="text-gray-300">{skill.label}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {skills.map((skill, idx) => (
            <div key={idx} className="space-y-3">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-[#FF6B00] flex items-center justify-center">
                  {skill.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  {skill.percent}%
                </div>
              </div>
              <p className="text-[#FF6B00] font-semibold">{skill.percent}%</p>
              <p className="text-gray-300 text-sm">{skill.label}</p>
            </div>
          ))}
        </div> */}
      </section>
    );
  }
  