import React from 'react';

const services = [
  { id: 1, title: 'Search Engine Optimization (SEO)' },
  { id: 2, title: 'Social Media Marketing' },
  { id: 3, title: 'Google Ads & Online Advertising' },
  { id: 4, title: 'Content & Brand Visibility Strategy' },
  { id: 5, title: 'Lead Generation Campaigns' },
  { id: 6, title: 'Performance Tracking & Reporting' },
];

const DigitalMarketingSection2 = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Improved Heading with Accent Line */}
        <h2 className="text-4xl font-bold text-gray-900 mb-2">What we offer</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mb-12"></div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-transparent 
                         hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Added a subtle dot indicator for visual interest */}
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></span>
              
              <h3 className="text-lg font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection2;