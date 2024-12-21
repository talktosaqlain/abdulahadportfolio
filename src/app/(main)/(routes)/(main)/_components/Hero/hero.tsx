import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaF,
  FaGoogleScholar,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/abdulahadofficially",
    colorClass: "text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/abdulahadofficially",
    colorClass: "text-gray-300",
  },
  {
    name: "Fiverr",
    icon: FaF,
    href: "https://fiverr.com/coderedge",
    colorClass: "text-gray-300",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/technicalencoder",
    colorClass: "text-gray-300",
  },
  {
    name: "Google Scholar",
    icon: FaGoogleScholar,
    href: "https://scholar.google.com/citations?user=BRR1LwYAAAAJ&hl=en",
    colorClass: "text-gray-300",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/abdulahadofficially",
    colorClass: "text-gradient-to-r from-pink-500 via-purple-500 to-yellow-500",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://web.facebook.com/abdulahadofficially",
    colorClass: "text-gray-300",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/+923114891612",
    colorClass: "text-gray-300",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-primary text-[40px]">Hello 👋</span>
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              I&apos;m{" "}
              <span className="text-primary block">Abdul Ahad</span>
            </h1>
            <p className="text-lg md:text-xl text-white">
              Mobile App Developer and Researcher
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://fiverr.com/coderedge"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-black hover:bg-primary/90 transition-colors"
              >
                HIRE ME
              </Link>
              <Link
                href="/images/ahad.pdf"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white px-8 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Download CV
              </Link>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:opacity-80 transition-opacity ${link.colorClass}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[400px] hidden md:block">
            <Image
              src="/images/ahad.svg"
              alt="Abdulahad"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
