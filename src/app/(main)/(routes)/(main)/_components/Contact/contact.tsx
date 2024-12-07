import { MapPin, Phone, Mail, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "ADDRESS",
    value: "Lahore",
    link: null,
  },
  {
    icon: Phone,
    label: "CONTACT NUMBER",
    value: "+92 344 4891612",
    link: "tel:+923444891612",
  },
  {
    icon: Mail,
    label: "EMAIL ADDRESS",
    value: "abadulahadofficialy@gmail.com",
    link: "mailto:abadulahadofficialy@gmail.com",
  },
  {
    icon: Globe,
    label: "WEBSITE",
    value: "abdulahad-portfolio.vercel.app",
    link: "https://abdulahad-portfolio.vercel.app",
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen bg-black py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative inline-block">
            Contact Me
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#333333] text-7xl md:text-8xl opacity-20 whitespace-nowrap -z-10">
              Contact
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-[#FFD700] transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-2">
                {item.label}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-400">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
