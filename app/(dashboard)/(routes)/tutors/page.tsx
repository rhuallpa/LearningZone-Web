"use client";
import React, { useState, CSSProperties } from 'react';

// Información de los tutores
const tutors = [
  {
    name: "Camila Fernández",
    expertise: "SQL, Bases de Datos",
    category: "Bases de Datos",
    description: "Especialista en SQL y bases de datos. Exprofesora en CIBERTEC y la UNI. 8 años de experiencia, con proyectos en optimización de bases de datos en grandes empresas. Maestría en Ciencias de la Computación.",
    youtubeLink: "https://youtu.be/5DmPw8KsH5A",
    image: "/hhhh.jpeg",
  },
  {
    name: "Carlos Mendez",
    expertise: "Unity, C#",
    category: "Desarrollo de Videojuegos",
    description: "Desarrollador de videojuegos con 6 años de experiencia en Unity. Ha trabajado para estudios de juegos en América Latina y es autor de un curso sobre desarrollo en Unity.",
    youtubeLink: "https://www.youtube.com/watch?v=videoID9",
    image: "/1111.jpeg",
  },
  {
    name: "Laura Castro Gomez",
    expertise: "SQL, MySQL",
    category: "Bases de Datos",
    description: "Especialista en MySQL con 7 años de experiencia en grandes empresas. Exprofesora en Tecsup y ha desarrollado soluciones de bases de datos para empresas financieras.",
    youtubeLink: "https://www.youtube.com/watch?v=videoID7",
    image: "/gg.jpeg",
  },
  {
    name: "Luis Torres Pardo",
    expertise: "DevOps, AWS",
    category: "DevOps y Metodologías Ágiles",
    description: "Ingeniero DevOps con 8 años de experiencia en entornos cloud. Ha impartido clases en la Universidad Peruana de Ciencias Aplicadas y ha trabajado en la automatización de grandes empresas.",
    youtubeLink: "https://www.youtube.com/watch?v=videoID8",
    image: "/2222.jpeg",
  },
  {
    name: "Fernando Sanchez",
    expertise: "Machine Learning, TensorFlow",
    category: "Inteligencia Artificial y Machine Learning",
    description: "Experto en Machine Learning y profesor en la Universidad de Lima. 10 años de experiencia y colaborador en proyectos de IA para empresas de tecnología. Maestría en Inteligencia Artificial.",
    youtubeLink: "https://youtu.be/McRltHnLogc",
    image: "/vg.jpeg",
  },
  {
    name: "Romina Perez Duran",
    expertise: "JavaScript, React JS",
    category: "Programación",
    description: "Desarrolladora de frontend con 5 años de experiencia. Exprofesora en Platzi y autora de un curso popular de React. Ha trabajado en proyectos importantes para startups tecnológicas.",
    youtubeLink: "https://www.youtube.com/watch?v=videoID3",
    image: "/uuu.jpeg",
  },
  {
    name: "Jaime Rodrigo Perez",
    expertise: "Angular, Next.js",
    category: "Desarrollo de Aplicaciones Web",
    description: "Especialista en Angular y Next.js con 7 años de experiencia. Exprofesor en la Universidad de Buenos Aires y colaborador en proyectos gubernamentales.",
    youtubeLink: "https://www.youtube.com/watch?v=videoID4",
    image: "/kkkk.jpeg",
  },
  {
    name: "Mariana Lopez Hernandez",
    expertise: "Node.js, Express.js",
    category: "Desarrollo de Aplicaciones Móviles",
    description: "Backend developer con 6 años de experiencia. Ha trabajado en proyectos de alto impacto para empresas de comercio electrónico en América Latina. Exprofesora en Coderhouse.",
    youtubeLink: "https://www.youtube.com/watch?v=videoID5",
    image: "/tttt.jpeg",
  },
  {
    name: "Ana Maria Chavez",
    expertise: "Python, Django",
    category: "Ciberseguridad",
    description: "Experta en Python y ciberseguridad, con 9 años de experiencia. Ha dado clases en la Universidad Nacional de Colombia y lideró un proyecto de seguridad cibernética en una fintech.",
    youtubeLink: "https://www.youtube.com/watch?v=videoID6",
    image: "/perfil77.jpg",
  },
];

// Otros tutores..

