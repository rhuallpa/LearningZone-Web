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

  const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);

  return (
    <div className="min-h-screen p-6 space-y-4 bg-[#13161C] text-white">
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
      <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
