import { resumeData } from "./data/resume-data";
import { ResumeCard } from "./resume-card";

export default function Resume() {
  return (
    <section
      className="min-h-screen bg-black py-16 md:py-24 space-y-12 items-center justify-center"
      id="resume"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative inline-block">
            Resume
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#333333] text-7xl md:text-8xl opacity-20 whitespace-nowrap -z-10">
              Resume
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.map((item) => (
            <ResumeCard
              key={item.id}
              years={item.years}
              title={item.title}
              institution={item.institution}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
