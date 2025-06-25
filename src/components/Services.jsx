import { FaUserAlt } from "react-icons/fa"; // Use any relevant icon here

const services = [
  {
    title: "App Design",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "API Integration",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Laravel Solutions",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Full Stack Projects",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#1E1E1E] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#2A2A2A] rounded-xl p-8 text-center hover:shadow-lg transition duration-300"
          >
            <FaUserAlt className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg text-orange-500 font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
