export default function Experience() {
  const experiences = [
    {
      company: "Singsys Software Services Pvt Ltd",
      period: "Mar 2022 – Present",
      description:
        "Working as a Backend Developer using Laravel to build robust APIs and business logic, while also contributing to frontend development using React and Vue.js for building responsive and user-friendly interfaces.",
    },    
    {
      company: "Softpro India Pvt Ltd",
      period: "Sep 2021 – Feb 2022",
      description:
        "Apprenticeship in programming and web development with HTML, CSS, JavaScript, Bootstrap, C, Java, PHP, and (Database)MySQL",
    }
  ];

  return (
    <section className="min-h-screen bg-[#1E1E1E] text-white px-4 md:px-20 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B00] text-center mb-10">
        My Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg hover:shadow-orange-700 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#FF6B00]">
              {exp.company}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
