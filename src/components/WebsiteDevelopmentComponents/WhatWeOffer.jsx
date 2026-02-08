import {
  Building2,
  Smartphone,
  Zap,
  ShieldCheck,
  Puzzle,
  Headset,
} from "lucide-react";

const offers = [
  {
    title: "Business & Corporate Websites",
    icon: Building2,
  },
  {
    title: "Responsive & Mobile-Friendly Development",
    icon: Smartphone,
  },
  {
    title: "Fast-Loading & SEO-Ready Websites",
    icon: Zap,
  },
  {
    title: "Secure & Scalable Architecture",
    icon: ShieldCheck,
  },
  {
    title: "Custom Features as per Business Needs",
    icon: Puzzle,
  },
  {
    title: "Ongoing Support & Maintenance",
    icon: Headset,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="w-full py-20 bg-linear-to-b from-blue-200 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            What we offer
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {offers.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-smborder 
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer"
              >
                {/* Left Accent */}
                <span
                  className="absolute left-0 top-0 h-full w-1 bg-blue-600 
                  scale-y-0 group-hover:scale-y-100 origin-top 
                  transition-transform duration-300 rounded-l-xl"
                />

                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className="p-3 rounded-lg bg-blue-50 text-blue-600 
                    transition group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 font-medium text-sm md:text-base">
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

export default WhatWeOffer;
