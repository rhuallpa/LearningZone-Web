const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Programación" },
        { name: "Desarrollo de Aplicaciones Web" },
        { name: "Desarrollo de Aplicaciones Móviles" },
        { name: "Bases de Datos" },
        { name: "Inteligencia Artificial y Machine Learning" },
        { name: "Ciberseguridad" },
        { name: "DevOps y Metodologías Ágiles" },
        { name: "Desarrollo de Videojuegos" },
        { name: "Software Testing y QA" },
        { name: "Tutorías Personalizadas" }  // Nueva categoría agregada
      ],
    });

    console.log("Éxito: categorías actualizadas en la base de datos");
  } catch (error) {
    console.log("Error al inicializar las categorías de la base de datos", error);
  } finally {
    await database.$disconnect();
  }
}

main();
