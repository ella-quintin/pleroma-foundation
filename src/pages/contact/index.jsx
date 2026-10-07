import { MapPin, Phone, Mail } from 'lucide-react';
import contact from "../../assets/images/contact.jpg";
import SEO from "../../components/seo";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from '../../components/footer';

const Contact = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const formRef = useRef(null);
  const [sendState, setSendState] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendState("sending");

    emailjs
      .sendForm(
        "service_rid8tfh",
        "template_w1830sh",
        formRef.current,
        "w0GfeCN8k1_stJidz"
      )
      .then(() => {
        setSendState("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setSendState("error");
      });
  };

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
      <SEO
        title="Contact Us | Pleroma Sycamore Foundation"
        description="Get in touch with Pleroma Sycamore Foundation in Accra, Ghana — for partnerships, support, prayer requests, or community initiatives."
        path="/contact-us"
        image={contact}
      />

      <motion.div
        className="bg-gray-50 overflow-x-hidden"
        style={{ marginTop: "var(--nav-height)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.section
          className="relative bg-cover bg-center h-64 w-full"
          style={{ backgroundImage: `url(${contact})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.h1
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
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
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h5 className="text-[#1D6205] uppercase tracking-wide font-semibold mb-2">
                Contact Information
              </h5>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get In Touch With Us
              </h2>

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
                      href="mailto:info@pleroma-sycamore.org"
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
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-gray-100 p-6 rounded-lg shadow-md mb-16"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
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
                    name="user_email"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1D6205] focus:border-[#1D6205]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
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
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1D6205] focus:border-[#1D6205]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={sendState === "sending"}
                  className="w-full bg-[#1D6205] text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {sendState === "sending" ? "Sending…" : "Send Message"}
                </button>

                {sendState === "success" && (
                  <p className="mt-3 text-sm text-center text-[#1D6205] font-medium">
                    Thank you — your message has been sent. We'll get back to you soon.
                  </p>
                )}
                {sendState === "error" && (
                  <p className="mt-3 text-sm text-center text-red-600 font-medium">
                    Something went wrong. Please try again, or email us directly.
                  </p>
                )}
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
