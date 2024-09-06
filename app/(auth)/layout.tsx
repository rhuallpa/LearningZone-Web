import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-between h-screen bg-gradient-to-r from-[#060C26] via-[#331D51] to-[#6F4EF6]">
      {/* Imagen de fondo difuminada */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-md opacity-40 z-0">
        <Image
          src="/login1.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Sección de la imagen del logo a la izquierda */}
      <div className="relative z-10 flex-1 flex justify-center items-center">
        <div className="text-white space-y-4 text-center">
          <Image
            src="/logo5.svg"
            alt="Logo"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold">Bienvenido a Learning Zone</h1>
          <p className="text-lg max-w-lg mx-auto">
            ¡Nos alegra tenerte aquí! En Learning Zone, encontrarás cursos y tutorías especializadas en programación y otras disciplinas relacionadas. Ya sea que estés comenzando tu viaje en el mundo de la tecnología o que estés buscando mejorar tus habilidades, estamos aquí para ayudarte a alcanzar tus metas.
          </p>
        </div>
      </div>
      
      {/* Formulario de inicio de sesión a la derecha */}
      <div className="relative z-10 flex-1 max-w-md p-8 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Bienvenido de vuelta</h2>
          <p className="text-sm text-white">Nos alegra verte otra vez :)</p>
        </div>
        <div className="flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
