import { FaArrowAltCircleRight, FaArrowRight, FaLink } from "react-icons/fa"; // Importing the arrow icon from react-icons

interface CertificateCardProps {
  years: string;
  title: string;
  institution: string;
  description: string;
  link: string; // Added link prop
}

export function CertificateCard({
  years,
  title,
  institution,
  description,
  link, 
}: CertificateCardProps) {
  return (
    <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#1a1a1a] transition-colors">
      <div className="flex justify-between items-center">
        <span className="text-primary text-xl font-semibold">{years}</span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaLink className="text-primaryText text-2xl hover:text-white transition-colors" />
        </a>
      </div>
      <h3 className="text-primaryText text-2xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{institution}</p>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
