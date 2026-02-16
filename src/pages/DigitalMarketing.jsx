import React from "react";
import DigitalMarketingHero from "../components/DigitalMarketing components/DigitalMarketingHero";
import DigitalMarketingSection2 from "../components/DigitalMarketing components/DigitalMarketingSection2";
import DigitalMarketingSection3 from "../components/DigitalMarketing components/DigitalMarketingSection3";
import ContactWebDev from "../components/WebsiteDevelopmentComponents/ContactWebDev";
import useSeo from "../hooks/useSeo";

function DigitalMarketing() {
  useSeo({
    title: "Vaidehi Consultancy | Digital Marketing",
    description:
      "Data-driven digital marketing to grow your visibility, leads, and revenue.",
  });

  const contactPageData = {
    title: "Lets grow your business online",
    desc: "Ready to improve your digital presense and generate quality leads? Get in touch with us and take the first step towards digital success.",
  };
  return (
    <div>
      <DigitalMarketingHero />
      <DigitalMarketingSection2 />
      <DigitalMarketingSection3 />
      <ContactWebDev
        title={contactPageData.title}
        description={contactPageData.desc}
      />
    </div>
  );
}

export default DigitalMarketing;
