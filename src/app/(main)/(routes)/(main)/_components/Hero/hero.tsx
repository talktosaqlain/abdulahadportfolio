import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Youtube, Briefcase } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/abdulahadofficially",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdulahad16/",
  },
  {
    name: "Fiverr",
    icon: Briefcase, // Using the Briefcase icon as a placeholder for Fiverr
    href: "https://fiverr.com/coderedge",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/technicalencoder",
  },
];
export default function Hero() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <span className="text-primary text-lg font-medium">HELLO!</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              I&apos;m{" "}
              <span className="text-primary block md:inline">Abdul Ahad</span>
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Software Engineer & Researcher
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://fiverr.com/coderedge"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-mediumbold text-black hover:bg-primary/90 transition-colors"
              >
                HIRE ME
              </Link>
              <Link
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white px-8 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                MY WORKS
              </Link>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[400px]">
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
