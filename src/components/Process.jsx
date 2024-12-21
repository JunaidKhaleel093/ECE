import React from 'react';

const steps = [
  { number: "01.", title: "Concept", description: "Initial idea development." },
  { number: "02.", title: "Plan", description: "Detailed project planning." },
  { number: "03.", title: "Design", description: "Creative design execution." },
  { number: "04.", title: "Build", description: "Construction and installation." },
  { number: "05.", title: "Launch", description: "Final project delivery." },
  { number: "06.", title: "Refine", description: "Ongoing adjustments for optimal results." },

];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#8B6B44' }}>How We Work?</h2>
        <p className="text-xl text-center text-blue-900 mb-16">Our End-To-End Interior Design Solutions:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative border-2 border-teal-900 p-8 ${index === 2 ? 'lg:col-start-2' : ''}`}
            >
              <h3 className="text-2xl font-bold text-teal-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <span className="absolute bottom-4 right-4 text-4xl font-bold text-teal-900/80">
                {step.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
