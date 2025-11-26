import Navbar from "../../components/navbar";
import hero from "../../assets/images/hero.jpg";
import mother from "../../assets/images/mother.jpg";
import handthree from "../../assets/images/handthree.jpg";
import { Eye, Goal } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import RecentBlogs from "./components/recentBlogs.jsx";
import Footer from "../../components/footer";

function Landing() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const oneTimePayment = [
    { amount: 20, link: "https://paystack.shop/pay/onetime20_pleroma-sycamore-foundation" },
    { amount: 50, link: "PASTE_LINK_FOR_50_HERE" },
    { amount: 100, link: "PASTE_LINK_FOR_100_HERE" },
    { amount: 200, link: "PASTE_LINK_FOR_200_HERE" },
  ];
  const monthlyAmounts = [
    { amount: 50, link: "https://paystack.shop/pay/monthly-donation_pleroma-sycamore-foundation" },
    { amount: 100, link: "https://paystack.shop/pay/monthly-donation_pleroma-sycamore-foundation" },
    { amount: 200, link: "PASTE_LINK_FOR_100_HERE" },
    { amount: 300, link: "PASTE_LINK_FOR_200_HERE" },
  ];
  
  const annualPayment = [
    { amount: 400, link: "https://paystack.shop/pay/annual-donation400_pleroma-sycamore-foundation" },
    { amount: 600, link: "https://paystack.shop/pay/annual-donation_pleroma-sycamore-foundation" },
    { amount: 1000, link: "PASTE_LINK_FOR_100_HERE" },
    { amount: 2000, link: "PASTE_LINK_FOR_200_HERE" },
  ];



  // Scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center pb-6 flex items-center justify-center text-center px-4 sm:px-6 md:px-12 pt-28 md:pt-32"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="relative z-10 w-full max-w-6xl mx-auto mt-8 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-white text-2xl sm:text-lg md:text-6xl font-bold leading-tight">
            Empowered by Faith, Guided by Purpose
          </h3>

          <p className="text-white text-base sm:text-lg md:text-lg max-w-3xl font-light mt-2 sm:mt-4">
            Partnering with the Holy Spirit to transform businesses, communities, and lives for God’s glory.
          </p>

          {/* Donation Section */}
          <div className="w-full mt-8 sm:mt-4">
            <h3 className="text-white font-bold text-xl mb-6">Donate to Support</h3>

            {/* Donation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* One-Time Card */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
                <a
                  href="https://paystack.com/pay/monthly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold py-3 transition"
                >
                  One Time
                </a>

                <div className="grid grid-cols-2 gap-3">
                  {oneTimePayment.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white text-black font-semibold py-3 hover:bg-[#1D6205] hover:text-white transition"
                    >
                      GHS {item.amount}
                    </a>
                  ))}
                </div>
              </div>

              {/* Monthly Card */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
                <a
                  href="https://paystack.com/pay/monthly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold py-3 transition"
                >
                  Monthly
                </a>

                <div className="grid grid-cols-2 gap-3">
                  {monthlyAmounts.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white text-black font-semibold py-3 hover:bg-[#1D6205] hover:text-white transition"
                    >
                      GHS {item.amount}
                    </a>
                  ))}
                </div>
              </div>

              {/* Annual Card */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
                <a
                  href="https://paystack.com/pay/monthly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold py-3 transition"
                >
                  Annual
                </a>

                <div className="grid grid-cols-2 gap-3">
                  {annualPayment.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white text-black font-semibold py-3 hover:bg-[#1D6205] hover:text-white transition"
                    >
                      GHS {item.amount}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div >
      </div >


      {/* About Section */}
      < motion.div
        className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-28 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-gray-800 font-bold text-sm md:text-lg uppercase tracking-wide">
              Welcome to
            </h5>
            <h2 className="text- font-bold text-3xl sm:text-4xl lg:text-5xl leading-snug mb-4">
              Pleroma Sycamore Foundation (PSF)
            </h2>
            <p className="text-gray-600 mt-4 md:mt-6 leading-relaxed text-base sm:text-lg">
              PSF is a Christian resource organization dedicated to empowering individuals
              and communities under the guidance of the Holy Spirit. Together with our
              Christian partners, we work to enforce God’s will on earth, creating a world
              filled with love and empowerment.
            </p>
            <Link to="/who-we-are">
              <motion.button
                className="mt-8 bg-[#1D6205] text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-[#155304] shadow-md hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex justify-center md:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={handthree}
              alt="Pleroma foundation illustration"
              className="rounded-2xl w-[85%] sm:w-[90%] md:w-[95%] lg:w-full max-w-lg md:max-w-xl object-cover shadow-2xl"
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }} />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1D6205]/20 blur-3xl rounded-full hidden md:block"></div>
          </motion.div>
        </div>
      </motion.div >

      {/* Mission and Vision Section */}
      < motion.div
        className="relative py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mother})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 max-w-6xl mx-auto">
          {/* Vision Box */}
          <motion.div
            className="bg-black bg-opacity-70 p-8 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <Eye className="w-12 h-12 text-[#1D6205] mx-auto mb-4" />
            <h3 className="font-bold text-2xl mb-2 text-white">Vision</h3>
            <p className="text-white">
              To make the world a place of love and empowerment by the Holy Spirit in these end times.
            </p>
          </motion.div>

          {/* Mission Box */}
          <motion.div
            className="bg-black bg-opacity-70 p-8 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <Goal className="w-12 h-12 text-[#1D6205] mx-auto mb-4" />
            <h3 className="font-bold text-2xl mb-2 text-white">Mission</h3>
            <p className="text-white">
              Working with Christian partners to empower God's people to fulfil God's purpose for the world.
            </p>
          </motion.div>
        </div>
      </motion.div >

      {/* Scroll to Top Button */}
      {
        showScrollButton && (
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
        )
      }

      <RecentBlogs />
      <Footer />
    </>
  );
}

export default Landing;
