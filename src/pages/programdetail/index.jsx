import { Link, useParams } from "react-router-dom";
import SEO from "../../components/seo";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import { programs, getProgramBySlug } from "../../data/programs";

const Heading = ({ children, light }) => (
  <div>
    <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${light ? "text-white" : "text-gray-800"}`}>
      {children}
    </h2>
    <div className={`w-16 h-1 mb-6 ${light ? "bg-white/50" : "bg-[#1D6205]"}`} />
  </div>
);

const FocusAreaItem = ({ area, index, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-[#1D6205]/30 transition-colors">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 text-left px-5 sm:px-6 py-5"
      >
        <span className="w-8 h-8 rounded-full bg-[#1D6205]/10 text-[#1D6205] text-sm font-bold flex items-center justify-center flex-shrink-0">
          {index + 1}
        </span>
        <div className="flex-grow">
          <h3 className="font-bold text-gray-800 text-base sm:text-lg">
            {area.name}
          </h3>
          <p className="text-[#1D6205] text-sm font-medium mt-0.5">
            {area.tagline}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#1D6205] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 sm:pl-[4.25rem] pb-6 pt-1 border-t border-gray-100">
              <div className="space-y-3 mt-4">
                {area.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {area.bulletsIntro && (
                <p className="text-gray-700 font-semibold text-sm mt-5 mb-3">
                  {area.bulletsIntro}
                </p>
              )}

              <ul className="space-y-3">
                {area.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#1D6205] mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      <span className="font-semibold text-gray-700">{b.label}: </span>
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>

              {area.closing && (
                <p className="text-gray-500 text-sm leading-relaxed mt-5 italic">
                  {area.closing}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = getProgramBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!program) {
    return (
      <>
        <SEO
          title="Program Not Found | Pleroma Sycamore Foundation"
          description="The program you're looking for could not be found."
          noindex
        />
        <div
          className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
          style={{ marginTop: "var(--nav-height)" }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Program not found
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            We couldn't find the program you're looking for. It may have been
            renamed or removed.
          </p>
          <Link
            to="/how-we-work#programs"
            className="inline-flex items-center gap-2 bg-[#1D6205] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#155304] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Programs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const otherPrograms = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <SEO
        title={`${program.title} | Pleroma Sycamore Foundation`}
        description={program.intro[0].slice(0, 155)}
        path={`/our-programs/${program.slug}`}
        image={program.image}
      />

      {/* Hero */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${program.image})`, marginTop: "var(--nav-height)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center max-w-3xl">
            {program.title}
          </h1>
          <p className="text-white/85 text-base sm:text-lg text-center max-w-2xl mt-3">
            {program.tagline}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-lg py-4">
          <Link
            to="/how-we-work#programs"
            className="inline-flex items-center gap-2 text-[#1D6205] font-semibold text-sm hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Programs
          </Link>
        </div>
      </div>

      {/* Intro + Purpose, with photo */}
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-lg py-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <motion.div
          initial={{ x: -40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 mb-8">
            {program.intro.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <Heading>Our Purpose</Heading>
          <div className="space-y-4">
            {program.purpose.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:sticky lg:top-28"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={program.image}
            alt={program.title}
            className="rounded-2xl shadow-lg w-full h-80 lg:h-[26rem] object-cover"
          />
        </motion.div>
      </div>

      {/* Our Focus Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-lg">
          <Heading>Our Focus Areas</Heading>
          <p className="text-gray-500 text-sm -mt-4 mb-6">
            Tap a focus area to read more.
          </p>
          <div className="space-y-4">
            {program.focusAreas.map((area, i) => (
              <FocusAreaItem key={area.name} area={area} index={i} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Who It Serves + What We Do */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-lg grid md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <Heading>Who It Serves</Heading>
            <div className="space-y-4">
              {program.whoServes.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>
            <Heading>What We Do</Heading>
            <div className="space-y-4">
              {program.howWeWork.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Change We Seek */}
      <section className="bg-[#1D6205] py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-lg">
          <Heading light>The Change We Seek</Heading>
          <p className="text-white/85 leading-relaxed mb-6 -mt-2">
            {program.changeWeSeek.intro}
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {program.changeWeSeek.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white/70 mt-1 flex-shrink-0" />
                <span className="text-white/90 text-sm sm:text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/70 text-sm leading-relaxed mt-7 italic">
            {program.changeWeSeek.closing}
          </p>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-screen-lg bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center">
          <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4">
            {program.getInvolved.heading}
          </h2>
          <div className="space-y-3 max-w-2xl mx-auto">
            {program.getInvolved.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <p className="text-gray-800 font-semibold mt-4 mb-8 max-w-2xl mx-auto">
            {program.getInvolved.closing}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                window.open(
                  import.meta.env.VITE_DONATION_URL,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="inline-flex items-center gap-2 bg-[#1D6205] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#155304] transition-colors duration-300"
            >
              Support This Program
            </button>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 border border-[#1D6205] text-[#1D6205] font-semibold px-6 py-3 rounded-full hover:bg-[#1D6205]/5 transition-colors duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="bg-white py-16 px-6 lg:px-8 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl text-center mb-3">
            Explore Our Other Programs
          </h2>
          <div className="w-16 h-1 bg-[#1D6205] mx-auto mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPrograms.map((other, index) => (
              <motion.div
                key={other.id}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
              <Link
                to={`/our-programs/${other.slug}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <img
                  src={other.image}
                  alt={other.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#1D6205] transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                    {other.tagline}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[#1D6205] font-semibold text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProgramDetail;
