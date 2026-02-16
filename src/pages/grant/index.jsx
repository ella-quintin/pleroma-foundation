import { motion } from "framer-motion";
import grant from "../../assets/images/grant.jpg";
import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/footer";

const Grant = () => {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });

  return (
    <>
      <Navbar />

      <Helmet>
        <title>Grants & Funding Opportunities | Pleroma Sycamore Foundation – Faith-Based NGO in Ghana</title>
        <meta
          name="description"
          content="Explore grant and funding opportunities from Pleroma Sycamore Foundation, a faith-based NGO in Ghana supporting community development, youth empowerment, Christian outreach, and social impact projects."
        />
      </Helmet>


      <motion.div
        className="bg-gray-50 mt-20 overflow-x-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero */}
        <section
          className="relative h-[320px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${grant})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center px-4"
          >
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
              Funding Opportunities for Impact Projects
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base">
              Supporting faith-driven initiatives that transform lives and communities in Ghana
            </p>
          </motion.div>
        </section>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 space-y-24">

          {/* Intro */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Call for Grants – 2026
            </h2>
            <p className="text-xl font-semibold text-[#1D6205] mb-4">
              Pleroma-Sycamore Small Grants Program
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Empowering visionaries to build communities rooted in faith,
              learning, service, and sustainable transformation.
            </p>
          </motion.div>

          {/* Overview */}
          <motion.section
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-[#1D6205] mb-4">
              Overview
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The <span className="font-medium text-[#1D6205]">Pleroma Sycamore Foundation</span> invites
              individuals, community groups, and institutions to submit project ideas aligned with
              our mission of advancing sustainable community development, education, and social
              transformation. We support creative initiatives with measurable impact and strong
              community participation.
            </p>
          </motion.section>

          {/* Areas of Call */}
          <motion.section
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="show"
          >
            <h3 className="text-2xl font-semibold text-[#1D6205] mb-6">
              Areas of Call
            </h3>

            <div className="overflow-x-auto rounded-2xl shadow-md bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-[#1D6205] text-white">
                  <tr>
                    {["No.", "Grants", "Focus Area", "Type", "Limit"].map(h => (
                      <th key={h} className="px-4 py-3 text-left font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["1", "2", "Christian Youth Empowerment Programs", "Small", "₵10,000"],
                    ["2", "2", "Christian Children Development in Christ", "Small", "₵10,000"],
                    ["3", "2", "Ministry Support (Annual)", "Small", "₵12,000"],
                    ["4", "4", "Mission & Evangelism Outreach (Quarterly)", "Micro", "₵5,000"],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#1D6205]/5 transition">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Eligibility */}
          <motion.section
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-[#1D6205] mb-6">
              Eligibility
            </h3>
            <p className="text-gray-600 mb-4">
              Grant applications are open to the following eligible groups and organizations:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              {[
                "Registered community-based organizations and NGOs",
                "Educational and faith-based institutions",
                "Youth and women’s groups",
                "Social enterprises and grassroots innovators",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#1D6205] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>



          {/* Application Process */}
          <motion.section
            variants={fadeUp(0.6)}
            initial="hidden"
            animate="show"
          >
            <h3 className="text-2xl font-semibold text-[#1D6205] mb-10">
              Application Process
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Stage 1",
                  subtitle: "Expression of Interest",
                  detail: "Submit a brief EOI. Deadline: 31 January, 2026.",
                },
                {
                  title: "Stage 2",
                  subtitle: "Review & Shortlisting",
                  detail: "Shortlisted applicants invited by 15 February, 2026.",
                },
                {
                  title: "Stage 3",
                  subtitle: "Full Proposal",
                  detail: "Complete proposals due 20 February, 2026.",
                },
                {
                  title: "Stage 4",
                  subtitle: "Final Selection",
                  detail: "Announcement on 25 February, 2026.",
                },
              ].map((stage, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6"
                >
                  <span className="inline-block mb-3 text-xs font-semibold bg-[#1D6205] text-white px-3 py-1 rounded-full">
                    {stage.title}
                  </span>
                  <h4 className="font-semibold text-[#1D6205] mb-2">
                    {stage.subtitle}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {stage.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Apply CTA */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <a
              href="https://forms.gle/gH84QLP1gWn7dZTw5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1D6205] hover:bg-[#155304] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition"
            >
              Apply for Grant
            </a>

            <p className="text-xs text-gray-500 mt-4">
              Applications are reviewed transparently. The Foundation does not charge any application fees.
            </p>

          </motion.div>

        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Grant;
