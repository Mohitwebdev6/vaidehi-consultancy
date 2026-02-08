import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactWebDev = ({title,description}) => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-200/10 via-transparent to-cyan-500/10" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-blue-600/10 text-blue-400">
            <MessageCircle size={28} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#114EA8]">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 
            bg-white text-gray-900 font-medium
            px-8 py-3 rounded-full
            transition-all duration-300
            hover:bg-blue-600 hover:text-white
            hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
            hover:-translate-y-1 border border-blue-600"
          >
            Contact us
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactWebDev;
