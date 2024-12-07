import Image from "next/image";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-black" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[450px] md:h-[500px]">
            <Image
              src="/images/about.svg"
              alt="Abdulahad"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white relative">
                About Me
                <span className="absolute -top-8 left-0 text-secondaryText/50 text-7xl md:text-8xl opacity-20 -z-10">
                  About
                </span>
              </h2>
              <p className="text-secondaryText/80 text-lg">
                I am a Flutter developer with five years of experience building
                beautiful, user-friendly mobile apps. I have experience with
                Firebase, a Google-owned backend-as-a-service platform that
                helps developers build and deploy mobile and web apps.
              </p>
            </div>

            <div className="space-y-2">
              <InfoItem label="Name:" value="Abdulahad" />
              <InfoItem label="Address:" value="Lahore, Pakistan" />
              <InfoItem label="Email:" value="abadulahadofficialy@gmail.com" />
              <InfoItem label="Phone:" value="+92 344 4891612" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-primary text-4xl font-bold">12</span>
                <span className="text-white text-xl">Project complete</span>
              </div>

              <a
                href="/images/ahad.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full hover:primary/70 transition-colors"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-gray-800 pb-2">
      <span className="text-primaryText font-medium min-w-[120px]">
        {label}
      </span>
      <span className="text-secondaryText/50">{value}</span>
    </div>
  );
}
