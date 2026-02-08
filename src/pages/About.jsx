import React from 'react';
import { 
  Users, 
  Lightbulb, 
  Rocket, 
  Target, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  Award,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const approachItems = [
    { title: "Business-first technology solutions", icon: <Rocket size={24} /> },
    { title: "Transparent communication and process", icon: <MessageSquare size={24} /> },
    { title: "Focus on long-term partnerships", icon: <Users size={24} /> },
    { title: "Quality-driven development and design", icon: <ShieldCheck size={24} /> },
    { title: "Affordable solutions for growing businesses", icon: <TrendingUp size={24} /> },
    { title: "Continuous improvement and innovation", icon: <Lightbulb size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* HERO SECTION: Dark Gradient Background */}
      <section className="bg-[#0f172a] pt-32 pb-48 px-6 text-center text-white relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="text-sky-400">Vaidehi Consultancy</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A technology-driven consultancy committed to building long-term digital partnerships.
          </p>
        </div>
        
        {/* Subtle decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* WHO WE ARE: Floating White Section */}
      <section className="px-6 -mt-24 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl p-10 md:p-16 border border-slate-50">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Who we are</h2>
              <div className="w-16 h-1.5 bg-sky-500 rounded-full"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Vaidehi Consultancy is a growing IT consultancy based in India, focused on helping 
                businesses, startups, and institutions build a strong digital presence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We specialize in website development, digital marketing, and website designing, 
                delivering solutions that are reliable, scalable, and business-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH: Grid Section */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our approach</h2>
            <div className="w-12 h-1.5 bg-sky-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachItems.map((item, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VAIDEHI CONSULTANCY: Final Section */}
      <section className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Vaidehi Consultancy</h2>
              <div className="w-16 h-1.5 bg-sky-500 rounded-full mb-8"></div>
              <p className="text-xl text-slate-600 leading-relaxed">
                We believe technology should simplify business, not complicate it. 
                Our goal is to work as an extension of your team to provide results 
                that actually matter.
              </p>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="bg-sky-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <Award className="mb-4 opacity-80" size={40} />
                  <h4 className="text-2xl font-bold mb-2">Our Mission</h4>
                  <p className="text-sky-50 opacity-90 leading-relaxed">
                    To empower every client with custom digital tools that drive 
                    efficiency, engagement, and sustainable business growth.
                  </p>
                </div>
                {/* Decorative background circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;