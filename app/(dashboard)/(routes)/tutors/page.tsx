// app/routes/tutors/page.tsx

import React from 'react';

const tutors = [
  {
    name: "Romina Perez Duran",
    expertise: "JavaScript, React JS",
    rating: 4.7,
    students: "2,010,192",
    courses: 7,
    image: "/perfil99.jpg",
  },
  {
    name: "Jaime Rodrigo Perez",
    expertise: "JavaScript, React JS",
    rating: 4.7,
    students: "2,010,192",
    courses: 7,
    image: "/perfilvaron1.jpg",
  },
  {
    name: "Jose Ramon Garcia",
    expertise: "Angular, Next.js",
    rating: 4.6,
    students: "3,069,273",
    courses: 62,
    image: "/perfilvaron2.jpg",
  },
  {
    name: "Mariana Lopez Hernandez",
    expertise: "Node.js, Express.js",
    rating: 4.8,
    students: "1,523,781",
    courses: 15,
    image: "/perfil11.jpg",
  },
  {
    name: "Fernando Sanchez Ruiz",
    expertise: "Vue.js, Nuxt.js",
    rating: 4.5,
    students: "3,012,872",
    courses: 20,
    image: "/perfilvaron3.jpg",
  },
  {
    name: "Ana Maria Chavez",
    expertise: "Python, Django",
    rating: 4.9,
    students: "2,110,293",
    courses: 25,
    image: "/perfil77.jpg",
  },
];

const TutorsPage = () => {
  return (
    <section className="min-h-screen py-10 bg-[#13161C] text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Nuestros Tutores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4 shadow-sm bg-[#1A1D24] relative">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{tutor.name}</h3>
              <p className="text-center text-gray-400">{tutor.expertise}</p>
              <div className="flex justify-center items-center text-yellow-500 mt-2">
                <span className="mr-1">{tutor.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                </svg>
              </div>
              <p className="text-center text-sm text-gray-500">
                {tutor.students} estudiantes
              </p>
              <p className="text-center text-sm text-gray-500">
                {tutor.courses} cursos
              </p>
              <button className="absolute inset-x-0 bottom-4 mx-auto text-sm font-semibold text-[#0A8ECD] bg-white bg-opacity-10 backdrop-blur-md py-2 px-4 rounded-full hover:bg-opacity-20 transition-colors">
                Ver más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsPage;
