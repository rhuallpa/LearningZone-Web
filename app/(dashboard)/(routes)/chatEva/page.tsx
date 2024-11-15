"use client";

import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { FaUser, FaRobot, FaComments } from "react-icons/fa";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-[#060C26] via-[#1C1E3A] to-[#331D51] text-white">
      <div className="max-w-2xl w-full flex flex-col bg-[#1e2027] rounded-lg shadow-lg overflow-hidden border border-gray-700">
        
        {/* Encabezado con título e ícono */}
        <header className="bg-dark-900 p-4 text-white text-center border-b border-gray-700 flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <FaComments className="text-2xl" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2]">
              Chat EVA
            </h1>
          </div>
          
          {/* Imagen Circular debajo del título */}
          <img
            src="/eva.jpeg"
            alt="Avatar Chat EVA"
            className="w-16 h-16 rounded-full object-cover mt-2"
          />
        </header>

        {/* Mensaje de bienvenida */}
        <div className="bg-[#282b35] p-4 text-center text-sm border-b border-gray-700">
          <p>
            ¡Bienvenido a Chat EVA! 😊🤖 Aquí podrás resolver todas tus dudas sobre Learning Zone. 🧠✨ Pregunta sobre los cursos disponibles 🎓, las categorías de aprendizaje 🗂️, cómo inscribirte ✍️, el proceso de selección de tutores 👩‍🏫👨‍🏫 y mucho más. Nuestro objetivo es brindarte respuestas claras y útiles para que aproveches al máximo todo lo que Learning Zone tiene para ofrecerte. 🚀 ¡Haz tu consulta y comienza a explorar nuevas oportunidades de aprendizaje! 🎯📖🙂
          </p>
        </div>

        {/* Ventana de mensajes */}
        <div className="flex-1 p-4 overflow-y-auto max-h-[70vh] space-y-4 bg-[#1e2027]">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start space-x-2 ${m.role === "assistant" ? "justify-start" : "justify-end"}`}
            >
              {m.role === "assistant" ? (
                <FaRobot className="text-blue-400 mt-1" />
              ) : (
                <FaUser className="text-purple-800 mt-1" />
              )}
              <div
                className={`p-3 rounded-lg w-full ${m.role === "assistant" ? "bg-[#1e2027] text-gray-300" : "bg-purple-700 text-white"}`}
              >
                <p className="text-sm">{m.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Formulario para enviar mensajes */}
        <form onSubmit={handleSubmit} className="bg-[#1e2027] p-4 flex items-center border-t border-gray-700">
          <textarea
            rows={2}
            value={input}
            onChange={handleInputChange}
            className="flex-1 bg-[#2b2e38] text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Escribe tu pregunta aquí..."
            autoFocus
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] text-white px-4 py-2 ml-2 rounded-md hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] transition-transform duration-200 transform hover:scale-105 shadow-lg"
            disabled={isLoading || !input}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}
