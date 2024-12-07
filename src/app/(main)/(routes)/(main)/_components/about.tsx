import Image from "next/image";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-black py-16 md:py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src="/images/ahad.jpeg"
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
                <span className="absolute -top-8 left-0 text-[#333333] text-7xl md:text-8xl opacity-20 -z-10">
                  About
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>

            <div className="space-y-4">
              <InfoItem label="Name:" value="Abdulahad" />
              <InfoItem label="Date of birth:" value="June 12, 2000" />
              <InfoItem label="Address:" value="Lahore" />
              <InfoItem label="Zip code:" value="1000" />
              <InfoItem label="Email:" value="abadulahadofficialy@gmail.com" />
              <InfoItem label="Phone:" value="+92 344 4891612" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[#FFD700] text-4xl font-bold">120</span>
                <span className="text-white text-xl">Project complete</span>
              </div>

              <a
                href="/images/ahad.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-black rounded-full hover:bg-[#FFD700]/90 transition-colors"
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
      <span className="text-white font-medium min-w-[120px]">{label}</span>
      <span className="text-gray-400">{value}</span>
    </div>
  );
}
