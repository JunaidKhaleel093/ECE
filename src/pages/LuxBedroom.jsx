import React, { useEffect } from "react";

const examples = [
  {
    title: "Lux Bedroom",
    image: "https://cdn.pixabay.com/photo/2016/08/16/03/56/bedroom-1597103_640.jpg",
    description: "A serene retreat blending luxury and comfort for restful nights",
  },
  {
    title: "Lux Bedroom",
    image: "https://cdn.pixabay.com/photo/2016/03/26/22/19/bedroom-1281580_640.jpg",
    description: "Sophistication meets tranquility in a beautifully crafted space.",
  },
];

export default function LuxBedroom() {
  
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

        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center mb-8">Luxury BedRoom</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        A haven of sophistication and comfort, designed with premium finishes, luxurious textures, and a serene ambiance for ultimate relaxation.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
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
      </div>
    </div>
  );
}
