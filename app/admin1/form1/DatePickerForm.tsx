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
    <div className="max-w-2xl mx-auto py-10 bg-gradient-to-r from-[#0D0E25] via-[#0D0E25] to-[#1C1E3A] p-8 rounded-lg shadow-2xl border border-gray-700">
      <h3 className="text-3xl font-bold mb-6 text-white text-center">Ingresar datos del tutor</h3>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">
            Nombres y Apellidos
          </label>
          <input
            type="text"
            className="mt-2 p-3 block w-full border-none bg-[#1E1E2D] text-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            placeholder="Nombres y Apellidos"
            {...register("name", { required: "Este campo es requerido." })}
          />
          {errors.name && <p className="text-red-400 mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">
            Correo del Solicitante a tutor
          </label>
          <input
            type="email"
            className="mt-2 p-3 block w-full border-none bg-[#1E1E2D] text-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            placeholder="Correo del Solicitante a tutor"
            {...register("email", {
              required: "Este campo es requerido.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Por favor, ingrese un correo electrónico válido."
              }
            })}
          />
          {errors.email && <p className="text-red-400 mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">
            UserID
          </label>
          <input
            type="text"
            className="mt-2 p-3 block w-full border-none bg-[#1E1E2D] text-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            placeholder="UserID"
            {...register("userId", { required: "Este campo es requerido." })}
          />
          {errors.userId && <p className="text-red-400 mt-1">{errors.userId.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] text-white font-semibold rounded-lg shadow-md hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] transition-all"
        >
        Añadir Tutor
        </button>
      </form>

      {status && <p className="mt-6 text-green-400 font-semibold text-center">{status}</p>}
    </div>
  );
};

export default TutoringRequestPage;
