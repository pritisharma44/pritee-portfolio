export default function Experience() {
  const experiences = [
    {
      role: "Backend Developer",
      company: "Singsys Software Services Pvt Ltd",
      period: "Mar 2022 – Feb 2026",
      type: "Full-time",
      description:
        "Built and maintained web applications, admin dashboards, and customer-facing platforms using Laravel, with contributions to frontend development using React.js and Vue.js.",
      highlights: [
        "Developed RESTful APIs and backend workflows for multiple client applications with Laravel and MySQL.",
        "Built responsive front-end interfaces with React.js and Vue.js for dashboards, portals, and marketing websites.",
        "Collaborated with clients and teams to improve product features, performance, and user experience across web platforms.",
      ],
      stack: ["Laravel", "React.js", "Vue.js", "MySQL", "REST API"],
    },
    {
      role: "Web Developer Intern",
      company: "Softpro India Pvt Ltd",
      period: "Sep 2021 – Feb 2022",
      type: "Apprenticeship",
      description:
        "Gained hands-on experience in web development fundamentals, database design, and application logic while working on responsive interfaces and backend practices.",
      highlights: [
        "Worked with HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL to build practical web applications.",
        "Learned structured programming concepts and application flow through real project work and training modules.",
        "Strengthened problem-solving and debugging skills in front-end and database-driven development.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#1E1E1E] text-white px-4 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B00] text-center mb-4">
          Professional Experience
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Building scalable web solutions across frontend, backend, and admin systems.
        </p>

        <div className="mb-8 rounded-xl border border-orange-500/30 bg-gradient-to-br from-[#2A2A2A] to-[#222222] p-6 shadow-lg shadow-orange-950/10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-orange-300">
            Current Project
          </p>
          <h3 className="text-2xl font-semibold text-white">
            E&amp;ICT Academy, IIT Roorkee
          </h3>
          <div className="mt-4 max-w-4xl space-y-3 leading-relaxed text-gray-300">
            <p>
              I currently contribute to the E&amp;ICT Academy project at IIT
              Roorkee. I work on the existing admin dashboard using React.js
              and Python. The public website uses Next.js.
            </p>
            <p>
              I work with PostgreSQL and use Git to manage code changes. My
              tasks include updating features, fixing issues, and maintaining
              the applications.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["React.js", "Python", "Next.js", "PostgreSQL", "Git"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-orange-500/30 bg-[#1E1E1E] px-3 py-1 text-xs font-medium text-orange-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] p-6 rounded-xl shadow-lg hover:shadow-orange-700/40 transition duration-300 border border-gray-700"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-orange-300">
                    {exp.type}
                  </p>
                  <h3 className="text-2xl font-semibold text-[#FF6B00]">
                    {exp.role}
                  </h3>
                </div>
              </div>

              <h4 className="text-xl font-medium text-white mb-2">{exp.company}</h4>
              <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
              <p className="text-gray-300 leading-relaxed mb-5">{exp.description}</p>

              <ul className="space-y-2 text-gray-300 text-sm mb-5">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#FF6B00] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1E1E1E] text-orange-300 border border-orange-500/40 px-2.5 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
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
