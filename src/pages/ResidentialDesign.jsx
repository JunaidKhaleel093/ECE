import React, { useEffect } from "react";


const examples = [
  {
    title: "Modern Living Room",
    image: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg",
    description: "Contemporary design with clean lines and neutral palette",
  },
  {
    title: "Modern Bedroom Suite",
    image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg",
    description: "Elegant master bedroom with custom furnishings",
  },
  {
    title: "Designer Kitchen",
    image: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_640.jpg",
    description: "Modern kitchen with premium appliances and finishes",
  },
  {
    title: "Stylish Bathroom",
    image: "https://cdn.pixabay.com/photo/2017/02/07/18/24/bathroom-2046702_640.jpg",
    description: "Luxurious bathroom with spa-like amenities",
  },
];

export default function ResidentialDesign() {
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
        <h1 className="text-5xl font-bold text-center mb-8">Residential Interior Design</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Transform your home into a stunning living space with our expert residential interior design services.
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
          <h2 className="text-3xl font-bold mb-6">Our Residential Design Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Space Planning</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Custom Furniture Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Color Consultation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Lighting Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Material Selection</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Project Management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
