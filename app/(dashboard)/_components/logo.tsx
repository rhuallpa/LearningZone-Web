import Image from "next/image";

export const Logo = () => {
  return (
    <div className="bg-[#13161C] flex justify-center items-center h-15 w-full"> {/* Ajuste de altura */}
      <div className="bg-[#13161C] flex justify-center items-center p-0 m-0">
        <Image
          alt="Learning Zone Logo"
          src="/logo5.svg"
          width={150}  // Ajusta el ancho del logo
          height={150} // Ajusta la altura del logo
          className="object-contain"
        />
      </div>
    </div>
  );
}
