import Hero from "./_components/Hero/hero";
import About from "./_components/About/about";
import Services from "./_components/Services/services";
import Skills from "./_components/Skills/skills";
import Projects from "./_components/Projects/projects";
import Publications from "./_components/Publications/publications";
import Contact from "./_components/Contact/contact";
import Certificate from "./_components/Certificate/certificate";


export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-16">
        <section id="home" className="min-h-screen ">
          <Hero />
        </section>
        <section id="about" className="min-h-screen" >
          <About />
        </section>
        <section id="services" className="min-h-screen ">
          <Services />
        </section>
        <section id="skills" className="min-h-screen ">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen ">
          <Projects />
        </section>
        {/* <section id="certificate" className="min-h-screen ">
          <Certificate />
        </section> */}
    
        <section id="publications" className="min-h-screen ">
          <Publications />
        </section>

        <section id="contact" className="min-h-screen ">
          <Contact />
        </section>
      </main>
    </>
  );
}
