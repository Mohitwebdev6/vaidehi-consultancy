import React from 'react';
import { 
  Search, 
  Share2, 
  TrendingUp, 
  Lightbulb, 
  Target, 
  BarChart3, 
  CheckCircle2, 
  Palette, 
  Layout, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

const WebsiteDesignSection1 = () => {
  const services = [
    { title: "Search Engine Optimization (SEO)", icon: <Search size={24} /> },
    { title: "Social Media Marketing", icon: <Share2 size={24} /> },
    { title: "Google Ads & Advertising", icon: <Target size={24} /> },
    { title: "Content & Brand Strategy", icon: <Lightbulb size={24} /> },
    { title: "Lead Generation Campaigns", icon: <TrendingUp size={24} /> },
    { title: "Tracking & Reporting", icon: <BarChart3 size={24} /> },
  ];

  const features = [
    "Result-oriented marketing approach",
    "Customized strategies for every business",
    "Transparent reporting and tracking",
    "Affordable solutions for growth"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      
      {/* HERO SECTION: Slide In Up Animation */}
      <section className="relative pt-32 pb-24 px-6 bg-[#fafaff]">
        <div className="max-w-5xl mx-auto text-center transition-all duration-1000 ease-out transform translate-y-0 opacity-100">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Website <span className="text-blue-500 relative">
              Designing
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Visually compelling, user-focused designs that create strong brand impressions 
            and seamless experiences.
          </p>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* CONTENT BLOCK: Connect Users */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Designs that connect <br/>users with your brand
            </h2>
            <div className="w-20 h-2 bg-blue-500 rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At Vaidehi Consultancy, we design modern, clean, and intuitive website interfaces 
              that focus on user experience and brand identity.
            </p>
            <div className="space-y-4">
              {["User-Centric UX", "Brand Consistent Design", "Performance Optimized"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="text-blue-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Grid Layout with Hover Effects */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {[<Palette />, <Layout />, <Smartphone />, <BarChart3 />].map((icon, i) => (
              <div key={i} className="aspect-square bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 border border-slate-100 hover:text-orange-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {React.cloneElement(icon, { size: 48, strokeWidth: 1.5 })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER: Dark Mode Reveal */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What we offer</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-slate-800/40 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-default"
              >
                <div className="mb-6 p-4 bg-slate-700/50 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 text-orange-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">Tailored digital solutions to elevate your market presence and drive engagement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US: Feature Cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-6">Why choose <br/>Vaidehi Consultancy</h2>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <p className="text-slate-500 italic text-lg leading-relaxed">
                "We believe digital marketing is not just about ads. It's about creating 
                consistent growth and building trust."
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((text, i) => (
                <div 
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <CheckCircle2 size={20} className="text-blue-500 group-hover:text-white" />
                  </div>
                  <span className="font-bold text-slate-800 text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default WebsiteDesignSection1;