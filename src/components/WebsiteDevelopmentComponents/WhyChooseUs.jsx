import { Briefcase, Code2, MessageCircle, IndianRupee } from "lucide-react";

const reasons = [
  {
    title: "Business-focused development approach",
    icon: Briefcase,
  },
  {
    title: "Clean, maintainable, and scalable code",
    icon: Code2,
  },
  {
    title: "Clear communication and transparent process",
    icon: MessageCircle,
  },
  {
    title: "Affordable solutions for growing businesses",
    icon: IndianRupee,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Why choose Vaidehi Consultancy
          </h2>
          <div className="w-14 h-1 bg-blue-600 mt-3 rounded-full" />
          <p className="mt-5 text-gray-600 leading-relaxed">
            We believe in building long-term partnerships, not just websites.
            Our development approach focuses on quality, transparency, and
            solutions that deliver real business value.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 border overflow-hidden shadow-sm
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Accent bar */}
                <span
                  className="absolute left-0 top-0 h-full w-1 bg-blue-600 
                  scale-y-0 group-hover:scale-y-100 origin-top 
                  transition-transform duration-300 rounded-l-xl"
                />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="p-3 rounded-lg bg-blue-50 text-blue-600 
                    transition-all duration-300 
                    group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 font-medium leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
