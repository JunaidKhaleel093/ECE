import React, { useEffect } from "react";


const projects = [
  {
    title: "Patio Lounges",
    image: "https://cdn.pixabay.com/photo/2014/01/30/01/57/outside-254716_640.jpg",
    description: "Comfortable outdoor seating areas perfect for relaxation and socializing.",
  },
  {
    title: "Dining Areas",
    image: "https://cdn.pixabay.com/photo/2019/10/02/09/35/cat-4520516_640.jpg",
    description: "Elegant outdoor dining setups for meals under the open sky.",
  },
  {
    title: "Garden Retreats",
    image: "https://cdn.pixabay.com/photo/2020/04/26/20/23/garden-5097089_640.jpg",
    description: "Peaceful garden spaces with greenery and seating for a tranquil escape.",
  },
  {
    title: "Outdoor Kitchens",
    image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/2/3/0/Moms-Landscaping-Design_Casby-Poolhouse_6.jpg.rend.hgtvcom.1280.1024.suffix/1454512508003.jpeg",
    description: "Fully equipped kitchens for cooking and entertaining outdoors.",
  },
];

export default function Bathroom() {
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

        <h1 className="text-5xl font-bold text-center mb-8">Open-Air Retreats</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Create serene, open-air spaces for relaxation and entertainment. 
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