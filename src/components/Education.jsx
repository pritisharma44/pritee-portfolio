export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Technology (IT)",
      institute: "Babu Sunder Singh Institute of Technology and Management",
      period: "2023 – 2026",
      score: "71%", 
      description:
        "Pursuing Bachelor of Technology in Information Technology with a focus on web development, data structures, and programming languages like C, Java, and Python. Actively involved in hands-on projects and technical workshops to build real-world problem-solving skills.",
    },
    {
      degree: "Diploma in Information Technology",
      institute: "Government Girls Polytechnic, Gorakhpur",
      period: "2019 – 2021",
      score: "83%", 
      description:
        "Completed Diploma in Information Technology, building a strong foundation in programming, software development, and web technologies.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#1E1E1E] text-white px-4 md:px-20 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B00] text-center mb-12">
        My Education
      </h2>

      <div className="relative border-l-2 border-[#FF6B00] pl-6 space-y-10">
        {educationList.map((edu, index) => (
          <div key={index} className="relative">
            {/* Marker */}
            <div className="absolute -left-4 top-1 w-4 h-4 bg-[#FF6B00] rounded-full border-2 border-white"></div>

            {/* Content */}
            <div className="bg-[#2A2A2A] p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-[#FF6B00]">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{edu.institute}</p>
              <p className="text-gray-500 text-sm italic mb-1">{edu.period}</p>
              <p className="text-gray-400 text-sm mb-2">
                <span className="font-medium">Score:</span> {edu.score}
              </p>

              <p className="text-gray-300">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
