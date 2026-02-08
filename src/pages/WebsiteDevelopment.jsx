import WhatWeOffer from "../components/WebsiteDevelopmentComponents/WhatWeOffer";
import WhyChooseUs from "../components/WebsiteDevelopmentComponents/WhyChooseUs";
import ContactWebDev from "../components/WebsiteDevelopmentComponents/ContactWebDev";
import ServiceHeroSection from "../components/WebsiteDevelopmentComponents/ServiceHeroSection";

const WebsiteDevelopment = () => {
  const contactPageData = {
    title: "Lets build your website together",
    desc: "Ready to create professional website for your business? Get in touch with us and take the first step towards digital success.",
  };
  return (
    <>
      <ServiceHeroSection />
      <WhatWeOffer />
      <WhyChooseUs />
      <ContactWebDev title={contactPageData.title} description={contactPageData.desc} />
    </>
  );
};

export default WebsiteDevelopment;
