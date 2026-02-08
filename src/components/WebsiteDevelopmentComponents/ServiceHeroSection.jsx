import React from "react";
import { Rocket, ShieldCheck, Layers } from "lucide-react";

function ServiceHeroSection() {
  return (
    <div>
      
      {/* HERO SECTION */}
      <section className="w-full bg-blue-100 py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Website Development
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Scalable, secure, and high-performance websites built to support
            long-term business growth.
          </p>
        </div>
      </section>
      {/* CONTENT SECTION */}
      <section className="w-full bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Build websites that grow with your business
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 max-w-4xl">
            At Vaidehi Consultancy, we develop modern and reliable websites
            designed to help businesses establish a strong digital presence. Our
            focus is on performance, security, scalability, and usability,
            ensuring your website supports your business goals today and in the
            future.
          </p>

          {/* ICON FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Performance */}
            <div className="flex items-start gap-4 p-6 rounded-xl border hover:shadow-lg transition">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <Rocket size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">High Performance</h3>
                <p className="text-gray-600 text-sm">
                  Optimized websites that load fast and deliver smooth user
                  experiences.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="flex items-start gap-4 p-6 rounded-xl border hover:shadow-lg transition">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Strong Security</h3>
                <p className="text-gray-600 text-sm">
                  Secure development practices to protect your data and users.
                </p>
              </div>
            </div>

            {/* Scalability */}
            <div className="flex items-start gap-4 p-6 rounded-xl border hover:shadow-lg transition">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <Layers size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Scalable Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Built to grow seamlessly as your business expands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceHeroSection;
