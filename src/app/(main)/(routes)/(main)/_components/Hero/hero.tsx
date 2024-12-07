import Image from "next/image";
import Link from "next/link";

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
              Software Engineer / Researcher
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-mediumbold text-black hover:bg-primary/90 transition-colors"
              >
                HIRE ME
              </Link>
              <Link
                href="#works"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white px-8 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                MY WORKS
              </Link>
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
