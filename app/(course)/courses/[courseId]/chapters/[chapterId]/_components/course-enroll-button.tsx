"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch {
      toast.error("Algo salió mal, intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto px-6 py-3 rounded-lg shadow-lg text-white bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      Inscríbete por {formatPrice(price)}
    </Button>
  );
};
