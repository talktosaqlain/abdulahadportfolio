import { skillsData } from "./data/skills-data";
import { SkillBar } from "./skill-bar";

export default function Skills() {
  return (
    <section className="min-h-screen bg-black py-16 md:py-24" id="skills">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative inline-block">
            My Skills
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#333333] text-7xl md:text-8xl opacity-20 whitespace-nowrap -z-10">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
