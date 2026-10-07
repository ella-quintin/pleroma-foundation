import SEO from "../../components/seo";
import { ArrowRight } from "lucide-react";
import hands from "../../assets/images/hands.jpg";
import womanTwo from "../../assets/images/womanTwo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";
import { programs } from "../../data/programs";

const HowWeWork = () => {
  const programsRef = useRef(null);
  const location = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll to the programs section if the hash matches
  useEffect(() => {
    if (location.hash === "#programs" && programsRef.current) {
      programsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  // Show or hide the scroll-to-top button
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
    <>
      {/* Canonical always points to /how-we-do-it: this component also
          serves /how-we-work (kept live on purpose), and a single canonical
          URL stops search engines treating the two as duplicate content. */}
      <SEO
        title="What We Do | Pleroma Sycamore Foundation"
        description="See how Pleroma Sycamore Foundation delivers community development, youth empowerment, Christian outreach, and social support programs across Ghana."
        path="/how-we-do-it"
        image={womanTwo}
      />


      {/* Header Section */}
      <motion.div
        className="relative w-full h-64 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${womanTwo})`, marginTop: "var(--nav-height)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.h1
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-100 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Led by Compassion and Purpose
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              As a faith-based nonprofit organization in Ghana, we believe in spirit-led
              partnerships that result in impactful programs addressing spiritual,
              social, and economic needs within communities.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
              <li>Supporting Christian businesses through entrepreneurship development.</li>
              <li>Providing social interventions in our communities.</li>
              <li>Setting up homes for the aged and childcare programs.</li>
              <li>Operating a Christian resource center for worship and praise.</li>
              <li>Expanding a global Christian media ministry.</li>
            </ul>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={hands}
              alt="About Pleroma Sycamore Foundation"
              className="rounded-2xl shadow-lg w-full h-full sm:w-96 sm:h-96 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>


      <div className="px-4 sm:px-8 lg:px-16 py-10 mb-16 bg-[#f9f9f9]">
        <div ref={programsRef} id="programs" className="py-8">

          <motion.h2
            className="text-[#1D6205] font-bold text-2xl sm:text-3xl lg:text-4xl mb-12 text-center"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Programs
          </motion.h2>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-full mx-auto  pb-10"
          >
            {programs.map((program) => (
              <SwiperSlide key={program.id} style={{ height: "auto" }}>
                <div
                  className="
              bg-white
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
                h-full
                mb-8

                mx-auto
                "
                >

                  {/* Image Section */}
                  <div className="relative">

                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-60 object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Program Number */}
                    

                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow text-center">

                    <div className="min-h-[72px]">
                      <h3 className="font-bold text-lg text-gray-900 leading-snug line-clamp-2">
                        {program.title}
                      </h3>

                      <p className="text-[#1D6205] text-sm font-medium mt-1 line-clamp-1">
                        {program.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm mt-4 line-clamp-3 min-h-[66px]">
                      {program.intro[0]}
                    </p>

                    <div className="mt-5 pt-5 border-t border-gray-100">
                      <Link
                        to={`/our-programs/${program.slug}`}
                        className="inline-flex items-center gap-1.5 text-[#1D6205] font-semibold text-sm hover:underline group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>



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

export default HowWeWork;
