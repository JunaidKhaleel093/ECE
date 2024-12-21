import React from "react";

const ContactSection = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <section className="bg-gradient-to-r from-[#dcdcdc] to-[#a9a9a9] py-20 relative" id="Contact">
      <div className="container mx-auto px-6 lg:px-12">
      <button
          onClick={handleBack}
          className="text-black px-4 py-2 rounded-md mb-4 absolute top-8 left-2 "
        >
          <span className="text-2xl">←</span>
        </button>

        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Contact Us
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto transition hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          <div className="space-y-6 text-gray-700">
            <p>
              <span className="font-semibold">Address:</span> <br />
              Adams Corner No37 3rd floor Coles Road Frazer town, Bangalore- 560005
            </p>
            <p>
              <span className="font-semibold">Phone:</span> <br />
              +91 9845002484, +91 9538900090
            </p>
            <p>
              <span className="font-semibold">Email:</span> <br />
              <a
                href="mailto:Ayub@ece99.com"
                className="text-blue-500 hover:underline"
              >
                Ayub@ece99.com
              </a>{" "}
              /{" "}
              <a
                href="mailto:Irfan@ece99.com"
                className="text-blue-500 hover:underline"
              >
                Irfan@ece99.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Company Profile:</span> <br />
              <a
                href="/images/ECE.pptx"
                download="ECE Company Profile."
                className="text-blue-500 hover:underline"
              >
                Download Company Profile (PPT)
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
