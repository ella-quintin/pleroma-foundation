import woman from "../../assets/woman.jpg";
import Navbar from '../../components/navbar';
import man from "../../assets/man.jpg";

const WhoWeAre = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* About Us Section */}
        <div
          className="relative w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${woman})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-4xl font-bold">Who We Are</h3>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="container mx-auto mt-12  py-16 px-6 lg:px-8 max-w-screen-lg grid lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Inspired by God. Driven by Purpose.
            </h2>
            <div className="w-24 h-1 bg-[#1D6205] mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Pleroma Sycamore Foundation is a divine inspiration, established to enforce God’s will on earth through impactful partnerships and spirit-filled initiatives.

              Our objectives include:

              Supporting Christian missions, ministries, and outreaches focused on propagating the Word of God.
              Providing social interventions for the aged and children.
              Supporting Christian leadership and entrepreneurship development.
              Offering social housing to alleviate youth challenges.
              We are committed to creating opportunities for worship, empowerment, and positive transformation.
            </p>

            {/* Objectives */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Objectives</h3>
            <ul className="list-disc pl-6 text-gray-600 text-base sm:text-lg mb-6">
              <li>To support Christian missions, ministries & outreaches focused on propagating the word of God</li>
              <li>To provide social intervention for the aged and children </li>
              <li>Support </li>
              <li>Develop Christian leadership and entrepreneurship</li>
              <li>Provide social housing to alleviate challenges of the youth</li>
            </ul>
            {/* <button className="px-6 py-3 bg-[#1D6205] text-white font-semibold rounded-md hover:bg-green-600 transition">
              Read More
            </button> */}
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={man}
              alt="Child with a guitar"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>


      </div>
    </>
  );
};

export default WhoWeAre;
