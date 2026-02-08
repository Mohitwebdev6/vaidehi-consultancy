import React from "react";
import WebsiteDesignSection1 from "../components/WebsiteDesignComponents/WebsiteDesignSection1";
import ContactWebDev from "../components/WebsiteDevelopmentComponents/ContactWebDev";

function WebsiteDesign() {
  const ContactUsData = {
    title: "Let's design your website together",
    description:
      "Looking for a modern and professional website for your business? Get in touch with us and take the first step towards digital success.",
  };
  return (
    <div>
      <WebsiteDesignSection1 />
      <ContactWebDev title={ContactUsData.title} description={ContactUsData.description} />
    </div>
  );
}

export default WebsiteDesign;
