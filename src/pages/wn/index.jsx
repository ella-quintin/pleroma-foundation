import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import heroTwo from "../../assets/images/herotwo.jpg";

const New = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar />

      <div className="py-16 px-4 md:px-12 bg-gray-100 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center m-4 md:m-16">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h4 className="text-[#1D6205] uppercase tracking-wide font-semibold mb-2">
              Raising Strategic Christian Leaders:
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              A Glimpse into the 2025 MDM Leadership Seminar
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              In a world where leaders are needed to make strategic and informed
              decisions for change and better governance, the Pleroma Sycamore
              Foundation continues to fulfill its mandate of empowering Christian
              leaders to rise to the call of effective and godly leadership.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              In pursuit of this vision, the Foundation recently organized a
              one-day seminar to support Morning Dew Ministries (MDM) in the
              restructuring of their church constitution. The event was held at
              the peaceful and welcoming Hephzibah Christian Centre and brought
              together 26 leaders across the church’s national, regional, and
              branch levels.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              The atmosphere was expectant, and the leaders came prepared—not
              just to listen, but to contribute meaningfully to the future
              direction of the ministry.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Key moments from the seminar included a powerful session by Mrs.
              Vera Akumiah, who highlighted the role of leadership by example,
              especially for the youth.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Following this, Mr. Eric Akumiah delivered an insightful
              presentation on the three levels of planning essential for ministry
              effectiveness:
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base md:text-lg mb-6">
              <li>
                Strategic Planning – focused on long-term vision, set by the Board
              </li>
              <li>
                Tactical Planning – driven by mid-term goals and implemented by
                management
              </li>
              <li>
                Operational Planning – daily execution handled by ministry teams
              </li>
            </ul>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              These teachings were informative and transformational.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              At the end of the day, the Foundation honored 23 participants with
              certificates of participation. This served as both recognition and
              encouragement for their commitment to the ministry’s growth and
              governance.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={heroTwo}
              alt="MDM Leadership Seminar"
              className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
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
    </div>
  );
};

export default New;
