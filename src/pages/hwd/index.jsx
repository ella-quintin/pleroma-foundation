import Navbar from "../../components/navbar";
import { Briefcase, Heart, Users, Book, Video, PersonStanding, Baby, BookOpen, Soup } from "lucide-react";
import boy from "../../assets/boy.jpg";
import man from "../../assets/man.jpg";
import hands from "../../assets/images/hands.jpg";
import womanTwo from "../../assets/images/womanTwo.jpg";
import womanSelling from "../../assets/images/womanSelling.jpg";
import youth from "../../assets/images/youth.png";
import children from "../../assets/images/children.jpg";
import bible from "../../assets/images/bible.jpg";
import leadership from "../../assets/images/leadership.jpg";
import helping from "../../assets/images/helping.jpg";
import food from "../../assets/images/food.jpg";
import media from "../../assets/images/media.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";

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

  const programs = [
    {
      id: 1,
      title: "Mustard Seed Christian Entrepreneurship Development Program",
      description:
        "Empowering businesses to thrive under Christian principles through entrepreneurship development.",
      icon: <Briefcase className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: womanSelling,
    },
    {
      id: 2,
      title: "Youth For Jesus (Y4J) Initiative",
      description:
        "A faith-building initiative aimed at equipping the youth to live Christ-centered lives.",
      icon: <PersonStanding className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: youth,
    },
    {
      id: 3,
      title: "Children For Jesus (C4J) Initiative",
      description:
        "Programs to nurture and guide children in their faith journey through Christ-centered teachings.",
      icon: <Baby className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: children,
    },
    {
      id: 4,
      title: "School of Evangelism - Masterclass",
      description:
        "A masterclass for equipping believers with the knowledge and skills to effectively share the gospel.",
      icon: <BookOpen className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: bible,
    },
    {
      id: 5,
      title: "Sycamore School of Christian Leadership - Masterclass",
      description:
        "A program to develop Christian leaders equipped to lead with excellence and integrity.",
      icon: <Book className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: leadership,
    },
    {
      id: 6,
      title: "Home and Day Care for the Aged",
      description:
        "Providing compassionate care and support for the elderly within the community.",
      icon: <Heart className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: helping,
    },
    {
      id: 7,
      title: "Soup Kitchen",
      description:
        "Serving warm meals to the needy, embodying the love and compassion of Christ.",
      icon: <Soup className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: food,
    },
    {
      id: 8,
      title: "Pleroma-Sycamore Media Ministry",
      description:
        "Using media to spread the gospel and positively influence communities through Christ-centered content.",
      icon: <Video className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: media,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <motion.div
        className="relative w-full h-64 bg-cover bg-center overflow-hidden mt-20"
        style={{ backgroundImage: `url(${womanTwo})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.h3
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.h3>
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
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Guided by the Holy Spirit
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              We believe in partnerships that are spirit-led, creating programs and initiatives that bring transformation.
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
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={hands}
              alt="About Us"
              className="rounded-2xl shadow-lg w-full h-full sm:w-96 sm:h-96 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="px-4 sm:px-8 lg:px-16 py-10 mb-16 bg-[#f9f9f9]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div ref={programsRef} id="programs" className="py-8">
          <motion.h2
            className="text-[#1D6205] font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 text-center"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Programs
          </motion.h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-full mx-auto"
          >
            {programs.map((program) => (
              <SwiperSlide key={program.id}>
                <motion.div
                  className="bg-white rounded-lg shadow-lg overflow-hidden w-72 mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      {program.icon}
                      <h3 className="font-bold text-md text-gray-800">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

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
