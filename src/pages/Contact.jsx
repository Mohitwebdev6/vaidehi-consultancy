import React, { useState } from "react";
import useSeo from "../hooks/useSeo";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  AtSign,
  PenTool,
} from "lucide-react";

const ContactPage = () => {
  useSeo({
    title: "Vaidehi Consultancy | Contact",
    description:
      "Contact Vaidehi Consultancy to discuss website development, digital marketing, or design services.",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactDetails = [
    {
      id: "email",
      label: "Email",
      value: "vaidehitech1@gmail.com",
      icon: <Mail className="text-blue-500" />,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+91 8971132756",
      icon: <Phone className="text-blue-500" />,
    },
    {
      id: "location",
      label: "Location",
      value: "Bhagwanpur,Muzaffarpur,Bihar, India",
      icon: <MapPin className="text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100">
      {/* HERO SECTION */}
      <section className="bg-[#0f172a] py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-6 tracking-tight">
            With you for the <span className="text-blue-400">long run</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you are a business, startup, or institute — let's discuss
            how we can build digital solutions together.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 mt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-6 pt-16">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Contact Vaidehi Consultancy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We're here to help you grow digitally with reliable, scalable,
                and result-oriented solutions.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.id}
                  className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-blue-50 rounded-xl">{detail.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                      {detail.label}
                    </p>
                    <p className="text-lg font-medium text-slate-800">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-50 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                Let's talk <MessageSquare className="text-blue-500" />
              </h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-500 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="relative group">
                  <AtSign
                    className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-500 transition-colors"
                    size={20}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="relative group">
                  <PenTool
                    className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-500 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="relative group">
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group transition-all active:scale-95">
                  Send Message
                  <Send
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    size={20}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
