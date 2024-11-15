"use client";

import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { BarChart, Compass, Layout, List, MessageSquare } from "lucide-react";

const guestRoutes = [
  {
    icon: Layout,
    label: "Mi Progreso",
    href: "/",
  },
  {
    icon: Compass,
    label: "Cursos",
    href: "/search",
  },
  {
    icon: List,
    label: "Tutores",
    href: "/tutors",
  },
  {
    icon: MessageSquare,
    label: "Chat EVA",
    href: "/chatEva",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Cursos",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Análisis",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full h-screen p-4" style={{ background: 'linear-gradient(to right, #0D0E25, #0D0E25, #1C1E3A)' }}>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
