import { MapPin, Phone, Mail } from 'lucide-react';
import contact from "../../assets/images/contact.jpg";
import Navbar from '../../components/navbar';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from '../../components/footer';

const Contact = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll events to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="bg-gray-50 mt-20 overflow-x-hidden"  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.section
          className="relative bg-cover bg-center h-72 w-full"
          style={{ backgroundImage: `url(${contact})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.h3
              className="text-white text-4xl font-bold"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.h3>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="py-12 px-6 max-w-screen-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-[#1D6205] mb-6">
                Get In Touch With Us
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We’re here to answer your questions, discuss partnerships, or pray with you. Let’s connect and build a world of love and empowerment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="text-[#1D6205] w-7 h-7 mr-3" />
                  <p className="text-sm sm:text-base text-black">
                    <span className="font-bold">Location:</span> 4 Naa Botwey Street, Mabey, Haatso, Accra, Ghana
                  </p>
                </li>
                <li className="flex items-center">
                  <Phone className="text-[#1D6205] w-6 h-6 mr-3" />
                  <p className="text-sm sm:text-base text-black">
                    <span className="font-bold">Phone:</span> +233-302-905659 | +233-597-395719
                  </p>
                </li>
                <li className="flex items-center">
                <Mail className="text-[#1D6205] w-6 h-6 mr-3" />
                <p className="text-sm sm:text-base text-black">
                  <span className="font-bold text-black">Email:</span>{" "}
                  <a
                    href="mailto:info@pleroma-scycamore.org"
                    className="hover:underline text-black"
                  >
                    info@pleroma-sycamore.org
                  </a>
                </p>
              </li>
              </ul>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="bg-gray-100 p-6 rounded-lg shadow-md mb-16">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1D6205] focus:border-[#1D6205]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1D6205] focus:border-[#1D6205]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Messages
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1D6205] focus:border-[#1D6205]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1D6205] text-white py-2 px-4 rounded-md hover:bg-green-700"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#088E31] text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          ↑
        </motion.button>
      )}
      <Footer />
    </>
  );
};

export default Contact;
