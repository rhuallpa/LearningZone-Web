"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  userId: string;
}

const TutoringRequestPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = React.useState("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setStatus("El Usuario se añadió como tutor con éxito.");
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h3 className="text-3xl font-bold mb-6">Ingresar datos del tutor</h3>
      <form
        className="mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombres y Apellidos
          </label>
          <input
            type="text"
          
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="Nombres y Apellidos"
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && <p className="text-red-500">Este campo es requerido.</p>}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Correo del Solicitante a tutor:
          </label>
          <input
            type="email"
            
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="Correo del Solicitante a tutor"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        {errors.email && <p className="text-red-500">Por favor, ingrese un correo electrónico válido.</p>}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            UserID
          </label>
          <input
            type="text"
            
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="UserID"
            {...register("userId", { required: true })}
          />
        </div>
        {errors.userId && <p className="text-red-500">Este campo es requerido.</p>}
        
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md shadow-sm"
        >
          Confirmar Añadir Tutor
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default TutoringRequestPage;
