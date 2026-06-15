import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import blog from "../../assets/images/blog.jpg";
import Footer from "../../components/footer";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && category == $category]
        | order(publishedAt desc){
          _id,
          title,
          slug,
          body,
          publishedAt,
          category,
          mainImage{
            asset->{url}
          }
        }`,
        {
          category: activeTab,
        }
      )
      .then(setPosts)
      .catch(console.error);
  }, [activeTab]);

  const getExcerpt = (body) => {
    const block = body?.find(
      (b) => b._type === "block"
    );

    return block
      ? block.children
          .map((c) => c.text)
          .join(" ")
          .slice(0, 150) + "..."
      : "";
  };

  return (
    <>
      <Navbar />

      <Helmet>
        <title>
          {activeTab === "story"
            ? "Stories | Pleroma Sycamore Foundation"
            : "Impact Stories | Pleroma Sycamore Foundation"}
        </title>

        <meta
          name="description"
          content="Read stories and impact updates from Pleroma Sycamore Foundation."
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <div
          className="relative w-full h-64 bg-cover bg-center overflow-hidden mt-20"
          style={{
            backgroundImage: `url(${blog})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">

            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              What's New?
            </h1>

            <p className="text-lg text-white font-light mt-3 text-center">
              Read our latest stories and impact updates
            </p>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-12 px-4">
          <div className="relative flex bg-white p-1 rounded-full shadow-lg border border-gray-100">

            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[#1D6205] ${
                activeTab === "story"
                  ? "left-1"
                  : "left-[calc(50%+2px)]"
              }`}
            />

            <button
              onClick={() =>
                setActiveTab("story")
              }
              className={`relative z-10 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeTab === "story"
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              Stories
            </button>

            <button
              onClick={() =>
                setActiveTab("impact")
              }
              className={`relative z-10 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeTab === "impact"
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              Impacts
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mt-10 px-4">
          <h2 className="text-3xl font-bold text-[#1D6205]">
            {activeTab === "story"
              ? "Our Stories"
              : "Our Impact"}
          </h2>

          <p className="text-gray-600 mt-2">
            {activeTab === "story"
              ? "Discover inspiring stories from our ministry and community."
              : "Explore the impact of our work and outreach initiatives."}
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No{" "}
              {activeTab === "story"
                ? "stories"
                : "impact updates"}{" "}
              available yet.
            </p>
          </div>
        ) : (
          <div className="grid mt-16 mb-24 px-4 sm:px-6 lg:px-20 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug.current}`}
                key={post._id}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">

                  <div className="overflow-hidden">
                    <img
                      src={
                        post.mainImage?.asset
                          ?.url ||
                        "/placeholder.jpg"
                      }
                      alt={post.title}
                      className="h-56 md:h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">

                    <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECF2EA] text-[#1D6205]">
                      {post.category ===
                      "impact"
                        ? "Impact"
                        : "Story"}
                    </span>

                    <h3 className="text-xl text-gray-800 font-semibold mb-2 group-hover:text-[#1D6205] transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3">
                      {getExcerpt(post.body)}
                    </p>

                    <p className="text-gray-500 text-xs mb-3">
                      {new Date(
                        post.publishedAt
                      ).toLocaleDateString()}
                    </p>

                    <span className="text-[#1D6205] font-semibold text-sm">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BlogList;