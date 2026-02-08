import { TrendingUp, ArrowRight } from "lucide-react";

const DigitalMarketingHero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-cyan-50 py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-blue-600/10 text-blue-600">
              <TrendingUp size={30} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Digital Marketing
          </h1>

          {/* Accent line */}
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Increase your online visibility, attract the right audience,
            and convert traffic into real business growth.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 
              bg-blue-600 text-white px-8 py-3 rounded-full
              font-medium transition-all duration-300
              hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
            >
              Grow Your Business
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT INTRO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Marketing strategies that deliver measurable results
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
            At Vaidehi Consultancy, we help businesses grow online through
            data-driven digital marketing strategies. Our approach focuses on
            visibility, engagement, lead generation, and long-term brand growth.
          </p>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingHero;
