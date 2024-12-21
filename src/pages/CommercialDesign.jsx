import React, { useEffect } from "react";

const examples = [
  {
    title: "Modern Office Space",
    image: "https://cdn.pixabay.com/photo/2016/10/16/10/29/office-space-1744801_640.jpg",
    description: "Contemporary office design promoting productivity",
  },
  {
    title: "Retail Store Interior",
    image: "https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_640.jpg",
    description: "Innovative retail space maximizing customer experience",
  },
  {
    title: "Restaurant Design",
    image: "https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_640.jpg",
    description: "Atmospheric dining spaces that enhance the culinary experience",
  },
  {
    title: "Hotel Lobby",
    image: "https://cdn.pixabay.com/photo/2014/06/05/08/12/hotel-lobby-362568_640.jpg",
    description: "Luxurious hospitality spaces that welcome guests",
  },
];

export default function CommercialDesign() {
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
          Commercial Interior Design
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Create impressive commercial spaces that inspire productivity and success.
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
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {example.title}
                </h3>
                <p className="text-white/90">{example.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Our Commercial Design Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Office Space Planning</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Retail Store Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Restaurant Interiors</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Hotel Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Corporate Branding</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Workspace Solutions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
