interface ResumeCardProps {
  years: string;
  title: string;
  institution: string;
  description: string;
}

export function ResumeCard({
  years,
  title,
  institution,
  description,
}: ResumeCardProps) {
  return (
    <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#1a1a1a] transition-colors">
      <span className="text-primary text-xl font-semibold">{years}</span>
      <h3 className="text-primaryText text-2xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{institution}</p>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
