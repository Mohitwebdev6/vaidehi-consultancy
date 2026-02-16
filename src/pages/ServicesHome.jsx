import React from "react";
import useSeo from "../hooks/useSeo";
import OurServices from "../components/HomeComponents/OurServices";

function ServicesHome() {
  useSeo({
    title: "Vaidehi Consultancy | Services",
    description:
      "Explore website development, digital marketing, and website design services from Vaidehi Consultancy.",
  });

  return (
    <div>
      <OurServices />
    </div>
  );
}

export default ServicesHome;
