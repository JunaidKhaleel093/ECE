import React, { useEffect } from "react";

const examples = [
  {
    title: "Architecture",
    image: "https://cdn.pixabay.com/photo/2016/11/18/22/44/blueprints-1837238_640.jpg",
    description: "Maximizing space utilization in compact areas",
  },
  {
    title: "Planing",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg",
    description: "Short Description",
  },
  {
    title: "Interior Architecture For Home",
    image: "https://cdn.pixabay.com/photo/2023/09/11/06/03/building-8246152_640.jpg",
    description: "Interior architecture is the art of shaping a home's soul, where walls whisper stories and spaces embrace dreams",
  },
  {
    title: "Interior Architecture For Office",
    image: "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_640.jpg",
    description: "Interior architecture shapes the workplace, blending functionality and aesthetics to create an environment that inspires productivity, collaboration, and well-being",
  },
];

const Archi = () => {
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
          className="text-black px-4 py-2 rounded-md mb-4 absolute top-8 left-2"
        >
          <span className="text-2xl">←</span>
        </button>
        <h1 className="text-5xl font-bold text-center mb-8">Architectural Design</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Elevate your spaces with innovative architectural designs that blend aesthetics, functionality, and sustainability to perfection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {examples.map((example, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={example.image}
                alt={example.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white mb-2">{example.title}</h3>
                <p className="text-white/90">{example.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Our Architectural Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Site Analysis</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>3D Modeling</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Concept Development</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Building Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Structural Consultation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Permit Assistance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Archi;
