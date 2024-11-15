"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface CourseEnrollButtonProps {
  courseId: string;
}

export const CourseEnrollButton1 = ({
  courseId,
}: CourseEnrollButtonProps) => {

  return (
    <Link href={`/tutoring-request/${courseId}`}>
      <Button
        size="sm"
        className="w-full md:w-auto px-6 py-3 rounded-lg shadow-lg text-white bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        Solicitar Tutorías
      </Button>
    </Link>
  );
};
