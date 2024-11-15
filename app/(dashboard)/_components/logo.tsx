import Image from "next/image";

export const Logo = () => {
  return (
    <div className="bg-gradient-to-r from-[#0D0E25] via-[#0D0E25] to-[#0D0E25] flex justify-center items-center h-15 w-full">
      <div className="flex justify-center items-center p-0 m-0">
        <Image
          alt="Learning Zone Logo"
          src="/logo5.svg"
          width={170}  // Ajusta el ancho del logo
          height={170} // Ajusta la altura del logo
          className="object-contain"
        />
      </div>
    </div>
  );
};
