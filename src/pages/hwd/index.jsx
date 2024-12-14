import Navbar from "../../components/navbar";
import { Briefcase, Heart, Users, Book, Video, PersonStanding, Baby, BookOpen, Soup } from "lucide-react";
import boy from "../../assets/boy.jpg";
import man from "../../assets/man.jpg";
import womanTwo from "../../assets/images/womanTwo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";

const HowWeWork = () => {
  const programsRef = useRef(null);
  useEffect(() => {
    // Check if the hash is present in the URL
    if (window.location.hash === "#programs") {
      programsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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

  const programs = [
    {
      id: 1,
      title: "Mustard Seed Christian Entrepreneurship Development Program",
      description:
        "Empowering businesses to thrive under Christian principles through entrepreneurship development.",
      icon: <Briefcase className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 2,
      title: "Youth For Jesus (Y4J) Initiative",
      description:
        "A faith-building initiative aimed at equipping the youth to live Christ-centered lives.",
      icon: <PersonStanding className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 3,
      title: "Children For Jesus (C4J) Initiative",
      description:
        "Programs to nurture and guide children in their faith journey through Christ-centered teachings.",
      icon: <Baby className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 4,
      title: "School of Evangelism - Masterclass",
      description:
        "A masterclass for equipping believers with the knowledge and skills to effectively share the gospel.",
      icon: <BookOpen className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 5,
      title: "Sycamore School of Christian Leadership - Masterclass",
      description:
        "A program to develop Christian leaders equipped to lead with excellence and integrity.",
      icon: <Book className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 6,
      title: "Home and Day Care for the Aged",
      description:
        "Providing compassionate care and support for the elderly within the community.",
      icon: <Heart className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 7,
      title: "Soup Kitchen",
      description:
        "Serving warm meals to the needy, embodying the love and compassion of Christ.",
      icon: <Soup className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 8,
      title: "Pleroma-Sycamore Media Ministry",
      description:
        "Using media to spread the gospel and positively influence communities through Christ-centered content.",
      icon: <Video className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
  ];


  return (
    <>
      <Navbar />

      {/* Header Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${womanTwo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            How We Work
          </h3>
        </div>
      </div>

      <motion.div
        className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Guided by the Holy Spirit
            </motion.h2>
            <motion.p className="text-gray-600 text-base sm:text-lg mb-6">
              We believe in partnerships that are spirit-led, creating programs and initiatives that bring transformation.
            </motion.p>
            <motion.ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
              <li>Supporting Christian businesses through entrepreneurship development.</li>
              <li>Providing social interventions in our communities.</li>
              <li>Setting up homes for the aged and childcare programs.</li>
              <li>Operating a Christian resource center for worship and praise.</li>
              <li>Expanding a global Christian media ministry.</li>
            </motion.ul>
          </div>
          <motion.div className="flex justify-center">
            <img
              src={boy}
              alt="About Us"
              className=" rounded-2xl shadow-lg w-full h-full sm:w-96 sm:h-96 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="px-4 sm:px-8 lg:px-16 py-8 bg-[#f9f9f9]">
        <div ref={programsRef} id="programs" className="py-8">
          <h2 className="text-[#1D6205] font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 text-center">
            Our Programs
          </h2>
          <div className="overflow-hidden">
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
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 mx-auto">
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
                  </div>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
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
