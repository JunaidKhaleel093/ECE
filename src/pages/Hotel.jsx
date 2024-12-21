import React, { useEffect } from "react";


const projects = [
  {
    title: "Sunny View Hotel",
    image: "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg",
    description: "Modern workspace promoting collaboration",
  },
  {
    title: "The Grand Stay",
    image: "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_640.jpg",
    description: "A luxurious retreat offering comfort and elegance",
  },
  {
    title: "The Oasis Hotel",
    image: "https://cdn.pixabay.com/photo/2017/08/06/14/56/people-2593251_640.jpg",
    description: "A peaceful escape in the heart of the city, perfect for your next getaway",
  },
  {
    title: "The Riverstone Hotel",
    image: "https://cdn.pixabay.com/photo/2016/12/11/18/10/apartment-1899964_640.jpg",
    description: "Relax and unwind by the river with exceptional service and views",
  },
];

export default function Hotel() {
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
        The Grand Horizon Hotel
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Where luxury meets comfort, offering unforgettable experiences with stunning views, world-class amenities, and exceptional service.
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
