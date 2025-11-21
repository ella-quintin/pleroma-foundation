import { motion } from "framer-motion";
import grant from "../../assets/images/grant.jpg";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Grant = () => {
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
          style={{ backgroundImage: `url(${grant})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
            <motion.h3
              className="text-white text-4xl font-bold text-center drop-shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Funding Opportunities for Impact Projects
            </motion.h3>
          </div>
        </motion.section>

        {/* Decorative soft glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(29,98,5,0.06),transparent_70%)] pointer-events-none"></div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative space-y-24 px-6 md:px-8 py-8">
          {/* Header Text */}
          <motion.div
            variants={fadeUp(0.1)}
            className="text-center mt-4 md:mt-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              Call for Grants – 2025
            </h1>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1D6205] mb-3">
              Pleroma-Sycamore Small Grants Program
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering visionaries to build communities rooted in faith,
              learning, and transformation.
            </p>
          </motion.div>

          {/* Overview */}
          <motion.div variants={fadeUp(0.2)} className="space-y-3">
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
              and strong community participation.
            </p>
          </motion.div>

          {/* Application Process */}
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
                    y: -5,
                    transition: { type: "spring", stiffness: 250 },
                  }}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl p-6 relative"
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
                    ["1", "2", "Christian Youth Empowerment Programs", "Small", "₵10,000"],
                    ["2", "2", "Christian Children Development in Christ", "Small", "₵10,000"],
                    ["3", "2", "Ministry Support (annual)", "Small", "₵12,000"],
                    ["4", "4", "Mission & Evangelism Outreach (per quarter)", "Micro", "₵5,000"],
                  ].map((r, i) => (
                    <motion.tr
                      key={i}
                      variants={fadeUp(0.3 + i * 0.1)}
                      whileHover={{
                        backgroundColor: "rgba(29, 98, 5, 0.08)",
                        transition: { duration: 0.3 },
                      }}
                      className={`border-t border-gray-100 ${
                        i % 2 ? "bg-gray-50/40" : ""
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
                  <span className="text-[#1D6205] font-bold text-lg leading-none">•</span>
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
      </motion.div>

      <Footer />
    </>
  );
};

export default Grant;
