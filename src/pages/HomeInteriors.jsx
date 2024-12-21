import React, { useEffect } from "react";


const projects = [
  {
    title: "Contemporary Villa",
    image: "https://cdn.pixabay.com/photo/2022/07/09/05/23/house-7310177_640.jpg",
    description: "Modern design with clean lines and natural materials",
    path: "/services/Archi",
  },
  {
    title: "Urban Apartment",
    image: "https://cdn.pixabay.com/photo/2023/12/11/06/21/living-room-8442897_640.jpg",
    description: "Smart space utilization in a city apartment",
  },
  {
    title: "Luxury Penthouse",
    image: "https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_640.jpg",
    description: "High-end finishes and custom furniture",
  },
  {
    title: "Family Home",
    image: "https://cdn.pixabay.com/photo/2024/06/03/13/16/family-8806379_640.jpg",
    description: "Comfortable and functional family living spaces",
  },
];

export default function HomeInteriors() {

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

        <h1 className="text-5xl font-bold text-center mb-8">Home Interior Projects</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Explore our portfolio of stunning residential interior design projects in Bangalore.
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
