import { Link } from "react-router-dom";

const ContactUsSection = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6">
          Growing together, for the long run
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          At Vaidehi Consultancy, we believe in long-term partnerships that help
          businesses grow with confidence and technology.
        </p>

        {/* Button */}
        <Link
          to="/contact"
          className="px-10 py-3 rounded-full border border-blue-600
          text-blue-600 font-medium
          hover:bg-blue-600 hover:text-white
          active:scale-105
          hover:cursor-pointer
          transition duration-300"
        >
          Contact us
        </Link>

      </div>
    </section>
  );
};

export default ContactUsSection;
