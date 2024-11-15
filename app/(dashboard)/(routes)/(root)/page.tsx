import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4 bg-gradient-to-r from-[#060C26] via-[#1C1E3A] to-[#0a0631] min-h-screen text-white">
      {/* Título de Bienvenida */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-bold text-center flex items-center">
          🎓 Bienvenido a
          <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2]">
            LearningZone
          </span>
        </h1>
      </div>

      {/* Tarjetas de Información */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="Cursos en Progreso"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={CheckCircle}
          label="Cursos Completados"
          numberOfItems={completedCourses.length}
          variant="success"
        />
      </div>

      {/* Lista de Cursos */}
      <CoursesList
        items={[...coursesInProgress, ...completedCourses]}
      />
    </div>
  );
}
