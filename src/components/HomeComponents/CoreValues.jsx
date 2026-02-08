import React from "react";
import integrity from "../../assets/integrity.png";
import client from "../../assets/client.png";
import ethics from "../../assets/ethics.png";
import guidance from "../../assets/guidance.png";
import timely from "../../assets/timely.png";
import quality from "../../assets/quality.png";


const values = [
  {
    title: "Integrity & Transparency",
    desc: "We believe in honest communication and transparent processes to build trust with our clients.",
    icon: integrity,
  },
  {
    title: "Client-Centric Approach",
    desc: "Every client is unique and we provide customized consultancy solutions based on individual needs.",
    icon: client,
  },
  {
    title: "Professional Ethics",
    desc: "We maintain confidentiality and ethical standards in all professional engagements.",
    icon: ethics,
  },
  {
    title: "Reliable Guidance",
    desc: "Our exprienced team ensures accurate and dependable guidance at every stage",
    icon: guidance,
  },
  {
    title: "Timely Support",
    desc: "We provide prompt assistance to help client move forward without delays",
    icon: timely,
  },
  {
    title: "Quality Commitment",
    desc: "Our focus is on delivering high-quality consultant services with long-term value",
    icon: quality,
  },
];

function CoreValues() {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
            Our Core Values
          </h2>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center
              shadow-sm transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoreValues;
