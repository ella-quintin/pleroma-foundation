import { useEffect, useState } from "react";
import { client } from "../../../lib/sanity";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const RecentBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...3]{
          _id, title, slug, publishedAt, body,
          mainImage{asset->{url}}
        }`
      )
      .then(setPosts);
  }, []);

  const getExcerpt = (body) => {
    const block = body?.find((b) => b._type === "block");
    return block
      ? block.children.map((c) => c.text).join(" ").slice(0, 100) + "..."
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
            Recent Blog Posts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay inspired with our latest updates, reflections, and faith-driven stories.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post, i) => (
            <motion.div
              key={post._id}
              variants={fadeUp(0.2 + i * 0.1)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <Link to={`/blog/${post.slug.current}`}>
                <div className="overflow-hidden">
                  <img
                    src={post.mainImage?.asset?.url || "/placeholder.jpg"}
                    alt={post.title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#1D6205] transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{getExcerpt(post.body)}</p>
                  <p className="text-gray-500 text-xs mb-2">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <span className="text-[#1D6205] font-semibold text-sm hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
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
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentBlogs;
