import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import vaidehi_logo from "../assets/Vaidehi_logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2">
          <div>
            <img className="h-12" src={vaidehi_logo} alt="" />
          </div>
          <div className="flex-col items-center">
            <div className="text-xl font-bold  text-blue-700">Vaidehi</div>
            <div className="text-lg font-bold mt-[-10px] text-blue-700">
              Consultancy
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative transition-colors duration-300
         ${
           isActive
             ? "text-blue-600 after:w-full"
             : "text-gray-700 hover:text-blue-600"
         }
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
         after:w-0 hover:after:w-full`
              }
            >
              {item}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="bg-white px-6 pt-14 pb-20 space-y-4 font-medium border-t">
          {navLinks.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block transition
         ${isActive ? "text-blue-600 font-semibold text-xl" : "text-gray-700 text-xl hover:text-blue-600"}`
              }
            >
              {item}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
