import woman from "../../assets/woman.jpg";
import Navbar from '../../components/navbar';
import { Helmet } from "react-helmet-async";
import man from "../../assets/man.jpg";
import boy from "../../assets/boy.jpg";
import handthree from "../../assets/images/handthree.jpg";
import eric from "../../assets/images/eric.png";
import adokarle from "../../assets/images/adokarle.jpeg";
import vera from "../../assets/images/vera.png";
import kojo from "../../assets/images/kojo.png";
import abigail from "../../assets/images/abigail.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";

const WhoWeAre = () => {
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

  // Board members data - Update with your actual data
  const boardMembers = [
    {
      id: 1,
      name: "Eric Akumiah",
      position: "Founder & President",
      photo: eric,
      bio: "Eric Akumiah is the Founder and President of the Foundation, called to serve at the intersection of faith, leadership, and societal transformation. With over two decades of experience in digital development, governance, and capacity building across Africa and beyond, Eric brings to the Board a deep commitment to empowering young people to discover purpose, develop skills, and become agents of positive change in their communities.",
      fullProfile: `Eric Akumiah is the Founder and President of the Foundation, called to serve at the intersection of faith, leadership, and societal transformation. With over two decades of experience in digital development, governance, and capacity building across Africa and beyond, Eric brings to the Board a deep commitment to empowering young people to discover purpose, develop skills, and become agents of positive change in their communities.
A Chevening Scholar, Eric holds a Master’s degree in Communications Management from Strathclyde Business School, University of Strathclyde, Glasgow. His professional journey spans ICT infrastructure development, digital transformation, and cybersecurity leadership, including contributions to national-level initiatives that have strengthened institutional capacity and public-sector service delivery in Ghana and across the African continent .
Eric’s leadership philosophy is firmly grounded in Christian values. He believes that meaningful development must address both spiritual and practical needs, and that youth empowerment is central to fulfilling God’s mandate for stewardship, justice, and service on earth. Through mentorship, skills development, and values-based leadership, he is passionate about nurturing a new generation of young leaders who are ethically grounded, socially responsible, and driven by faith-inspired purpose.
Throughout his career, Eric has demonstrated a strong commitment to institution-building, collaboration, and service. He has worked extensively with governments, regional bodies, and international partners to design sustainable systems, build human capacity, and promote inclusive growth. These experiences inform his vision for the Foundation as a platform for transforming lives—particularly those of young people—through faith-based programs, education, leadership development, and community impact.
As Founder and President, Eric provides strategic leadership and spiritual direction to the Board, ensuring that the Foundation remains mission-driven, accountable, and aligned with its calling to serve God by empowering people, strengthening communities, and raising leaders for today and tomorrow`

    },

    {
      id: 2,
      name: "Vera Korlekuor Akumiah",
      position: "Board Secretary",
      photo: vera,
      bio: "Vera Korlekuor Akumiah is a communications and leadership professional with over two decades of experience serving in higher education, international development, and faith-inspired organisations.",
      fullProfile: `Vera Korlekuor Akumiah is a communications and leadership professional with over two decades of experience serving in higher education, international development, and faith-inspired organisations. She is deeply committed to advancing faith-based leadership, community transformation, and mentorship, particularly among young people and emerging leaders.
Vera currently serves as a Senior Assistant Registrar at the University of Professional Studies, Accra (UPSA), where she contributes to institutional governance, administrative leadership, and policy implementation, while also lecturing in Public Relations at the undergraduate level. Her professional journey has included service with respected organisations such as Plan International Ghana, the African Women’s Development Fund, the Association of African Universities, Right To Play Ghana, and Save the Children UK, where she supported strategic communication, programme development, and stakeholder engagement. 
She holds an MPhil in Leadership from UPSA and is an Associate Member of the Institute of Public Relations, Ghana. Vera is passionate about nurturing values-driven leadership and strengthening organisations that promote holistic community development. She is also an author, and her young adult novel Ebony Girl received recognition under the CODE Burt Award for African Young Adult Literature.
Through her work with the Pleroma Sycamore Foundation, Vera is dedicated to supporting initiatives that strengthen faith-based institutions, empowering children and youth, and raise principled leaders who will positively impact society.
Vera is a children's Sunday School teacher and is passionate about instilling godly principles in children while they are still impressionable and young.  She also organises Young Writers clubs for children in her community unearth writing talents in children and young adults.
Her hobbies include writing, gardening, cooking and exploring new healthy recipes to keep fit.
`
    },

    {
      id: 3,
      name: "Mrs. Adokarley Okpoti-Paulo ",
      position: "Board Chair",
      photo: adokarle,
      bio: "Mrs. Adokarley Okpoti-Paulo is senior level Executive with over 30years hands-on experience and a record of accomplishment in managing company finances.",
      fullProfile: `
Mrs. Adokarley Okpoti-Paulo is senior level Executive with over 30years hands-on experience and a record of accomplishment in managing company finances.
Mrs Okpoti-Paulo was educated at the Institute of Professional Studies now University of Professional Studies, Central University College affiliated to Cape Coast University and the University of Ghana Business School where she studied Bachelor of Science in Administration (Accounting) and Executive Master of Business Administration (Finance) respectively. 
A Chartered Accountant by profession with the Institute of Chartered Accountants Ghana, Mrs Okpoti-Paulo cut her professional teeth with Coopers & Lybrand (Now PricewaterCoopers) and Tettey Usher and Partners (Now Deloitte & Touché) where she served as Audit Personnel in both places. She has also worked in key finance positions in companies such as Boskalis International BV, Masai Developers Limited (1992-1999), EA Group Limited (2000-2004), Mechanical Lloyd Company Limited, Accra Service Branch (2005- 2013).
Mrs Okpoti-Paulo joined Subah Infosolutions as General Manager Finance in February 2013, and rose to become the Finance Director of Subah Holding Company Limited, which had six local subsidiaries with two international businesses.
In August 2018 she was transferred to Zoomlion Ghana Limited as the Finance Director to Double up as the Group Financial Controller of the Environment and Sanitation Group, Overseeing the finances of over 32 Companies.
Asides serving on a number of boards as director she was also an Executive Member of the Association of Women Accountants for several years, and a past member of the Admissions Committee Board of Institute of Chartered Accountants (ICA) Ghana. 
In 2021 she worn the Honoré Award of the Women’s Choice Awards Africa as the Institutional Finance Personality
In September 2022 she worn the August award of National Finance Personality of the year at the National Business Honours 2022. 
Adokarley has gone through many leadership trainings and Conferences including the recent Global Leadership Conference in Chicago. She brings this on board in her leadership skills.
She has excellent human relations and the capacity to adjust quickly to new developments and environments. She has a high sense of responsibility and is trustworthiness.
She is married to Reverend Eric Okpoti-Paulo with four handsome young men, two lovely daughters in laws and three Lovely grandchildren. Adokarley loves singing, cooking, working smart, and is in the ministry of Helps, Marriage Counselling and Administration. Adokarley Loves mentoring, impacting and improving lives.
`
    },


    {
      id: 4,
      name: "Francis Kojo Bedi",
      position: "Member",
      photo: kojo,
      bio: "Kojo Bedi serves as a Board Member of the Pleroma Sycamore Foundation, bringing a deep passion for evangelism, discipleship, and partnership development in Christian ministry.",
      fullProfile: `Francis Kojo Bedi serves as a Board Member of the Pleroma Sycamore Foundation, bringing a deep passion for evangelism, discipleship, and partnership development in Christian ministry. With over two decades of dedicated missionary service, Francis offers the Board invaluable spiritual insight, leadership experience, and a strong commitment to advancing faith-based transformation in communities.
Francis is a full-time missionary with The Great Commission Movement of Ghana, affiliated with Campus Crusade for Christ International, where he has faithfully served since 1995. He currently serves as Director of Partner Development and as the Jesus Film Projects Representative. Through these roles, he equips missionaries to build sustainable ministry partnerships and leads initiatives to translate and deploy the Jesus Film into major Ghanaian languages as a powerful evangelism and discipleship tool.
As a member of the PSF Board, Francis contributes his extensive experience in ministry development, partnership building, and faith-based outreach strategies. He is particularly passionate about initiatives that strengthen Christian leadership, support community transformation, and expand opportunities for individuals to encounter and grow in their faith.
Francis is married to Clara Edem Bedi, also a full-time missionary, and together they are blessed with three children. Their family life reflects their shared commitment to Christian service, mentorship, and raising the next generation of faith-driven leaders.`
    },

    {
      id: 5,
      name: "Abigail Burgesson",
      position: "Member",
      photo: abigail,
      bio: "Abigail Burgesson is an international development practitioner and women's rights and social justice advocate with 28 years of experience promoting social justice and transformative change across Africa and globally through philanthropy.",
      fullProfile: `Abigail Burgesson is an international development practitioner and women's rights and social justice advocate with 28 years of experience promoting social justice and transformative change across Africa and globally through philanthropy. As founder and Principal Consultant of Fern Resource Alternatives, she specialises in resource mobilisation, strategic partnerships, institutional strengthening, and transformative leadership for non-profit organisations.
Her distinguished career includes nearly two decades in senior management at the African Women's Development Fund (AWDF), leading Partnerships and Resource Mobilization from inception. She founded 'The Bridge', a mentorship program empowering young women toward financial independence through entrepreneurship and job readiness, and advocates for technical and vocational education as a solution to youth unemployment across Africa.
Abigail holds a BA in English from the University of Ghana and an MA in International Relations from Boston University's European Program (UK). 
She completed International Negotiations training at the Centre for Applied Studies in International Negotiations, Geneva, Switzerland and specialised training in Resource Mobilization and Alternative Dispute Resolution.
She currently serves on multiple governance boards: the Emerging Public Leader (EPL) Global Board (Washington, DC and EPL Ghana); Strategic Advisor for AfriWomen's Network (Global); Star-Ghana Foundation (Finance and Fundraising Committee); and Chair of The McCarthy Hill School (Accra, Ghana).
A progressive woman of Christian faith, Abigail uniquely bridges social justice, feminism, and spiritual conviction. Her work courageously addresses women's rights and injustice within religious spaces, challenging cultural practices, norms and beliefs that perpetuate inequality. This positions her to champion PSF's faith-driven mission to empower God's people and to advance justice and love through the Holy Spirit.
Abigail brings proven expertise in resource mobilization, partnership development, and institutional strengthening, along with extensive global board governance experience, to drive PSF's growth and impact. Her commitment to faith-based transformation, youth empowerment, and community strengthening aligns seamlessly with PSF's vision.
Married and living in Accra, Ghana, with her husband and three children, Abigail finds inspiration through family, worship music, sound, and transformative biblical teachings. She enjoys creating Afrocentric interior décor and hosting gatherings for friends and family.`
    },

  ];

  return (
    <>
      <Navbar />

      <Helmet>
        <title>Who We Are | Pleroma Sycamore Foundation – Faith-Based NGO in Ghana</title>
        <meta
          name="description"
          content="Learn about Pleroma Sycamore Foundation, a faith-based NGO in Ghana dedicated to Christian outreach, community development, youth empowerment, and social transformation."
        />
      </Helmet>

      <div className="mb-20">
        {/* About Us Section */}
        <motion.div
          className="relative w-full h-64 mt-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${handthree})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.h1
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
            </motion.h1>
          </div>
        </motion.div>

        {/* Welcome Section */}
        <motion.div
          className="container mx-auto mt-12 py-16 px-6 lg:px-8 max-w-screen-lg grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Inspired by God; Driven by Purpose
            </h2>
            <motion.div
              className="w-24 h-1 bg-[#1D6205] mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            ></motion.div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Pleroma Sycamore Foundation is a faith-based nonprofit organization in Ghana, established to enforce God's will on earth through impactful partnerships and spirit-filled initiatives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are committed to empowering individuals and communities through worship,
              education, social support, and initiatives that promote dignity,
              growth, and sustainable transformation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our core areas of focus include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed sm:text-md mb-6">
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Supporting Christian missions, ministries, and outreaches focused on propagating the Word of God.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Providing social interventions for the aged, youth and children.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Supporting Christian leadership and entrepreneurship development.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Mitigate accommodation challenges through social housing.
              </motion.li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={boy}
              alt="happy child"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Board Members Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Meet Our Board
              </h2>
              <motion.div
                className="w-24 h-1 bg-[#1D6205] mx-auto mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Our dedicated board members bring diverse expertise, unwavering faith,
                and a shared commitment to advancing God's kingdom through impactful
                community transformation.
              </p>
            </motion.div>

            {/* Board Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    onClick={() => {
                      document.getElementById(`modal-${member.id}`).classList.remove('hidden');
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        document.getElementById(`modal-${member.id}`).classList.remove('hidden');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View profile of ${member.name}`}
                  >
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden bg-gray-200">
                      <img
                        src={member.photo} o
                        alt={`${member.name} - ${member.position}`}
                        className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden absolute inset-0 items-center justify-center bg-gray-300">
                        <span className="text-gray-500 text-4xl">👤</span>
                      </div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="text-white font-semibold text-lg flex items-center gap-2">
                          View Profile
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                        {member.name}
                      </h3>
                      <p className="text-[#1D6205] font-semibold mb-3 line-clamp-1">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Read More Indicator */}
                    <div className="px-6 pb-6">
                      <span className="text-[#1D6205] text-sm font-medium inline-flex items-center group-hover:underline">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Modal for Full Profile */}
                  <div
                    id={`modal-${member.id}`}
                    className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={(e) => {
                      if (e.target.id === `modal-${member.id}`) {
                        e.target.classList.add('hidden');
                      }
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`modal-title-${member.id}`}
                  >
                    <div
                      className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => {
                          document.getElementById(`modal-${member.id}`).classList.add('hidden');
                        }}
                        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Close profile"
                      >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      {/* Modal Content */}
                      <div className="grid md:grid-cols-5 gap-6 p-8">
                        {/* Profile Image */}
                        <div className="md:col-span-2">
                          <div className="sticky top-8">
                            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4] bg-gray-200">
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="hidden absolute inset-0 items-center justify-center bg-gray-300">
                                <span className="text-gray-500 text-6xl">👤</span>
                              </div>
                            </div>
                            <div className="mt-6 text-center">
                              <h2 id={`modal-title-${member.id}`} className="text-2xl font-bold text-gray-800 mb-2">
                                {member.name}
                              </h2>
                              <p className="text-[#088E31] font-semibold text-lg">
                                {member.position}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Profile Details */}
                        <div className="md:col-span-3">
                          <div className="prose prose-lg max-w-none">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#088E31]">
                              Profile
                            </h3>
                            <div className="text-gray-700 leading-relaxed">
                              {member.fullProfile
                                .split(/\n+/)
                                .filter(p => p.trim() !== "")
                                .map((paragraph, index) => (
                                  <p
                                    key={index}
                                    className="mb-4 text-sm sm:text-base leading-7"
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#088E31] text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}

      <Footer />
    </>
  );
};

export default WhoWeAre;