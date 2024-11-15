"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
};

export const Actions = ({
  disabled,
  courseId,
  isPublished
}: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success("Curso no publicado");
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success("Curso publicado");
        confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error("Algo salió mal");
    } finally {
      setIsLoading(false);
    }
  }
  
  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}`);

      toast.success("Curso eliminado");
      router.refresh();
      router.push(`/teacher/courses`);
    } catch {
      toast.error("Algo salió mal");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        size="sm"
        className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-700 hover:from-purple-700 hover:via-blue-600 hover:to-purple-800 text-white"
      >
        {isPublished ? "No Publicar" : "Publicar"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button 
          size="sm" 
          disabled={isLoading} 
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-700 hover:from-purple-700 hover:via-blue-600 hover:to-purple-800 text-white"
        >
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  )
}
