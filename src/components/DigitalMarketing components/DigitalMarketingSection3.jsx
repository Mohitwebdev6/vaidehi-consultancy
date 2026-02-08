import React from "react";

// Data for the "What we offer" section
const services = [
  "Search Engine Optimization (SEO)",
  "Social Media Marketing",
  "Google Ads & Online Advertising",
  "Content & Brand Visibility Strategy",
  "Lead Generation Campaigns",
  "Performance Tracking & Reporting",
];

// Data for the "Why choose us" section
const features = [
  "Result-oriented marketing approach",
  "Customized strategies for every business",
  "Transparent reporting and performance tracking",
  "Affordable solutions for growing businesses",
];

const DigitalMarketingSection3 = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* SECTION 1: What We Offer */}
      <section className="py-20 px-6 bg-[#f8fbff]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">What we offer</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300 text-left flex items-center border border-gray-50"
              >
                <span className="text-lg font-semibold text-gray-700">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Choose Vaidehi Consultancy */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">
            Why choose Vaidehi Consultancy
          </h2>
          <div className="w-16 h-1.5 bg-orange-500 rounded-full mb-8"></div>

          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
            We believe digital marketing is not just about ads or followers.
            It's about creating consistent growth, building trust, and
            generating real business value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center h-full"
              >
                <p className="font-bold text-gray-800 leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingSection3;
