import React from "react";
import hero_image from "../../assets/hero_image.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative md:h-screen h-[700px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 md:bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero_image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Vaidehi Consultancy Services
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            We provide trusted educational and career consultancy services,
            helping individuals make informed decisions for a better future.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="mt-8 px-8 py-3 border-2 border-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
