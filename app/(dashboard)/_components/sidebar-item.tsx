"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-[#A3A3FF] text-sm font-[500] pl-6 transition-all hover:text-white hover:bg-gradient-to-r from-[#8A2BE2] to-[#3B82F6]",
        isActive && "text-white bg-gradient-to-r from-[#492669] to-[#0e2f64]"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-[#A3A3FF] transition-colors",
            isActive && "text-white"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 h-full transition-all border-l-4 border-[#8A2BE2]",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
