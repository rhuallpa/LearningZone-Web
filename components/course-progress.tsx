import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
};

const colorByVariant = {
  default: "bg-sky-700",
  success: "bg-emerald-700",
}

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
}

export const CourseProgress = ({
  value,
  variant = "default", // Provide default values
  size = "default", // Provide default values
}: CourseProgressProps) => {
  return (
    <div>
      <Progress
        className={cn(
          "h-2",
          colorByVariant[variant] // Apply variant color
        )}
        value={value}
      />
      <p className={cn(
        "font-medium mt-2",
        colorByVariant, // Apply variant color
        sizeByVariant[size] // Apply size
      )}>
        {Math.round(value)}% Complete
      </p>
    </div>
  );
}
