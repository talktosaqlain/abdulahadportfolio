import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  Icon: LucideIcon;
}

export function ServiceCard({ title, Icon }: ServiceCardProps) {
  return (
    <div className="bg-[#111111] p-8 rounded-lg text-center group hover:bg-[#1a1a1a] transition-colors">
      <div className="mb-6 flex justify-center">
        <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <div className="w-12 h-1 bg-primary mx-auto" />
    </div>
  );
}
