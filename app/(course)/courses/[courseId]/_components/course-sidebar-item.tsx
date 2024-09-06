"use client";

import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked,
}: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;
  const isActive = pathname?.includes(id);

  const onClick = () => {
    if (!isLocked) {
      router.push(`/courses/${courseId}/chapters/${id}`);
    }
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all",
        isLocked
          ? "text-gray-400 hover:text-gray-500" // Color claro para ítems bloqueados
          : "text-slate-300 hover:text-sky-500", // Color claro para ítems no bloqueados
        isActive && "text-sky-500 bg-sky-200/20 hover:bg-sky-200/20"
      )}
      disabled={isLocked} // Desactivar el botón si está bloqueado
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-400",
            isActive && "text-sky-500",
            isCompleted && "text-emerald-500"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100",
          isCompleted && "border-emerald-500"
        )}
      />
    </button>
  );
};

