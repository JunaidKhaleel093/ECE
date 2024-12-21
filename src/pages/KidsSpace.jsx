import React, { useEffect } from "react";


const projects = [
  {
    title: "Play Zones",
    image: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBsYXklMjBab25lcyUyMGtpZHN8ZW58MHx8MHx8fDA%3D",
    description: "A creative and safe space filled with engaging toys and games for children to explore and enjoy.",
    path: "/services/Archi",
  },
  {
    title: "Learning Corners",
    image: "https://images.unsplash.com/photo-1599081786482-02c47bc7befc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExlYXJuaW5nJTIwQ29ybmVycyUyMGtpZHN8ZW58MHx8MHx8fDA%3D",
    description: "Interactive areas designed for educational play with books, puzzles, and activity stations to stimulate young minds.",
  },
  {
    title: "Resting Nooks",
    image: "https://images.unsplash.com/photo-1617817376017-3de702f0c35f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBsYXklMjBab25lcyUyMGtpZHN8ZW58MHx8MHx8fDA%3D",
    description: "Cozy corners equipped with soft seating and calming elements where kids can relax and unwind.",
  },
  {
    title: "Art Stations",
    image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEFydCUyMHN0YXRpb25zJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Colorful and fun areas where children can express their creativity through drawing, painting, and crafting.",
  },
];

export default function KidsSpace() {

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

        <h1 className="text-5xl font-bold text-center mb-8"> The Little Explorer's Zone</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        A fun-filled space designed for young minds to explore, learn, and play in a safe and vibrant environment.
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
