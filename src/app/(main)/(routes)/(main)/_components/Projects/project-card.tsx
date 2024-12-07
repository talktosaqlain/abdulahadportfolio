import { Smartphone, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string; // Add a link property
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-[#111111] p-6 rounded-lg group hover:bg-[#1a1a1a] transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="w-6 h-6 text-primary" />
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        {/* Wrap the button in an anchor tag */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#222222] text-primary group-hover:bg-primary group-hover:text-black transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <p className="text-gray-400 mb-6 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-black/50 text-primary text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
