import React from "react";
import { FaCity } from "react-icons/fa"; 

const areas = [
  { name: "Karnataka", icon: <FaCity className="text-red-600 text-3xl" /> },
  { name: "Hyderabad", icon: <FaCity className="text-red-600 text-3xl" /> },
  { name: "Kerala", icon: <FaCity className="text-red-600 text-3xl" /> },
];

export default function Location() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Serviceable Areas In India
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Interior Designing Services In India
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {areas.map((area, index) => (
            <li
              key={index}
              className="flex flex-col items-center space-y-2 text-gray-800"
            >
              {area.icon}
              <span className="text-lg font-medium">{area.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
