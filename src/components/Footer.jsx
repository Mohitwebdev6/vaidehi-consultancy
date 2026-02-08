import {
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import vaidehiLogo from "../assets/Vaidehi_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={vaidehiLogo} alt="Vaidehi Consultancy" className="h-10" />
            <h3 className="text-lg font-semibold text-white">
              Vaidehi Consultancy Services
            </h3>
          </div>

          <p className="text-sm leading-relaxed">
            123, Block-A <br />
            Sector-10, City – 110001 <br />
            India
          </p>

          <p className="mt-4 text-sm">
            <span className="font-semibold text-white">Phone:</span> +91 9XXXXXXXXX
          </p>
          <p className="text-sm">
            <span className="font-semibold text-white">Email:</span>{" "}
            info@vaidehicontultancy.in
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">
            Useful Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              "Home",
              "About Us",
              "Services",
              "Terms of Service",
              "Privacy Policy",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              "Educational Consultancy",
              "Career Guidance",
              "Documentation Support",
              "Admission Assistance",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center
                bg-[#3a3a3a] rounded hover:bg-blue-600 transition"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © Copyright{" "}
            <span className="text-white font-semibold">
              Vaidehi Consultancy Services
            </span>
            . All Rights Reserved
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918971132756"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full
        shadow-lg hover:scale-110 transition"
      >
        <MessageCircle className="text-white" />
      </a>
    </footer>
  );
};

export default Footer;