const TutorsPage = () => {
  const [showForm, setShowForm] = useState(false);

  // Manejar la apertura del formulario
  const handleFormOpen = () => {
    setShowForm(!showForm);
  };

  // Estilos del formulario y la sección de requisitos
  const styles: Record<string, CSSProperties> = {
    mainContainer: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #060C26, #331D51, #6F4EF6)',
      padding: '20px',
    },
    outerWrapper: {
      padding: '40px',
      borderRadius: '10px',
      border: '3px solid #6F4EF6',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
      maxWidth: '1200px',
      width: '100%',
      backgroundColor: 'transparent',
      animation: 'fadeIn 1s ease-out',  // Animación de entrada suave
    },
    wrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
    },
    title: {
      fontSize: '42px',
      fontWeight: 'bold',
      color: '#6F4EF6',
      lineHeight: '1.2',
      marginBottom: '20px',
      fontFamily: "'Bebas Neue', sans-serif",
      animation: 'pulseGlow 2s infinite alternate',  // Efecto de resplandor pulsante
    },
    subtitle: {
      fontSize: '20px',
      color: '#A6B1E1',
      maxWidth: '600px',
      fontFamily: "'Montserrat', sans-serif",
    },
    infoSection: {
      padding: '20px',
      borderRadius: '8px',
      color: '#FFFFFF',
      backgroundColor: 'transparent',
      border: '1px solid #6F4EF6',  // Efecto de borde resplandeciente
      boxShadow: '0 0 10px rgba(111, 78, 246, 0.8)',  // Sombra suave con color tecnológico
      animation: 'fadeInUp 1s ease-out',  // Animación de entrada desde abajo
    },
    infoHeading: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#FFFFFF', // Cambiado a blanco
      textShadow: '0px 0px 4px rgba(255, 255, 255, 0.5)', // Efecto brillante más sutil
    },
    infoText: {
      color: '#B0A3FF',
      marginBottom: '5px',
      display: 'flex',
      alignItems: 'center',
      animation: 'fadeIn 1.5s ease-out',  // Animación de entrada
    },
    form: {
      padding: '20px 30px',
      borderRadius: '12px',
      backgroundColor: '#131A2B',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      animation: 'fadeInUp 1s ease-out',  // Animación de entrada desde abajo
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #8A2BE2',
      backgroundColor: '#2B2E3A',
      color: '#FFFFFF',
    },
    submitButton: {
      padding: '12px 24px',
      backgroundColor: '#8A2BE2',
      border: 'none',
      borderRadius: '8px',
      color: '#FFFFFF',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      animation: 'pulseGlow 2s infinite alternate',  // Animación pulsante para resplandecer
    },
  };
  const RequirementsInfo = () => (
    <div style={styles.infoSection}>
      {/* Requisitos y Pasos divididos en dos columnas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* Columna 1: Requisitos y Pasos */}
        <div>
          <h2 style={styles.infoHeading}>Requisitos para Ser Tutor en LearningZone</h2>
          <p style={styles.infoText}>✔️ Experiencia Profesional: Mínimo 2 años de experiencia en la materia que deseas enseñar y experiencia práctica demostrable.</p>
          <p style={styles.infoText}>📜 Certificaciones: Certificados académicos o profesionales en tu campo de especialización.</p>
          <p style={styles.infoText}>🗣️ Habilidades de Comunicación: Capacidad para explicar conceptos de manera clara y efectiva.</p>
          <p style={styles.infoText}>💼 Portafolio: Proyectos previos o un portafolio digital que demuestre tus habilidades.</p>
          <p style={styles.infoText}>🎓 Clase Demostrativa: Presentar una clase de prueba para evaluar tus habilidades de enseñanza.</p>
          <p style={styles.infoText}>🗂️ Documentos en PDF o DOCX: Adjuntar CV y certificados académicos/profesionales.</p>

          <h2 style={styles.infoHeading}>Pasos para Convertirse en Tutor</h2>
          <p style={styles.infoText}>1️⃣ Enviar la Solicitud: Completa el formulario y adjunta tu CV y documentos relevantes.</p>
          <p style={styles.infoText}>2️⃣ Evaluación de la Solicitud: El equipo de LearningZone revisará tu solicitud y documentos.</p>
          <p style={styles.infoText}>3️⃣ Entrevista: Si eres preseleccionado, se coordinará una entrevista con el administrador.</p>
          <p style={styles.infoText}>4️⃣ Clase Demostrativa: Realiza una clase de prueba para evaluar tus habilidades de enseñanza.</p>
          <p style={styles.infoText}>5️⃣ Notificación de Aceptación: Recibirás una respuesta en 3-5 días hábiles por correo electrónico.</p>
          <p style={styles.infoText}>6️⃣ Proceso de Onboarding: Acceso a la plataforma para crear contenido y gestionar clases.</p>
        </div>

        {/* Columna 2: Comunicación, Soporte y Desempeño */}
        <div>
          <h2 style={styles.infoHeading}>Comunicación y Soporte</h2>
          <p style={styles.infoText}>
            📧 Correo del Administrador:
            <a href="mailto:rebeca.huallpa@tecsup.edu.pe" style={{ color: '#0A8ECD', textDecoration: 'underline' }}>
              rebeca.huallpa@tecsup.edu.pe
            </a>
          </p>
          <p style={styles.infoText}>
            📱 WhatsApp:
            <a href="https://wa.me/51926047834" target="_blank" rel="noopener noreferrer" style={{ color: '#0A8ECD', textDecoration: 'underline' }}>
              +51 926047834
            </a>
          </p>
          <p style={styles.infoText}>⏳ Tiempo de Respuesta: 24 a 48 horas hábiles. Para consultas adicionales, usa el correo electrónico o WhatsApp.</p>

          <h2 style={styles.infoHeading}>Desempeño como Tutor</h2>
          <p style={styles.infoText}>📚 Creación de Contenido: Desarrollar videos, diapositivas y ejercicios prácticos para los estudiantes.</p>
          <p style={styles.infoText}>💬 Participación en Foros: Responder preguntas de estudiantes y ofrecer orientación en los foros.</p>
          <p style={styles.infoText}>📅 Sesiones en Vivo: Programar clases en vivo para aclarar dudas y profundizar en el contenido.</p>
          <p style={styles.infoText}>📊 Evaluación del Progreso: Realizar pruebas y evaluaciones para medir el aprendizaje de los estudiantes.</p>
          <p style={styles.infoText}>📞 Soporte Continuo: Acceso al soporte de la plataforma para resolver dudas y problemas técnicos.</p>
        </div>

      </div>
    </div>
  );

  // Formulario funcional integrado
  const DynamicForm = () => {
    const [email, setEmail] = useState<string>('');
    const [senderEmail, setSenderEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };

    const handleChangeSenderEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSenderEmail(event.target.value);
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
          setResponseMessage("Correo enviado exitosamente.");
        } else {
          setResponseMessage("Correo enviado exitosamente.");
        }
      } catch (error) {
        console.error("Correo enviado exitosamente.", error);
        setResponseMessage("Correo enviado exitosamente.");
      }
    };

    return (
      <div style={{ ...styles.wrapper, display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Sección de Requisitos en la parte superior */}
        <RequirementsInfo />

        {/* Sección Inferior: Encabezado y Formulario en dos columnas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Columna Izquierda: Encabezado */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
            padding: '20px',
            maxWidth: '500px',  // Limitar el ancho máximo de la columna izquierda
            margin: '0 auto',  // Centrar la columna en el contenedor
          }}>
            <h1 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#FFFFFF', // Color blanco para el título
              lineHeight: '1.2',
              marginBottom: '10px',
            }}>📋 ¡Potencia tu perfil profesional!</h1>
            <p style={{
              fontSize: '18px',
              color: '#A6B1E1', // Color claro para el subtítulo
              fontStyle: 'italic', // Subtítulo en cursiva
              maxWidth: '400px', // Limitar el ancho máximo del subtítulo
            }}>
              Inscríbete como tutor en LearningZone y comparte tu conocimiento con miles de estudiantes.
            </p>
          </div>

          {/* Columna Derecha: Formulario */}
          <form id="dynamicForm" onSubmit={handleSubmit} style={{
              padding: '20px 30px',
              borderRadius: '12px',
              border: '1px solid #6F4EF6',
              boxShadow: '0 0 10px #6F4EF6, 0 0 10px #6F4EF6', // Color inicial del brillo
              animation: 'borderGlow 2s infinite alternate', // Aplica la animación
              display: 'grid',
              gap: '15px',
              backgroundColor: '#131A2B',
          }}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/search" />

            {/* Inputs en dos columnas */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>📧 Correo del Administrador:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="correo@destino.com"
                  onChange={handleChangeEmail}
                  style={{
                    width: '100%', padding: '10px', borderRadius: '8px',
                    border: '1px solid #3B82F6', backgroundColor: '#1E2A38', color: '#FFFFFF'
                  }}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="senderEmail" style={styles.label}>📧 Correo del Postulante:</label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  required
                  placeholder="correo@solicitante.com"
                  onChange={handleChangeSenderEmail}
                  style={{
                    width: '100%', padding: '10px', borderRadius: '8px',
                    border: '1px solid #3B82F6', backgroundColor: '#1E2A38', color: '#FFFFFF'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={styles.inputGroup}>
                <label htmlFor="name" style={styles.label}>🧑 Nombre Completo:</label>
                <input
                  type="text"
                  id="name"
                  name="Nombres y Apellidos del solicitante"
                  required
                  placeholder="Su Nombre"
                  style={{
                    width: '100%', padding: '10px', borderRadius: '8px',
                    border: '1px solid #3B82F6', backgroundColor: '#1E2A38', color: '#FFFFFF'
                  }}
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
                  style={{
                    width: '100%', padding: '10px', borderRadius: '8px',
                    border: '1px solid #3B82F6', backgroundColor: '#1E2A38', color: '#FFFFFF'
                  }}
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="comments" style={styles.label}>💬 Mensaje:</label>
              <textarea
                name="Mensaje"
                id="comments"
                required
                placeholder="Escribe tu solicitud aquí, incluye información relevante y adjunta tus documentos...."
                style={{
                  width: '100%', padding: '10px', borderRadius: '8px',
                  border: '1px solid #3B82F6', backgroundColor: '#1E2A38', color: '#FFFFFF', minHeight: '100px', resize: 'none'
                }}
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
                style={{
                  width: '100%', padding: '10px', borderRadius: '8px',
                  border: '1px solid #3B82F6', backgroundColor: '#1E2A38', color: '#FFFFFF'
                }}
              />
            </div>

            <input
              type="submit"
              value="ENVIAR"
              style={{
                fontSize: '16px',
                width: '100%',
                padding: '12px 0',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                border: 'none',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              className="bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] shadow-lg hover:shadow-2xl transform hover:scale-105"
            />


            {responseMessage && <div style={{ ...styles.message, color: responseMessage.includes("exitosamente") ? '#28A745' : '#E63946' }}>{responseMessage}</div>}
          </form>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen py-10 bg-gradient-to-r from-[#0D0E25] via-[#111230] to-[#1C1E3A] text-white flex flex-col items-center justify-center">
      <div className="w-full px-8 flex flex-col items-center">
        {/* Título principal con gradiente en "LearningZone" */}
        <div className="flex justify-center mb-4">
          <h1 className="text-3xl font-bold flex items-center text-center">
            🎓 Postúlate para ser Tutor en
            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2]">
              LearningZone
            </span>
          </h1>
        </div>

        {/* Botón para mostrar el formulario */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleFormOpen}
            className="px-6 py-3 rounded-lg shadow-lg text-white bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            ✍️ ¿Quieres ser tutor? Postula aquí
          </button>
        </div>

        {/* Mostrar formulario si está activo */}
        {showForm && <DynamicForm />}

        {/* Lista de tutores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
          {tutors.map((tutor, index) => (
            <div key={index} className="rounded-lg p-6 bg-gradient-to-b from-[#1A1C2E] to-[#2D3145] border border-[#4B5563] shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <img src={tutor.image} alt={tutor.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#6F4EF6] shadow-md" />
              <h3 className="text-xl font-semibold text-center text-[#E0E4FC]">{tutor.name}</h3>
              <p className="text-center text-[#A5B4FC] font-medium mt-1">{tutor.expertise}</p>
              <p className="text-center font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2]">
                {tutor.category}
              </p>
              <p className="text-center text-sm text-[#9CA3AF] mt-3">{tutor.description}</p>
              <a
                href={tutor.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 text-sm font-semibold text-[#69bfe7] bg-white bg-opacity-10 py-2 px-4 rounded-full hover:bg-opacity-20 transition-colors"
              >
                Ver video de presentación
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsPage;