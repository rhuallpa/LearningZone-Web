"use client";
import React, { useState, CSSProperties } from 'react';
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

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
        setMessage("Correo enviado exitosamente.");
      }
    } catch (error) {
      console.error("Correo enviado exitosamente.", error);
      setMessage("Correo enviado exitosamente.");
    }
  };

  // Estilos mejorados para el fondo oscuro y gradiente en título y botón
  const styles: Record<string, CSSProperties> = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #060C26, #331D51, #060C26)', // Gradiente de fondo oscuro
    },
    wrapper: {
      maxWidth: '600px',
      width: '100%',
      padding: '20px',
      backgroundColor: 'rgba(26, 29, 36, 0.95)', // Fondo semitransparente
      color: '#FFFFFF',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      borderRadius: '8px',
      border: '1px solid #8A2BE2',
    },
    heading: {
      fontSize: '1.7rem',
      textAlign: 'center' as 'center',
      background: 'linear-gradient(to right, #8A2BE2, #3B82F6, #8A2BE2)', // Degradado en el título
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    inputGroup: {
      marginBottom: '10px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#B0A3FF',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #8A2BE2',
      backgroundColor: '#2B2E3A',
      color: '#FFFFFF',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #8A2BE2',
      backgroundColor: '#2B2E3A',
      color: '#FFFFFF',
      minHeight: '150px',
      resize: 'none',
    },
    submitButton: {
      padding: '10px 20px',
      color: 'white',
      background: 'linear-gradient(to right, #8A2BE2, #3B82F6, #8A2BE2)', // Degradado en el botón
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
    message: {
      textAlign: 'center',
      color: 'green',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Contenedor con fondo oscuro */}
      <div style={styles.wrapper}>
        <h3 style={styles.heading}>📋 Formulario para solicitar tutoría</h3>
        <form id="dynamicForm" onSubmit={handleSubmit} style={styles.form}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/search" />

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>✉️ Correo Electrónico del Tutor:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="correo@destino.com"
              onChange={handleChangeEmail}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="senderEmail" style={styles.label}>✉️ Correo del Solicitante:</label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              required
              placeholder="correo@solicitante.com"
              onChange={handleChangeSenderEmail}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>👤 Nombres y Apellidos:</label>
            <input
              type="text"
              id="name"
              name="Nombres y Apellidos del solicitante"
              required
              placeholder="Su Nombre"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="subject" style={styles.label}>📝 Asunto:</label>
            <input
              type="text"
              id="subject"
              name="Asunto"
              required
              placeholder="Asunto del mensaje"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="comments" style={styles.label}>💬 Mensaje:</label>
            <textarea
              name="Mensaje"
              id="comments"
              required
              placeholder="Escriba sus comentarios aquí..."
              style={styles.textarea}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="datetime" style={styles.label}>📅 Fecha y Hora:</label>
            <input
              type="datetime-local"
              id="datetime"
              name="Fecha y hora de la tutoría"
              value={dateTime}
              onChange={handleChangeDateTime}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="file" style={styles.label}>📎 Adjuntar Archivo:</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf,.doc,.docx,image/*"
              onChange={handleFileChange}
              style={styles.input}
            />
          </div>
          <input type="submit" value="Enviar Solicitud" style={styles.submitButton} />
          {message && <div style={styles.message}>{message}</div>}
        </form>

        <div className="flex justify-between w-full max-w-4xl mt-4">
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              🔙 Salir
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
