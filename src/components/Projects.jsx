import React, { useState } from "react";
import shivamYoga from "../assets/shivam_yoga_website.png";
import radiumAdmin from "../assets/radium_admin.png";
import yogaAdmin from "../assets/yoga_admin.png";
import nimeyaWebsite from "../assets/nimeya_website.png";
import nimeyaAdmin from "../assets/nimeya_admin.png";
import prominenceWebsite from "../assets/prominence_website.png";
import gisAdmin from "../assets/gis_admin.png";
import prominenceAdmin from "../assets/prominence_admin.png";

const categories = ["All", "Website", "Admin Panel"];

const projects = [
  {
    name: "Shivam Yoga Website",
    category: "Website",
    image: shivamYoga,
    description: "A modern responsive yoga studio website.",
    link: "https://shivamyogastudio.in/",
  },
  {
    name: "Radium Medical Aesthetics",
    category: "Admin Panel",
    image: radiumAdmin,
    description: "Backend dashboard to manage products,treatments and vouchers.",
    link: "https://admin.radium-aesthetics.com/",
  },
  {
    name: "Shivam Yoga Admin",
    category: "Admin Panel",
    image: yogaAdmin,
    description: "Backend dashboard to manage yoga sessions.",
    link: "https://admin.shivamyogastudio.in/",
  },
  {
    name: "Nimeya AI",
    category: "Website",
    image: nimeyaWebsite,
    description: "A finencial wellness web application.",
    link: "https://app.nimeya.ai/",
  },
  {
    name: "Nimeya AI Admin",
    category: "Admin Panel",
    image: nimeyaAdmin,
    description: "Admin tools and analytics for Nimeya.",
    link: "https://app.nimeya.ai/admin",
  },
  {
    name: "Prominence Website",
    category: "Website",
    image: prominenceWebsite,
    description: "This is a ride booking website.",
    link: "https://prominencesingapore.com/",
  },
  {
    name: "GIS Admin",
    category: "Admin Panel",
    image: gisAdmin,
    description: "Admin dashboard for manage service engineers and his jobs.",
    link: "https://admin.gis.sg/",
  },
  {
    name: "Prominence Admin",
    category: "Admin Panel",
    image: prominenceAdmin,
    description: "Admin dashboard for manage users,vehicles and other relevent details.",
    link: "https://prominencesingapore.com/",
  },
];


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-[#1E1E1E] py-16 px-4 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-orange-600 text-white shadow"
                  : "bg-[#2A2A2A] text-gray-300 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-orange-400 hover:text-orange-300 text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
