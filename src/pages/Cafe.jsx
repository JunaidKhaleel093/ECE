import React, { useEffect } from "react";


const projects = [
  {
    title: "Brew Bar",
    image: "https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg",
    description: "A cozy spot for freshly brewed coffee and relaxing moments.",
  },
  {
    title: "Café Nook",
    image: "https://cdn.pixabay.com/photo/2022/03/13/15/45/coffee-7066308_640.jpg",
    description: "Your favorite corner to enjoy premium coffee and warm conversations.",
  },
  {
    title: "Espresso Haven",
    image: "https://cdn.pixabay.com/photo/2017/08/02/00/05/places-2568876_640.jpg",
    description: "Where every cup of espresso is an experience to savor.",
  },
  {
    title: "Java Spot",
    image: "https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_640.jpg",
    description: "A perfect place for coffee lovers to unwind with a rich brew.",
  },
];

export default function Cafe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const handleBack = () => {
    window.history.back();
  }; 
  return (
    <div className="py-20 bg-gradient-to-r from-[#dcdcdc] to-[#a9a9a9]">
      <div className="container mx-auto px-4">
      <button
          onClick={handleBack}
          className="text-black px-4 py-2 rounded-md mb-4 absolute top-8 left-2 "
        >
          <span className="text-2xl">←</span>
        </button>

        <h1 className="text-5xl font-bold text-center mb-8">
        Coffee Corner
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        A cozy spot to enjoy freshly brewed coffee, delicious pastries, and a relaxing atmosphere. Perfect for your daily caffeine fix.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
