import { useEffect, useState } from "react";
import { client } from "../../../lib/sanity";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const RecentBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    client
      .fetch(
        `*[
        _type == "post" &&
        category == $category
      ]
      | order(publishedAt desc)[0...3]{
        _id,
        title,
        category,
        slug,
        publishedAt,
        body,
        mainImage{
          asset->{url}
        }
      }`,
        {
          category: activeTab,
        }
      )
      .then((data) => {
      
        setPosts(data);
      })
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
        .slice(0, 100) + "..."
      : "";
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#ECF2EA] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D6205] mb-3">
            Recent Updates
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay inspired with our latest
            stories, ministry highlights,
            and impact updates.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex bg-white p-1 rounded-full shadow-lg border border-gray-100">

              <motion.div
                layout
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[#1D6205] ${activeTab === "story"
                  ? "left-1"
                  : "left-[calc(50%+2px)]"
                  }`}
              />

              <button
                onClick={() =>
                  setActiveTab("story")
                }
                className={`relative z-10 px-6 sm:px-8 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${activeTab === "story"
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
                className={`relative z-10 px-6 sm:px-8 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${activeTab === "impact"
                  ? "text-white"
                  : "text-gray-600"
                  }`}
              >
                Impacts
              </button>
            </div>
          </div>
        </motion.div>

        {/* Empty State */}
        {posts.length === 0 ? (
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No{" "}
              {activeTab === "story"
                ? "stories"
                : "impacts"}{" "}
              available yet.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Blog Cards */}
            <motion.div
              key={activeTab}
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"
              className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {posts.map((post, i) => (
                <div
                  key={`${activeTab}-${post._id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                >
                  <Link
                    to={`/blog/${post.slug?.current}`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={
                          post.mainImage?.asset
                            ?.url ||
                          "/placeholder.jpg"
                        }
                        alt={post.title}
                        className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6">

                      <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECF2EA] text-[#1D6205]">
                        {activeTab === "story"
                          ? "Story"
                          : "Impact"}
                      </span>

                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#1D6205] transition">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3">
                        {getExcerpt(
                          post.body
                        )}
                      </p>

                      <p className="text-gray-500 text-xs mb-2">
                        {new Date(
                          post.publishedAt
                        ).toLocaleDateString()}
                      </p>

                      <span className="text-[#1D6205] font-semibold text-sm hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/blog"
                className="inline-block bg-[#1D6205] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition hover:bg-[#155304]"
              >
                {activeTab === "story"
                  ? "View All Stories"
                  : "View All Impacts"}
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default RecentBlogs;