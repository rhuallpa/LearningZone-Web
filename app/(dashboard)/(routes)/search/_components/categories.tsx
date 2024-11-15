"use client";

import { Category } from "@prisma/client";
import { 
  FcBriefcase, 
  FcGlobe, 
  FcVideoFile, 
  FcDataProtection, 
  FcEngineering, 
  FcInfo, 
  FcCollaboration, 
  FcMultipleDevices, 
  FcPrivacy, 
  FcFilm, 
  FcStatistics, 
  FcSupport, 
  FcConferenceCall 
} from "react-icons/fc";

import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

// Mapa de categorías a íconos
const iconMap: Record<Category["name"], IconType> = {
  "Programación": FcMultipleDevices,
  "Desarrollo de Aplicaciones Web": FcGlobe,
  "Desarrollo de Aplicaciones Móviles": FcMultipleDevices,
  "Bases de Datos": FcDataProtection,
  "Inteligencia Artificial y Machine Learning": FcStatistics,
  "Ciberseguridad": FcPrivacy,
  "DevOps y Metodologías Ágiles": FcEngineering,
  "Desarrollo de Videojuegos": FcFilm,
  "Software Testing y QA": FcSupport,
  "Tutorías Personalizadas": FcConferenceCall,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
