import { Routes, Route, Router } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import ServicesHome from "./pages/ServicesHome";
import NotFound from "./pages/NotFound";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebsiteDesign from "./pages/WebsiteDesign";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />}>
            <Route index element={<ServicesHome />} />
            <Route
              path="website-development"
              element={<WebsiteDevelopment />}
            />
            <Route
              path="digital-marketing"
              element={<DigitalMarketing />}
            />
              <Route
              path="website-designing"
              element={<WebsiteDesign />}
            />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
