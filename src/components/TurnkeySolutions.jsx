import React from "react";

const services = [
  { name: "Modular Kitchen", icon: "https://cdn-icons-png.flaticon.com/128/1698/1698742.png" },
  { name: "Space Saving Furniture", icon: "./images/Wardrobe.png" },
  { name: "TV Units", icon: "./images/TV.png" },
  { name: "Storage and Wardrobe", icon: "./images/Ward.png" },
  { name: "Crockery Units", icon: "./images/Units.png" },
  { name: "False Ceiling", icon: "./images/Kitchen.png" },
  { name: "Lights", icon: "./images/Lights.png" },
  { name: "Wall Paper", icon: "./images/Paper.png" },
  { name: "Painting", icon: "./images/Paint.png" },
  { name: "Carpentry", icon: "./images/Carpenter.png" },
  { name: "Project Management", icon: "./images/Project.png" },
  { name: "Material Selection", icon: "https://cdn-icons-png.flaticon.com/128/8931/8931271.png" },
  { name: "Bathroom", icon: "./images/Bath.png" },
  { name: "Kids Bedroom", icon: "https://cdn-icons-png.flaticon.com/128/7643/7643457.png" },
  { name: "Furniture Design", icon: "https://cdn-icons-png.flaticon.com/128/2590/2590525.png" },
];

export default function TurnkeySolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Turnkey Interior Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Interior Designing Services In India
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-lg font-medium text-gray-800">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
