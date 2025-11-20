import Navbar from "../../components/navbar";
import man from "../../assets/man.jpg";
import woman from "../../assets/woman.jpg";
import hero from "../../assets/images/hero.jpg";
import mother from "../../assets/images/mother.jpg";
import handthree from "../../assets/images/handthree.jpg";
import { Eye, Goal } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import RecentBlogs from "./components/recentBlogs.jsx";
import Footer from "../../components/footer";

const Landing = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });
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
      <div className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-screen bg-cover bg-center mt-24"
          style={{ backgroundImage: `url(${hero})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6 md:px-12">
            <motion.h3
              className="text-white text-3xl md:text-5xl font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Empowered by Faith, Guided by Purpose
            </motion.h3>
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
        <motion.div
          className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-28 bg-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
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
              <h2 className="text-[#1D6205] font-bold text-3xl sm:text-4xl lg:text-5xl leading-snug mb-4">
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
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />

              {/* Optional gradient overlay for extra style */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1D6205]/20 blur-3xl rounded-full hidden md:block"></div>
            </motion.div>
          </div>
        </motion.div>


        {/* Mission and Vision Section */}
        <motion.div
          className="relative py-28 px-4 sm:px-8 md:px-12 lg:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mother})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 z-10">
            {/* Vision Box */}
            <motion.div
              className="bg-black bg-opacity-70 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
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
              className="bg-black bg-opacity-70 p-3 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <Goal className="w-12 h-12 text-[#1D6205] mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-2 text-white">Mission</h3>
              <p className="text-white">
                Working with Christian partners to empower God's people to fulfil God's purpose for the world.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#ECF2EA] text-gray-800 px-6 md:px-16 py-24 relative overflow-hidden"
      >
        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative space-y-24">
          {/* Header */}
          <motion.div variants={fadeUp(0.1)} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              Call for Grants – 2025  <br />
              <span className="text-amber-600"></span>
            </h1>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1D6205] mb-3">Pleroma-Sycamore Small Grants Program</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering visionaries to build communities rooted in faith,
              learning, and transformation.
            </p>
          </motion.div>

          {/* Overview */}
          <motion.div variants={fadeUp(0.2)} className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#1D6205]">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The{" "}
              <span className="font-medium text-[#1D6205]">
                Pleroma Sycamore Foundation
              </span>{" "}
              invites individuals, community groups, and institutions to submit
              project ideas aligned with our mission of advancing sustainable
              community development, education, and social transformation. We
              support creative and impactful initiatives with measurable outcomes
              and deep community relevance.
            </p>
          </motion.div>

          {/* Process */}
          <motion.div variants={fadeUp(0.3)} className="space-y-10">
            <h2 className="text-2xl font-semibold text-[#1D6205]">
              Application Process
            </h2>
            <motion.div
              variants={container}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "Stage 1",
                  subtitle: "Expression of Interest (EOI)",
                  detail:
                    "Submit a brief Expression of Interest outlining your idea and expected outcomes. Deadline: 15 Dec 2025.",
                },
                {
                  title: "Stage 2",
                  subtitle: "Initial Review & Selection",
                  detail:
                    "Our Program Team reviews EOIs. Shortlisted applicants are invited to submit full proposals by 30 Dec 2025.",
                },
                {
                  title: "Stage 3",
                  subtitle: "Full Application",
                  detail:
                    "Shortlisted applicants prepare complete proposals with guidance. Deadline: 10 Jan 2026.",
                },
                {
                  title: "Stage 4",
                  subtitle: "Board Review & Final Selection",
                  detail:
                    "Final selection by Pleroma Grants Sub-Committee. Announcement: 31 Jan 2026.",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(0.2 + i * 0.1)}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0.5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition p-6 relative"
                >
                  <div className="absolute -top-3 left-6 bg-[#1D6205] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {s.title}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D6205] mt-4 mb-2">
                    {s.subtitle}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Areas of Call */}
          <motion.div variants={fadeUp(0.4)}>
            <h2 className="text-2xl font-semibold text-[#1D6205] mb-4">
              Areas of Call
            </h2>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="overflow-x-auto rounded-xl shadow-lg"
            >
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-[#1D6205] text-white">
                  <tr>
                    {["No.", "Grants", "Activity", "Type", "Limit"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-medium tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ["1", "2", "Christian Youth Empowerment Programs", "Small", "$10,000"],
                    ["2", "2", "Christian Children Development in Christ", "Small", "$10,000"],
                    ["3", "2", "Ministry Support (annual)", "Small", "$12,000"],
                    ["4", "4", "Mission & Evangelism Outreach (per quarter)", "Micro", "$5,000"],
                  ].map((r, i) => (
                    <motion.tr
                      key={i}
                      variants={fadeUp(0.3 + i * 0.1)}
                      whileHover={{
                        backgroundColor: "rgba(29, 98, 5, 0.08)",
                        transition: { duration: 0.3 },
                      }}
                      className={`border-t border-gray-100 ${i % 2 ? "bg-gray-50/40" : ""
                        }`}
                    >
                      {r.map((c, j) => (
                        <td key={j} className="px-4 py-3 text-sm">
                          {c}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>

          {/* Eligibility */}
          <motion.div variants={fadeUp(0.5)} className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1D6205]">Eligibility</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                "Registered community-based organizations and NGOs",
                "Educational and faith-based institutions",
                "Youth and women’s groups",
                "Social enterprises and grassroots innovators",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp(0.3 + i * 0.1)}
                  className="flex items-start space-x-2"
                >
                  <span className="text-[#1D6205] font-bold text-lg leading-none">
                    •
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Apply Button */}
          <motion.div
            variants={fadeUp(0.6)}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <a
              href="https://forms.gle/gH84QLP1gWn7dZTw5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1D6205] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-[#155304] transition-transform duration-300"
            >
              Apply Now
            </a>
          </motion.div>

        </div>
      </motion.section>

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
      <RecentBlogs />
      <Footer />
    </>
  );
};

export default Landing;
