import Image from "next/image";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-black" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[450px] md:h-[500px] hidden md:block">
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
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                About Me
              </h2>
              <p className="text-secondaryText/80 text-base md:text-lg">
              I am a skilled Flutter Developer with experience in building mobile apps using Dart, Firebase, and RESTful APIs. I have
worked with Bloc and GetX for state management to create user-friendly and scalable apps. I am good at designing
dashboards, adding localization, and connecting apps with backend services. I focus on delivering high-quality apps that
meet client needs. I am always learning new technologies to improve my skills and build better apps.
              </p>
            </div>

            <div className="space-y-2">
              <InfoItem label="Name:" value="Abdulahad" />
              <InfoItem label="Address:" value="Lahore, Pakistan" />
              <InfoItem label="Email:" value="abadulahadofficialy@gmail.com" />
              <InfoItem label="Phone:" value="+92 344 4891612" />
              <InfoItem
                label="Qualification:"
                value="Bachelor in Computer Science (BSCS)"
              />
            </div>

            <div className="space-y-6">
              <a
                href="/images/ahad.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full hover:bg-primary/70 transition-colors"
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
    <div className="flex flex-wrap gap-4 border-b border-gray-800 pb-2">
      <span className="text-primaryText font-medium min-w-[120px]">
        {label}
      </span>
      <span className="text-secondaryText/50">{value}</span>
    </div>
  );
}
