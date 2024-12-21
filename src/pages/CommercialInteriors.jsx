import React, { useEffect } from "react";


const projects = [
  {
    title: "Tech Startup Office",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    description: "Modern workspace promoting collaboration",
  },
  {
    title: "Luxury Retail Store",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    description: "High-end retail space with premium finishes",
  },
  {
    title: "Fine Dining Restaurant",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    description: "Elegant dining environment with ambient lighting",
  },
  {
    title: "Boutique Hotel",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    description: "Luxurious hospitality design",
  },
];

export default function CommercialInteriors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-r from-[#dcdcdc] to-[#a9a9a9]">
      <div className="container mx-auto px-4">

        <h1 className="text-5xl font-bold text-center mb-8">
          Commercial Interior Projects
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover our portfolio of innovative commercial interior design projects in Bangalore.
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
