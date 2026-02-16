import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet-async";
import hero from "../../assets/images/hero.jpg";
import mother from "../../assets/images/mother.jpg";
import handthree from "../../assets/images/handthree.jpg";
import { Eye, Goal, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import RecentBlogs from "./components/recentBlogs.jsx";
import Footer from "../../components/footer";

function Landing() {
  const DONATION_URL = import.meta.env.VITE_DONATION_URL;
  const handleDonate = () => {
    window.open(DONATION_URL, "_blank", "noopener,noreferrer");
  };
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

      <Helmet>
        <title>Faith-Based NGO in Ghana | Pleroma Sycamore Foundation</title>
        <meta
          name="description"
          content="Pleroma Sycamore Foundation is a faith-based NGO in Ghana dedicated to community development, youth empowerment, Christian outreach, and social transformation."
        />
      </Helmet>


      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div
          className="
      relative z-10
      min-h-screen
      flex items-center justify-center
      px-4 sm:px-6 md:px-12
      pt-[120px]
    "
        >
          <motion.div
            className="w-full max-w-5xl text-center flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mt-2">
              Empowered by Faith, Guided by Purpose
            </h2>

            <p className="text-white/90 text-base sm:text-lg max-w-3xl font-light">
              Partnering with the Holy Spirit to transform businesses, communities,
              and lives for God’s glory.
            </p>


          </motion.div>
        </div>
      </div>





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
            <p className="text-gray-800 font-bold text-sm md:text-lg uppercase tracking-wide">
              Welcome to
            </p>
            <h2 className="text- font-bold text-3xl sm:text-4xl lg:text-5xl leading-snug mb-4">
              Pleroma Sycamore Foundation (PSF)
            </h2>
            <p className="text-gray-600 mt-4 md:mt-6 leading-relaxed text-base sm:text-lg">
              PSF is a Christian resource organization committed to empowering individuals and communities under the guidance of the Holy Spirit. Through partnership, prayer, and service, we seek to reflect God’s love and bring transformation to lives.
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
              alt="Community empowerment initiative by Pleroma Sycamore Foundation in Ghana"
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

      <section className="relative py-20 sm:py-28 bg-gray-50 overflow-hidden">

        {/* Soft background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(29,98,5,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Partner With Us in Advancing God’s Work
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              Your generosity supports a trusted Christian NGO in Ghana,
              helping us empower youth, care for vulnerable groups, and
              strengthen communities through faith-driven programs.Your generosity helps us remain agile and faithful in serving
              communities, empowering the young, caring for the aged, and
              advancing God’s mission through love and service.
            </p>

            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <HeartHandshake className="text-[#1D6205]" size={20} />
                <span>Faith-driven programs with lasting impact</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#1D6205]" size={20} />
                <span>Secure giving through our trusted payment partner</span>
              </div>
            </div>
          </motion.div>

          {/* Right donation card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Support Our Mission
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Every gift, no matter the size, helps transform lives
              and strengthen Christian communities.
            </p>

            <motion.button
              onClick={handleDonate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#1D6205] hover:bg-[#155304] text-white font-semibold py-4 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Donate
            </motion.button>

            <p className="text-xs text-gray-500 mt-4">
              You’ll be redirected to our secure payment partner.
              We do not store card or mobile money details.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
