import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Residential Interior Design",
    image: "https://cdn.pixabay.com/photo/2017/03/28/12/16/tables-2181979_640.jpg",
    description: "Transform your home into a stunning living space",
    path: "/services/residential",
  },
  {
    title: "Commercial Design",
    image: "https://cdn.pixabay.com/photo/2015/04/20/06/43/office-730678_640.jpg",
    description: "Create impressive commercial spaces that inspire",
    path: "/services/commercial",
  },
  {
    title: "Renovation & Remodeling",
    image: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_640.jpg",
    description: "Optimize your space for maximum functionality",
    path: "/services/space-planning",
  },
  {
    title: "Architects & Interior Designers",
    image: "https://cdn.pixabay.com/photo/2021/12/05/15/37/building-6848037_640.jpg",
    description: "Optimize your space for maximum functionality",
    path: "/services/Archi",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Interior Designing Services In India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
