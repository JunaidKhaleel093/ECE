import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/18264/18264664.png",
    title: "10 Year Warranty",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2163/2163350.png",
    title: "1000+ Homes Delivered",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055666.png",
    title: "Personalised Designs",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/10003/10003991.png",
    title: "1000+ Catalogues",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/781/781831.png",
    title: "No Hidden Costs",
  },
];

export default function WhyChooseUs() {
  const scrollRef = useRef(null); 

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      scrollRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <section className="py-16 bg-[#edf3e4]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#8d6c3d] mb-6">Why Choose Us</h2>
        <p className="text-gray-700 mb-8">
          At ECE Interiors, we believe in crafting spaces that reflect your
          personality and lifestyle. Here's why you should choose us:
        </p>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)} 
            className="absolute left-0 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-scroll space-x-6 scrollbar-hide"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)} 
            className="absolute right-0 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
