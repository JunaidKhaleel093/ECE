import React, { useEffect } from "react";

const examples = [
  {
    title: "TaskSpace",
    image: "https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_640.jpg",
    description: "A sleek, organized space for focus and productivity.",
  },
  {
    title: "WorkSphere",
    image: "https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_640.jpg",
    description: "Designed for efficiency and professional success.",
  },
];

export default function Workspace() {

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
        <h1 className="text-5xl font-bold text-center mb-8">The Power Desk</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        A modern and functional workspace designed to boost productivity, encourage creativity, and provide a professional setting for achieving your goals.
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
