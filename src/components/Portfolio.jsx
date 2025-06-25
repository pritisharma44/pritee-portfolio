const portfolio = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Tailwind CSS.",
      link: "https://shivamyogastudio.in/",
    },
    {
      title: "E-Commerce Platform",
      description: "An online store built using Laravel, Vue.js, and Stripe integration.",
      link: "https://shivamyogastudio.in/",
    },
    {
      title: "Admin Dashboard",
      description: "A dashboard app built with React.js and Chart.js for real-time analytics.",
      link: "https://shivamyogastudio.in/",
    },
  ];
  
  export default function Portfolio() {
    return (
      <section id="portfolio" className="bg-[#1E1E1E] text-white py-20 px-6 md:px-20">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">My Projects</h2>
            <p className="text-gray-400 mt-2">Selected works from recent projects</p>
          </div>
  
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-6 rounded-lg shadow-sm hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#FF6B00]">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank" 
                  className="inline-block text-sm text-[#FF6B00] hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  