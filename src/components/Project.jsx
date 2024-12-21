import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    category: "Serene Living Spaces",
    path: "/projects/home-interiors",
    items: [
      { title: "Smart Home Designs", image: "https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_640.jpg",path: "/interiors/livingroom"},
      { title: "Outdoor Living Spaces", image: "https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_640.jpg" ,path: "/interiors/outdoor"},
      { title: "Entertainment Areas", image: "https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_640.jpg" ,path: "/interiors/entertainment"},
      { title: "Kid's Spaces", image: "https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272_640.jpg" ,path: "/interiors/kids"},
    ],
  },
  {
    category: "Innovative Commercial Designs",
    path: "/projects/commercial-interiors",
    items: [
      { title: "Corporate Interior Design", image: "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg" ,path: "/commercial/corporate"},
      { title: "Restaurant Interior Design", image: "https://cdn.pixabay.com/photo/2015/09/21/09/54/villa-cortine-palace-949550_640.jpg" ,path: "/commercial/restaurant"},
      { title: "Café Lounge Design", image: "https://cdn.pixabay.com/photo/2021/03/31/08/47/hotel-6138965_640.jpg" ,path: "/commercial/cafe"},
      { title: "Hotel Lobby Interior", image: "https://cdn.pixabay.com/photo/2019/05/12/20/58/hotel-4199113_640.jpg" ,path: "/commercial/hotel"},
    ],
  },
  {
    category: "Efficient and Stylish Studios",
    path: "/projects/Homeoffice",
    items: [
      { title: "Scholar's Sanctuary", image: "https://cdn.pixabay.com/photo/2022/05/24/04/38/study-7217599_640.jpg" ,path: "/homeoffice/study-room"},
      { title: "Visionary Vault", image: "https://cdn.pixabay.com/photo/2020/07/05/17/53/male-5373916_640.jpg" ,path: "/homeoffice/workspace"},
    ],
  },
  {
    category: "Luxury Interior Design",
    path: "/projects/luxury-interiors",
    items: [
      { title: "Luxury Living Room Interior Design", image: "https://cdn.pixabay.com/photo/2014/02/25/22/06/staircase-274614_640.jpg" ,path: "/luxury/livingroom"},
      { title: "Luxury Bedroom Interior Design", image: "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_640.jpg" ,path: "/luxury/lux-bedroom"},
      { title: "Luxury Kitchen Interior Design", image: "https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_640.jpg" ,path: "/luxury/lux-kitchen"},
      { title: "Luxury Balcony Interior Design", image: "https://cdn.pixabay.com/photo/2017/04/03/21/42/terrace-2199640_640.jpg" ,path: "/luxury/balcony"},
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-20">
  <div className="container mx-auto px-4">

     {/* Serene Living Spaces Interiors Section */}

    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">Modern Homescapes.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects[0].items.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Innovative Commercial Designs Section */}

    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">Elite Business Interiors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects[1].items.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

        {/* Luxury Interiors Section */}

        <div className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">Luxury Interior Designers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects[3].items.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Efficient and Stylish Studios Section */}

    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-12">Inspired Workspaces.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects[2].items.map((item, index) => (
          <Link to={item.path}key={index}>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
