import React, { useEffect } from "react";


const projects = [
  {
    title: "Smart Lighting Systems",
    image: "https://cdn.pixabay.com/photo/2018/05/13/11/51/smart-home-3396205_640.jpg",
    description: "Modern design with clean lines and natural materials",
    path: "/services/Archi",
  },
  {
    title: "Automated Climate Control",
    image: "https://www.control4.com/files/large/b6e913e133eb76bbad99d796f6282ceb.jpg",
    description: "Smart space utilization in a city apartment",
  },
  {
    title: "Integrated Security Solutions",
    image: "https://oessystems.com/wp-content/uploads/2017/02/shutterstock_422090386-scaled.jpg",
    description: "High-end finishes and custom furniture",
  },
  {
    title: "Voice-Activated Technology",
    image: "https://tse1.mm.bing.net/th?id=OIP.iQi9y16sonYzapIsqPkiawHaDt&pid=Api&P=0&h=180",
    description: "Comfortable and functional family living spaces",
  },
];

export default function Livingroom() {
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

        <h1 className="text-5xl font-bold text-center mb-8">Smart Homes</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Smart homes use advanced technology to enhance comfort, security, and energy efficiency. Enjoy seamless control over lighting, climate, and security, all tailored to your lifestyle.
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
