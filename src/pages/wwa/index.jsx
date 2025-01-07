import woman from "../../assets/woman.jpg";
import Navbar from '../../components/navbar';
import man from "../../assets/man.jpg";
import boy from "../../assets/boy.jpg";
import handthree from "../../assets/images/handthree.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";

const WhoWeAre = () => {
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
      <div className="mb-20">
        {/* About Us Section */}
        <motion.div
          className="relative w-full h-64 mt-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${handthree})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.h3
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
            </motion.h3>
          </div>
        </motion.div>

        {/* Welcome Section */}
        <motion.div
          className="container mx-auto mt-12 py-16 px-6 lg:px-8 max-w-screen-lg grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Inspired by God; Driven by Purpose
            </h2>
            <motion.div
              className="w-24 h-1 bg-[#1D6205] mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            ></motion.div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Pleroma Sycamore Foundation is a divine inspiration, established to enforce God’s will on earth through impactful partnerships and spirit-filled initiatives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are committed to creating opportunities for worship, empowerment, and positive transformation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our objectives include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed sm:text-md mb-6">
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Supporting Christian missions, ministries, and outreaches focused on propagating the Word of God.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Providing social interventions for the aged, youth and children.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Supporting Christian leadership and entrepreneurship development.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Mitigate accommodation challenges through social housing.
              </motion.li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={boy}
              alt="Child with a guitar"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>

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

export default WhoWeAre;
