import { servicesData } from "./data/services-data";
import { ServiceCard } from "./service-card";

export default function Services() {
  return (
    <section className="min-h-screen bg-black py-16 md:py-24" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative inline-block">
            Services
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#333333] text-7xl md:text-8xl opacity-20 whitespace-nowrap -z-10">
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(servicesData) ? (
            servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                Icon={service.icon}
              />
            ))
          ) : (
            <div>No services available</div>
          )}
        </div>
      </div>
    </section>
  );
}
