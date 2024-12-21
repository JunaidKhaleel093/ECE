import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const aboutImages = {
  team: [
    {
      title: "Managing Director",
      name: "Mohammed Ayub Bin Khalid",
      image:
        "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734787558/P1_d5b2rj.png",
      bio: "Engineering from IIT College of Engineering Bangalore in 1995, A multi-talented person in A complete team player worked in various MNC's sectors and has enough professional experience in managing & Handling Turnkey projects of all sizes..",
    },
    {
      title: "Project Manager",
      name: "Irfan Khan",
      image:
        "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734787558/P2_g0j0wt.png",
      bio: "Jane is a certified project manager with a passion for delivering projects on time and within budget. She excels in team coordination and client communication.",
    },
  ],
  projects: [
    "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778722/GM-1_nje8j2.png",
    "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777492/Hyder-3_t8fepd.png",
    "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777254/GAP-1_wl5jif.png",
  ],
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#dcdcdc] to-[#a9a9a9]">
      <div className="container mx-auto px-4">
        <button
          onClick={handleBack}
          className="text-black px-4 py-2 rounded-md mb-4 absolute top-8 left-2"
        >
          <span className="text-2xl">←</span>
        </button>

        <h2 className="text-5xl font-bold text-center mb-8">About Us</h2>
        <p className="text-xl text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          At <u>ECE [EXCEL CONSTRUCTION & ELECTRICALS]</u>, we specialize in creating exceptional spaces that blend innovation, functionality, and aesthetics.
        </p>
        <ul className="text-lg text-gray-600 list-disc list-inside mb-12 max-w-4xl mx-auto">
          <li>We are a young and dynamic team of designers and project managers offering creative, simple, and innovative design solutions.</li>
          <li>Our services range from feasibility studies and detailed planning to design execution and project completion.</li>
          <li>We specialize in corporate (IT & ITES), retail, and hospitality sectors, integrating complex systems with interior designs.</li>
          <li>We use updated methodologies and project management tools to deliver state-of-the-art facilities.</li>
        </ul>

        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutImages.team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutImages.projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              View More Projects
            </button>
          </Link>
        </div>

        {/* 4C Philosophy Section */}
        <h2 className="text-4xl font-bold text-center mt-16 mb-8">Our 4C Philosophy</h2>
        <div className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">CARE:</h3>
            <ul className="list-decimal list-inside pl-6">
              <li>Empowering employees with a supportive and respectful environment.</li>
              <li>Promoting sustainability and eco-friendly practices in our projects.</li>
              <li>Fostering a culture of empathy and understanding for all stakeholders.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">CUSTOMER CARE:</h3>
            <ul className="list-[→] list-inside pl-6">
              <li>Providing personalized solutions tailored to client needs.</li>
              <li>Ensuring proactive communication and transparency throughout projects.</li>
              <li>Offering post-project support and long-term maintenance services.</li>
              <li>Creating memorable customer experiences through attention to detail.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">COURAGE:</h3>
            <ul className="list-[✔] list-inside pl-6 text-gray-600">
              <li>Taking bold steps to challenge traditional norms in design and execution.</li>
              <li>Adopting innovative technologies to stay ahead in the industry.</li>
              <li>Encouraging team members to voice new ideas and take ownership of their work.</li>
              <li>Facing challenges head-on with resilience and a problem-solving mindset.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">CONTINUAL IMPROVEMENT:</h3>
            <ul className="list-[★] list-inside pl-6 text-gray-600">
              <li>Investing in ongoing professional development for team members.</li>
              <li>Leveraging customer feedback to refine and enhance our services.</li>
              <li>Staying updated on the latest industry trends and practices.</li>
              <li>Regularly reviewing processes to identify areas for optimization.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
