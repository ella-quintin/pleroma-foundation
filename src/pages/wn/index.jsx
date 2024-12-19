import Navbar from "../../components/navbar";
import { motion } from "framer-motion";
import heroTwo from '../../assets/images/herotwo.jpg'
import { useState, useEffect } from "react";
import Footer from "../../components/footer";

const New = () => {
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
      {/* Prevent horizontal overflow */}
      <div className="w-full overflow-x-hidden">
        <Navbar />

        {/* About Us Section */}
        <motion.div
          className="py-16 px-4 md:px-12 bg-gray-100 mt-20"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: "0vw", opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center m-4 md:m-16">
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h4
                className="text-[#1D6205] uppercase tracking-wide font-semibold mb-2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                What’s New
              </motion.h4>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Stay Updated with PSF
              </motion.h2>
              <motion.p
                className="text-gray-600 text-base md:text-lg mb-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Discover the latest updates, news, and media from Pleroma Sycamore Foundation.
              </motion.p>

              <motion.ul
                className="text-gray-600 text-base md:text-lg mb-6 list-disc pl-5"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <li>Insights from our programs.</li>
                <li>Highlights from Y4J and C4J events.</li>
                <li>New episodes and features on our Televangelism Ministry.</li>
              </motion.ul>

              <motion.p
                className="text-gray-600 text-base md:text-lg mb-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Stay tuned as we continue to expand God's work.
              </motion.p>
            </div>

            {/* Right Image */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <img
                src={heroTwo} 
                alt="About Us"
                className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </motion.div>
          </div>
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
      </div>
    </>
  );
};

export default New;
