import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    title: "Luxury Interior Design",
    description: "Creating spaces that inspire and elevate your lifestyle",
  },
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    title: "Modern Living Spaces",
    description: "Where comfort meets contemporary design",
  },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="h-screen w-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="flex flex-col items-center justify-center h-full text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">{slides[currentIndex].title}</h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl">{slides[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </div>
    </div>
  );
}
