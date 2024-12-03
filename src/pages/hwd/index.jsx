import Navbar from "../../components/navbar";
import { Briefcase, Heart, Users, Book } from "lucide-react";
import man from "../../assets/man.jpg";
import womanTwo from "../../assets/images/womanTwo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const HowWeWork = () => {
  const programs = [
    {
      id: 1,
      title: "Entrepreneurship Development",
      description:
        "Through the Mustard Seed Christian Entrepreneurship Program, we empower businesses to thrive under Christian principles.",
      icon: <Briefcase className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 2,
      title: "Youth & Children Initiatives",
      description:
        "Programs like Youth for Jesus (Y4J) and Children for Jesus (C4J) include annual camp meetings to nurture their faith.",
      icon: <Users className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 3,
      title: "Schools of Ministry",
      description:
        "Masterclasses like the School of Evangelism and Sycamore School of Christian Leadership build future leaders for Christ.",
      icon: <Book className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
    {
      id: 4,
      title: "Community Care",
      description:
        "Initiatives like Home and Day Care for the Aged and the Soup Kitchen provide essential services to the community.",
      icon: <Heart className="w-10 h-10 text-[#1D6205] mr-4" />,
      image: man,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${womanTwo})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h3 className="text-white text-4xl font-bold">How We Work</h3>
        </div>
      </div>

      {/* New Section Beneath Header */}

      {/* About Us Section */}
      <motion.div
        className="py-16 px-6 md:px-12 bg-gray-100"
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        initial={{ x: "0vw", opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }} // Changed once to false to make it trigger on every scroll
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* <motion.h4
              className="text-green-500 uppercase tracking-wide font-semibold mb-2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Guided by the Holy Spirit
            </motion.h4> */}
           <motion.h2
  className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  Guided by the Holy Spirit
</motion.h2>

<motion.p
  className="text-gray-600 text-base md:text-lg mb-6"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  We believe in partnerships that are spirit-led, creating programs and initiatives that bring transformation to businesses, communities, and the world at large.
</motion.p>

<motion.ul
  className="list-disc list-inside text-gray-600 text-base md:text-lg space-y-4"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <li>By supporting Christian business through entrepreneurship development.</li>
  <li>By supporting the evangelistic move and providing social interventions in our communities.</li>
  <li>By setting up homes for the aged and children care within our social setting.</li>
  <li>By setting up and operating a Christian resource center where Christians of all denominations can come together to praise, worship, and honor our God.</li>
  <li>By setting up a worldwide Christian media ministry to the world.</li>
</motion.ul>

          </div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img
              src={man} // Replace with your image path
              alt="About Us"
              className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-8 bg-[#f9f9f9]">

        {/* Programs Section */}
        <div className="mt-8">
          <h2 className="text-[#1D6205] font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 text-center">
            Our Programs
          </h2>

          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-6xl mx-auto"
          >
            {programs.map((program) => (
              <SwiperSlide key={program.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {program.icon}
                      <h3 className="font-bold text-lg text-gray-800">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
