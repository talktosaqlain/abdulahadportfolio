import Hero from "./_components/hero";
import About from "./_components/about";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen pt-16">
        <section id="home" className="min-h-screen ">
          <Hero />
        </section>
        <section id="about" className="min-h-screen ">
          <About />
        </section>
        <section id="resume" className="min-h-screen ">
          <h2 className="text-3xl font-bold text-center py-20">
            Resume Section
          </h2>
        </section>
        <section id="services" className="min-h-screen ">
          <h2 className="text-3xl font-bold text-center py-20">
            Services Section
          </h2>
        </section>
        <section id="skills" className="min-h-screen ">
          <h2 className="text-3xl font-bold text-center py-20">
            Skills Section
          </h2>
        </section>
        <section id="projects" className="min-h-screen ">
          <h2 className="text-3xl font-bold text-center py-20">
            Projects Section
          </h2>
        </section>
        <section id="blog" className="min-h-screen ">
          <h2 className="text-3xl font-bold text-center py-20">Blog Section</h2>
        </section>
        <section id="contact" className="min-h-screen ">
          <h2 className="text-3xl font-bold text-center py-20">
            Contact Section
          </h2>
        </section>
      </main>
    </>
  );
}
