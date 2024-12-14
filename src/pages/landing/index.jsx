import Navbar from "../../components/navbar";
import man from "../../assets/man.jpg";
import woman from "../../assets/woman.jpg";
import mother from "../../assets/images/mother.jpg";
import { Eye, Goal, HandHeart } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";

const Landing = () => {

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
      <div>
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${woman})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6 md:px-12">
            {/* Heading */}
            <motion.h3
              className="text-white text-3xl md:text-5xl font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Empowered by Faith, Guided by Purpose
            </motion.h3>

            {/* Subtext */}
            <motion.p
              className="text-white text-base md:text-lg mt-4 max-w-lg md:max-w-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Partnering with the Holy Spirit to transform businesses, communities, and lives for God’s glory.
            </motion.p>

          </div>
        </motion.div>


        {/* About Section */}
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-20 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div>
              <h5 className="text-gray-800 font-bold text-sm md:text-lg uppercase">
                Welcome to
              </h5>
              <h2 className="text-[#1D6205] font-bold text-2xl sm:text-3xl lg:text-5xl leading-snug">
                Pleroma Sycamore Foundation (PSF)
              </h2>
              <p className="text-gray-600 mt-4 md:mt-6">
                PSF is a Christian resource organization dedicated to empowering individuals and communities under the guidance of the Holy Spirit. Together with our Christian partners, we work to enforce God’s will on earth, creating a world filled with love and empowerment.
              </p>
              <Link to='/who-we-are'>
                <button className="mt-6 bg-[#1D6205] text-white px-6 py-3 rounded-md font-bold hover:bg-[#155304]">
                  Read More
                </button>
              </Link>
            </div>

            {/* Image Content */}
            <div className="relative flex justify-center md:justify-center">
              {/* <div className="bg-[#1D6205] w-3/4 sm:w-2/3 rounded-lg">
             </div> */}
              <img
                src={woman}
                alt="woman sitting"
                className="w-3/4 sm:w-2/3 rounded-lg relative"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="relative py-20 px-6 sm:px-10 md:px-16 lg:px-24 mb-28"> 
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${mother})` }}
          >
            <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 z-10">
            {/* Vision Box */}
            <div className="group bg-black bg-opacity-40 text-white p-2 md:p-1 rounded-2xl shadow-md flex flex-col justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <Eye className="w-16 h-16 md:w-14 md:h-14 mb-4 text-white group-hover:text-[#145503]" />
              <h3 className="font-bold text-xl md:text-2xl mb-2">Vision</h3>
              <p className="text-center text-base md:text-lg">
                To make the world a place of love and empowerment by the Holy Spirit in these end times.
              </p>
            </div>

            {/* Mission Box */}
            <div className="group bg-black bg-opacity-40 text-white p-2 md:p-1 rounded-2xl shadow-md flex flex-col justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <Goal className="w-16 h-16 md:w-14 md:h-14 mb-4 text-white group-hover:text-[#145503]" />
              <h3 className="font-bold text-xl md:text-2xl mb-2">Mission</h3>
              <p className="text-center text-base md:text-lg">
                Working with Christian partners to empower God’s work and people to fulfill God’s purpose for the World.
              </p>
            </div>
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
    </>
  );
};

export default Landing;
