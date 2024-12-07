import Link from "next/link";
import { Github, Linkedin, Youtube, Briefcase } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

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

export default function Footer() {
  return (
    <footer className=" text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Abdulahad
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Flutter Developer & Software Engineer
            </p>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Abdulahad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
