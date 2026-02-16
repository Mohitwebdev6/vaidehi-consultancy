import React from "react";
import useSeo from "../hooks/useSeo";
import OurServices from "../components/HomeComponents/OurServices";
import CoreValues from "../components/HomeComponents/CoreValues";
import Hero from "../components/HomeComponents/Hero";
import ContactUsSection from "../components/HomeComponents/ContactUsSection";

const Home = () => {
  useSeo({
    title: "Vaidehi Consultancy | Home",
    description:
      "Vaidehi Consultancy builds high-performing websites and digital experiences for growing businesses.",
  });

  return (
    <div>
      <Hero />
      <CoreValues />
      <OurServices />
      <ContactUsSection />
    </div>
  );
};

export default Home;
