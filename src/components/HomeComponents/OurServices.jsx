import webDev from "../../assets/webDev.jpeg";
import digitalMarketing from "../../assets/digitalMarketing.jpeg";
import webDesign from "../../assets/webDesign.jpeg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Website Development",
    desc: "Build scalable, secure, and high-performance websites that drive real business growth.",
    icon: webDev,
  },
  {
    title: "Digital Marketing",
    desc: "Increase your online visibility and convert audiences into customers.",
    icon: digitalMarketing,
    highlight: true,
  },
  {
    title: "Website Designing",
    desc: "Create visually compelling designs that deliver exceptional user experiences.",
    icon: webDesign,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#cfe0fb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Our services
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
              key={index}
              className={`relative bg-white rounded-2xl p-10 text-center
              shadow-md transition-all duration-300
              hover:-translate-y-3 hover:shadow-2xl`}
            >
              {/* Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="h-24 mx-auto mb-8"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex justify-center items-center gap-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Arrow (only visible on hover) */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition">
                <ArrowRight className="text-blue-600" />
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-70 hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <ArrowRight className="text-white" size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
