import { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-4 p-4 bg-gradient-to-br from-[#0D0E25] to-[#1C1E3A] shadow-lg">
      <div>
        <IconBadge
          variant={variant}
          icon={Icon}
        />
      </div>

      <div>
        <p className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
          {label}
        </p>
        <p className="text-purple-200 text-md font-bold">
          {numberOfItems} {numberOfItems === 1 ? "Curso" : "Cursos"}
        </p>
      </div>
    </div>
  );
};
