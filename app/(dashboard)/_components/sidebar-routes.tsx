"use client";

import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";


import { BarChart, Compass, Layout, List, MessageSquare } from "lucide-react"; // Asegúrate de importar el ícono correcto

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
    icon: MessageSquare, // Cambiar a un ícono de chat compatible
    label: "Chat EVA", // Nuevo ítem en el sidebar
    href: "/chat", // Ruta a la nueva página del chat
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
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full h-screen bg-[#13161C] p-4">
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
}
