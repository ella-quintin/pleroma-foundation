
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from "react-router-dom";
import { programs } from "../../data/programs";


const Footer = () => {
  return (
    <footer className="bg-[#1D6205] text-white py-12 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 sm:px-6 md:px-8">
        {/* Company Info + Social Links */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">Pleroma Sycamore Foundation</h3>
          <p className="text-sm md:text-sm text-white hover:text-gray-100 leading-relaxed font-thin text-left mb-6">
            Pleroma Sycamore Foundation is a divine inspiration, established to enforce God’s will on earth through impactful partnerships and spirit-filled initiatives.
          </p>
          <h3 className="text-lg text-left font-bold mb-3">Social Media</h3>
          <div className="mt-4 flex text-left space-x-4">
            <a href="https://www.instagram.com/pleromasycamorefoundation?igsh=ZDg0NW1yMXRwbmd4" className="hover:text-gray-300" aria-label="Visit our Instagram page"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/share/18gTCwEYJ3/?mibextid=wwXIfr" className="hover:text-gray-300" aria-label="Visit our Facebook page"><Facebook size={20} /></a>
            <a href="https://www.linkedin.com/in/pleroma-sycamore-foundation-108011406?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="hover:text-gray-300" aria-label="Visit our LinkedIn page"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links + Help */}
        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white font-thin">
              {[
                { name: "Home", path: "/" },
                { name: "Who We Are", path: "/who-we-are" },
                { name: "What We Do", path: "/how-we-work" },
                { name: "What's New", path: "/blog" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="hover:underline hover:text-gray-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Our Programs</h3>
            <ul className="space-y-3 text-sm font-thin text-white">
              {programs.map((program) => (
                <li key={program.slug}>
                  <Link
                    to={`/our-programs/${program.slug}`}
                    className="hover:underline hover:text-gray-200"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4 font-thin">
              <li className="flex items-center">
                <MapPin className="text-white w-7 h-7 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Location:</span> 4 Naa Botwey Street, Mabey, Haatso , Accra, Ghana
                </p>
              </li>
              <li className="flex items-center">
                <Phone className="text-white w-6 h-6 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Phone:</span> +233-302- 905659 | +233-597-395719
                </p>
              </li>
              <li className="flex items-center">
                <Mail className="text-white w-6 h-6 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Email:</span>{" "}
                  <a
                    href="mailto:info@pleroma-sycamore.org"
                    className="hover:underline text-white hover:text-gray-200"
                  >
                    info@pleroma-sycamore.org
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}

      <div className="mt-12 border-t border-white pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pleroma Sycamore Foundation. All rights reserved.
          <a href="https://www.freepik.com" className="text-gray-300 hover:underline" target="_blank" rel="noopener noreferrer"> Freepik</a>
        </p>
      </div>
    </footer >
  );
};

export default Footer;
