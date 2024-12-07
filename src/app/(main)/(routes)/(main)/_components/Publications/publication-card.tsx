import { FileText, ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  conference: string;
  pages: string;
  year: number;
  link: string;
}

export function PublicationCard({
  title,
  conference,
  pages,
  year,
  link,
}: PublicationCardProps) {
  return (
    <div className="bg-[#111111] p-6 rounded-lg group hover:bg-[#1a1a1a] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          <h3 className="text-white text-xl font-semibold line-clamp-2">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-gray-400 mb-4">{conference}</p>

      <div className="flex justify-between items-center">
        <div className="text-primary">
          <span className="mr-2">{year}</span>
          <span>{pages}</span>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          View Publication
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
