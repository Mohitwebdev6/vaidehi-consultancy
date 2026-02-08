import React from "react";
import OurServices from "../components/HomeComponents/OurServices";
import CoreValues from "../components/HomeComponents/CoreValues";
import Hero from "../components/HomeComponents/Hero";
import ContactUsSection from "../components/HomeComponents/ContactUsSection";


const Home = () => {
  return (
    <div>
      <Hero/>
      <CoreValues/>
      <OurServices/>
      <ContactUsSection/>
    </div>
  );
};

export default Home;
