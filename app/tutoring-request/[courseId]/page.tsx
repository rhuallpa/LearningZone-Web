"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DynamicForm = () => {
  const [email, setEmail] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState(''); 
  const [file, setFile] = useState<File | null>(null); 

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeSenderEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenderEmail(event.target.value);
  };

  const handleChangeDateTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('email', email);
    formData.append('senderEmail', senderEmail);
    if (file) {
      formData.append('file', file);
    }

    const actionUrl = `https://formsubmit.co/${email}`;

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage("Correo enviado exitosamente.");
      } else {
        setMessage("Mensaje enviado.");
      }
    } catch (error) {
      console.error("Mensaje enviado: ", error);
      setMessage("Mensaje enviado.");
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-[#060C26] via-[#331D51] to-[#6F4EF6]">
      {/* Imagen de fondo difuminada */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-md opacity-40 z-0">
        <Image
          src="/login1.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Formulario de solicitud de tutoría */}
      <div className="relative z-10 max-w-md w-full p-8 mt-16 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-white mt-4">Solicitud de Tutoría</h2>
        </div>
        <form id="dynamicForm" onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/search" />

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Correo Electrónico del Tutor:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="correo@destino.com"
              onChange={handleChangeEmail}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-opacity-30 text-white"
            />
          </div>
          <div>
            <label htmlFor="senderEmail" className="block text-sm font-medium text-white">Correo del Solicitante:</label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              required
              placeholder="correo@solicitante.com"
              onChange={handleChangeSenderEmail}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-opacity-30 text-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Nombres y Apellidos:</label>
            <input
              type="text"
              id="name"
              name="Nombres y Apellidos del solicitante"
              required
              placeholder="Su Nombre"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-opacity-30 text-white"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white">Asunto:</label>
            <input
              type="text"
              id="subject"
              name="Asunto"
              required
              placeholder="Asunto del mensaje"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-opacity-30 text-white"
            />
          </div>
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-white">Mensaje:</label>
            <textarea
              name="Mensaje"
              id="comments"
              required
              placeholder="Escriba sus comentarios aquí..."
              className="mt-1 p-2 w-full h-20 rounded-md border border-gray-300 bg-opacity-30 text-white"
            />
          </div>
          <div>
            <label htmlFor="datetime" className="block text-sm font-medium text-white">Fecha y Hora:</label>
            <input
              type="datetime-local"
              id="datetime"
              name="Fecha y hora de la tutoría"
              value={dateTime}
              onChange={handleChangeDateTime}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-opacity-30 text-white"
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-white">Adjuntar Imagen:</label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-opacity-30 text-white"
            />
          </div>
          <input type="submit" value="Enviar Solicitud" className="w-full p-2 mt-4 text-white bg-purple-600 rounded-md cursor-pointer" />
          {message && <div className="text-center text-green-500 mt-4">{message}</div>}
        </form>
        <div className="flex justify-center mt-4">
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
