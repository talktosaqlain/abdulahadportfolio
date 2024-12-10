import { certificateData } from "./data/certificate-data";
import { CertificateCard } from "./certificate-card";

export default function Certificate() {
  return (
    <section
      className="min-h-screen bg-black py-16 md:py-24 space-y-12 items-center justify-center"
      id="certificate"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative inline-block">
          International Courses
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#333333] text-7xl md:text-8xl opacity-20 whitespace-nowrap -z-10">
              International Courses
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
          Completed Online Courses from Top Global Institutions to Expand My Skills and Knowledge.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateData.map((item) => (
            <CertificateCard
              key={item.id}
              link={item.link}
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
