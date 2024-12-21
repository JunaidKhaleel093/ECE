import React, { useEffect } from "react";

const examples = [
  {
    title: "Structural Overhaul",
    image: "https://cdn.pixabay.com/photo/2020/03/12/13/39/engineer-4925118_640.jpg",
    description: "Revamp your space with expert structural improvements for enhanced safety and design.",
  },
  {
    title: "Modernization Services",
    image: "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
    description: "Update your interiors with contemporary designs and cutting-edge features.",
  },
  {
    title: "Home Revitalization",
    image: "https://cdn.pixabay.com/photo/2017/02/11/10/02/painting-2057373_640.jpg",
    description: "Breathe new life into your home with renovations that improve both style and function.",
  },
  {
    title: "Interior Redesign",
    image: "https://cdn.pixabay.com/photo/2017/08/06/15/31/door-2593482_640.jpg",
    description: "Transform your interiors with creative redesigns that match modern aesthetics and practical needs",
  },
];

export default function SpacePlanning() {
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

        <h1 className="text-5xl font-bold text-center mb-8">Remodeling Experts</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Transform your home with our specialized remodeling services, tailored to enhance both aesthetics and practicality.
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
          <h2 className="text-3xl font-bold mb-6">Our Remodeling Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Floor Plan Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Bespoke Cabinetry</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Finish Selection</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Lighting Solutions</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Style Consultation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Budget Planning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
