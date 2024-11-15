"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import DatePickerForm from './form1/DatePickerForm';
import { LogOut, CheckCircle, ClipboardList, FileText, UserCheck, Award, MessageSquare, Briefcase, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="flex h-screen overflow-y-auto bg-gradient-to-b from-[#0D0E25] via-[#1A1C2E] to-[#1C1E3A] text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#191b2e] flex flex-col p-4">
        <div className="flex justify-center items-center mb-10">
          <Image
            alt="Learning Zone Logo"
            src="/logo5.svg"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <nav>
         
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navbar */}
        <header className="bg-[#191b2e] p-4 flex justify-between items-center shadow-md">
          <h3 className="text-3xl font-bold">Panel del Administrador para Agregar Tutores</h3>
          <Link href="/">
            <Button size="sm" variant="ghost" className="text-white bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] transition-transform transform hover:scale-105">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </Link>
        </header>

        {/* Información sobre el proceso para ser tutor */}
        <section className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">Información para el Administrador</h2>
          <p className="text-center text-[#A5B4FC] mb-6">
            A continuación se presentan los requisitos necesarios que el administrador debe considerar antes de añadir a un candidato como tutor en la plataforma. Estos criterios aseguran que el candidato cumpla con los estándares de calidad y profesionalismo de LearningZone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requisitos detallados */}
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#1A1C2E] to-[#2D3145] rounded-lg shadow-lg">
              <UserCheck className="text-[#8A2BE2] w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg text-white">Experiencia Profesional</h3>
                <p className="text-sm text-[#A5B4FC]">
                  Mínimo 2 años de experiencia en la materia a enseñar y experiencia práctica demostrable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#1A1C2E] to-[#2D3145] rounded-lg shadow-lg">
              <Award className="text-[#8A2BE2] w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg text-white">Certificaciones</h3>
                <p className="text-sm text-[#A5B4FC]">
                  Se deben presentar certificados académicos o profesionales en el campo de especialización.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#1A1C2E] to-[#2D3145] rounded-lg shadow-lg">
              <MessageSquare className="text-[#8A2BE2] w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg text-white">Habilidades de Comunicación</h3>
                <p className="text-sm text-[#A5B4FC]">
                  Capacidad para explicar conceptos de manera clara y efectiva, evaluada en entrevista personal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#1A1C2E] to-[#2D3145] rounded-lg shadow-lg">
              <Briefcase className="text-[#8A2BE2] w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg text-white">Portafolio</h3>
                <p className="text-sm text-[#A5B4FC]">
                  Se recomienda tener un portafolio o proyectos previos que demuestren las habilidades.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#1A1C2E] to-[#2D3145] rounded-lg shadow-lg">
              <Layers className="text-[#8A2BE2] w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg text-white">Clase Demostrativa</h3>
                <p className="text-sm text-[#A5B4FC]">
                  Se debe realizar una clase de prueba para evaluar habilidades de enseñanza.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#1A1C2E] to-[#2D3145] rounded-lg shadow-lg">
              <ClipboardList className="text-[#8A2BE2] w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg text-white">Documentación</h3>
                <p className="text-sm text-[#A5B4FC]">
                  Adjuntar CV y certificados académicos/profesionales en formato PDF o DOCX.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario para añadir tutor */}
        <section className="p-6 space-y-6">
          <div>
            
            <DatePickerForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
