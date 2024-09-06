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
        className="w-full md:w-auto bg-[#0A8ECD] hover:bg-[#086a99] text-white"
      >
        Solicitar Tutorías
      </Button>
    </Link>
  );
};
