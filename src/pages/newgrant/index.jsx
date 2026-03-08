import { motion } from "framer-motion";
import grant from "../../assets/images/grant.jpg";
import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/footer";

const NewGrant = () => {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  });


  return (
    <>
      <Navbar />

      <Helmet>
        <title>Grants & Funding Opportunities | Pleroma Sycamore Foundation – Faith-Based NGO in Ghana</title>
        <meta
          name="description"
          content="Grant applications for the Pleroma-Sycamore Small Grants Program 2026 are currently closed. Stay connected for updates on the next funding cycle."
        />
      </Helmet>

      <motion.div
        className="bg-gray-50 mt-20 overflow-x-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* ── Hero — structure untouched, overlay improved ── */}
        <section
          className="relative h-[320px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${grant})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black/80" />
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

        {/* ── Closed Notice ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center">

            {/* Animated stamp icon */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative flex items-center justify-center w-24 h-24 mx-auto mb-8"
            >
              {/* outer pulse ring */}
              <span className="absolute inset-0 rounded-full bg-red-100 animate-ping opacity-30 pointer-events-none" />
              {/* outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-red-200" />
              {/* inner circle */}
              <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-dashed border-red-300 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate="show"
              className="flex justify-center mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
                Applications Closed
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="show"
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-snug"
            >
              The 2026 Grant Cycle{" "}
              <span className="text-[#1D6205]">Has Closed</span>
            </motion.h2>

            {/* Decorative divider */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center gap-2 mb-7"
            >
              <div className="w-10 h-px bg-[#1D6205]/25 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-[#1D6205]/50" />
              <div className="w-10 h-px bg-[#1D6205]/25 rounded-full" />
            </motion.div>

            {/* Body copy */}
            <motion.p
              variants={fadeUp(0.45)}
              initial="hidden"
              animate="show"
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4"
            >
              Thank you to everyone who expressed interest in the{" "}
              <span className="font-semibold text-[#1D6205]">
                Pleroma-Sycamore Small Grants Program
              </span>
              . The application window for this cycle is now officially closed and
              submissions are no longer being accepted.
            </motion.p>

            <motion.p
              variants={fadeUp(0.52)}
              initial="hidden"
              animate="show"
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-12"
            >
              We encourage all interested applicants to stay connected with us.
              The next funding cycle will be announced in due course — be among
              the first to know when applications reopen.
            </motion.p>

            

            {/* Lookout callout banner */}
            <motion.div
              variants={fadeUp(0.68)}
              initial="hidden"
              animate="show"
              className="flex items-start gap-3 bg-[#1D6205]/5 border border-[#1D6205]/15 rounded-2xl px-5 py-4 mb-10 text-left"
            >
              <svg
                className="w-5 h-5 text-[#1D6205] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z" />
              </svg>
              <p className="text-sm text-[#1D6205] leading-relaxed">
                <span className="font-semibold">Be on the lookout.</span> The next application
                cycle will open soon. Keep an eye on this page and our official communications
                for updates.
              </p>
            </motion.div>

            {/* Disabled CTA */}
            <motion.div
              variants={fadeUp(0.75)}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-3"
            >
              <span
                role="status"
                aria-label="Applications are currently closed"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-400 font-semibold px-10 py-4 rounded-full border border-gray-200 cursor-not-allowed select-none text-sm sm:text-base"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                Applications Currently Closed
              </span>
              <p className="text-xs text-gray-400">
                The Foundation does not charge any application fees. All future cycles will be announced officially.
              </p>
            </motion.div>

          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default NewGrant;