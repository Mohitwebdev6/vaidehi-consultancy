import React from "react";
import WebsiteDesignSection1 from "../components/WebsiteDesignComponents/WebsiteDesignSection1";
import ContactWebDev from "../components/WebsiteDevelopmentComponents/ContactWebDev";
import useSeo from "../hooks/useSeo";

function WebsiteDesign() {
  useSeo({
    title: "Vaidehi Consultancy | Website Design",
    description:
      "Modern website design that improves credibility, engagement, and conversions.",
  });

  const ContactUsData = {
    title: "Let's design your website together",
    description:
      "Looking for a modern and professional website for your business? Get in touch with us and take the first step towards digital success.",
  };
  return (
    <div>
      <WebsiteDesignSection1 />
      <ContactWebDev
        title={ContactUsData.title}
        description={ContactUsData.description}
      />
    </div>
  );
}

export default WebsiteDesign;
