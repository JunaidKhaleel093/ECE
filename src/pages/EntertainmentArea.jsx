import React, { useEffect } from "react";


const projects = [
  {
    title: "Media Lounge",
    image: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_640.jpg",
    description: "A cozy space for watching movies and shows, equipped with comfy seating and a state-of-the-art sound system.",
    path: "/services/Archi",
  },
  {
    title: "Game Zone",
    image: "http://www.365playground.com/wp-content/uploads/2015/12/gamezone-view1-final-highres.jpg",
    description: "A fun-filled area with gaming consoles, arcade machines, and interactive entertainment options for all ages.",
  },
  {
    title: "Music & Performance Area",
    image: "https://cdn.pixabay.com/photo/2014/11/11/15/24/gym-526996_640.jpg",
    description: "A dedicated space for live performances or music sessions, featuring acoustically optimized interiors.",
  },
  {
    title: "Interactive Zone",
    image: "https://www.baumannstudios.com/wp-content/uploads/2015/10/02-Brainlab-Interactive-Zone.jpg",
    description: "A dynamic space with virtual reality setups, touch-screen entertainment, and immersive experiences for guests to explore.",
  },
];

export default function Kitchen() {
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

        <h1 className="text-5xl font-bold text-center mb-8">Amusement Corner</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        A vibrant space filled with fun activities, games, and interactive experiences for all ages to enjoy.
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
