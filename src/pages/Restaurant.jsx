import React, { useEffect } from "react";


const projects = [
  {
    title: "Dining Lounges",
    image: "https://cdn.pixabay.com/photo/2019/08/10/22/34/table-4397860_640.jpg",
    description: "Relax and enjoy delicious meals in a cozy, stylish environment.",
  },
  {
    title: "Snack Bars",
    image: "https://cdn.pixabay.com/photo/2022/05/12/17/05/hamburger-7191900_640.jpg",
    description: "Quick bites and refreshing snacks in a casual setting",
  },
  {
    title: "Meal Zones",
    image: "https://cdn.pixabay.com/photo/2023/09/25/07/55/salad-8274421_640.jpg",
    description: "Perfect spots to grab a hearty meal and unwind",
  },
  {
    title: "Scoop Station",
    image: "https://cdn.pixabay.com/photo/2019/11/07/13/05/waffle-4608843_640.jpg",
    description: "The go-to place for creamy ice cream and sweet treats.",
  },
];

export default function Restaurant() {
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
        Food Lounges
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        A laid-back space to savor flavorful dishes and enjoy great company in a comfortable, stylish atmosphere.
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
