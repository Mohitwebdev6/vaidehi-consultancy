import React from "react";
import useSeo from "../hooks/useSeo";

function NotFound() {
  useSeo({
    title: "Vaidehi Consultancy | Page Not Found",
    description: "The page you are looking for does not exist.",
    noIndex: true,
  });

  return (
    <div className="flex h-full text-2xl text-red-500 justify-center items-center">
      NotFound
    </div>
  );
}

export default NotFound;
