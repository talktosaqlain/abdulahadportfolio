"use client";
import { useState } from "react";
import { projectsData } from "./data/project-data";
import { ProjectCard } from "./project-card";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(6); // State to manage visible cards

  // Function to load more cards
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="min-h-screen bg-black py-16 md:py-24" id="projects">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative inline-block">
            Projects
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#333333] text-7xl md:text-8xl opacity-20 whitespace-nowrap -z-10">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Showcasing a collection of Flutter applications demonstrating
            expertise in mobile development, user interface design, and complex
            feature implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.slice(0, visibleCount).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < projectsData.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full hover:primary/70 transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
