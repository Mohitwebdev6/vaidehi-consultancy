import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer  />
    </div>
  );
};

export default MainLayout;
