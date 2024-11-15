import Image from "next/image";
import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="relative p-4 border-b h-20 flex items-center bg-[#0D0E25] shadow-sm">
      {/* Contenedor para la imagen ajustada al navbar */}
      <div className="absolute inset-y-0 left-0 h-full w-auto bg-[#0D0E25] flex items-center">
        <Image 
          src="/img77.png" 
          alt="Navbar Background" 
          width={120}  // Ajusta según sea necesario
          height={120} // Ajusta según sea necesario
          className="object-contain"
        />
      </div>
      
      {/* Contenido del Navbar */}
      <div className="relative z-10 flex items-center w-full ml-20">
        <MobileSidebar />
        <NavbarRoutes />
      </div>
    </div>
  );
};
