import { publicationsData } from "./data/publications-data";
import { PublicationCard } from "./publication-card";

export default function Publications() {
  return (
    <section className="min-h-screen bg-black py-16 md:py-24" id="publications">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative inline-block">
            Publications
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#333333] text-7xl md:text-8xl opacity-20 whitespace-nowrap -z-10">
              Publications
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Showcasing research contributions in the fields of network security
            and traffic management.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {publicationsData.map((publication) => (
            <PublicationCard
              key={publication.id}
              title={publication.title}
              conference={publication.conference}
              pages={publication.pages}
              year={publication.year}
              link={publication.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
