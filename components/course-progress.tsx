import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "bg-blue-300", // Un azul más claro para mayor visibilidad
  success: "bg-blue-300",
}

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
}

export const CourseProgress = ({
  value,
  variant = "default",
  size = "default",
}: CourseProgressProps) => {
  return (
    <div>
      <Progress
        className={cn(
          "h-2 shadow-md shadow-blue-500", // Sombra azul para resaltar la barra de progreso
          colorByVariant[variant] // Aplica el color claro para la barra de progreso
        )}
        value={value}
      />
      <p className={cn(
        "font-medium mt-2 text-gray-200", // Texto claro para mayor visibilidad
        sizeByVariant[size] // Tamaño del texto según la variante
      )}>
        {Math.round(value)}% Completado
      </p>
    </div>
  );
}
