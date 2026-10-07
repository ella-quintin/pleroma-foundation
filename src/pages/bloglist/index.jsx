import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { Link, useSearchParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import SEO from "../../components/seo";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import blog from "../../assets/images/blog.jpg";
import Footer from "../../components/footer";

const getExcerpt = (body, length = 150) => {
  const block = body?.find((b) => b._type === "block");

  return block
    ? block.children
        .map((c) => c.text)
        .join(" ")
        .slice(0, length) + "..."
    : "";
};

const BlogList = () => {
  const [searchParams] = useSearchParams();
  const requestedTab = searchParams.get("tab");

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(
    requestedTab === "impact" ? "impact" : "story"
  );

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]
        | order(publishedAt desc){
          _id,
          title,
          slug,
          body,
          publishedAt,
          category,
          featured,
          showDonateButton,
          mainImage{
            asset->{url}
          }
        }`
      )
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  // Arriving from "View All Stories/Impacts" on the landing page: the right
  // tab is already selected above, but the featured article still renders
  // first (by design, so it's never buried). Jump straight past it to the
  // list the user actually asked for, once there's something to scroll to.
  useEffect(() => {
    if (isLoading || !window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    const timer = setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // GROQ's ordering is unreliable when sorting a field (featured) that's
  // missing on most documents, so the manual-override selection happens here
  // instead of in the query.
  const featured = posts.find((post) => post.featured === true) || posts[0];
  const otherPosts = posts
    .filter((post) => post._id !== featured?._id)
    .filter((post) => post.category === activeTab);

  return (
    <>

      <SEO
        title="What's New | Pleroma Sycamore Foundation"
        description="Read the latest stories and impact updates from Pleroma Sycamore Foundation, a Christian NGO in Ghana."
        path="/blog"
        image={featured?.mainImage?.asset?.url || blog}
      />

      <div className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <div
          className="relative w-full h-64 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${blog})`,
            marginTop: "var(--nav-height)",
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

        {isLoading ? (
          <div className="flex items-center justify-center py-32">
            <p className="text-[#1D6205] font-medium animate-pulse">
              Loading stories…
            </p>
          </div>
        ) : (
          <>
        {/* Featured Post — full article, not a preview */}
        {featured && (
          <motion.div
            className="container mx-auto px-6 lg:px-8 max-w-screen-lg mt-14"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 sm:p-10 md:p-12">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-1.5 text-[#1D6205] text-xs font-bold uppercase tracking-wide mb-5 w-fit">
                Our Latest {featured.category === "impact" ? "Impact Update" : "Story"}
                </div>

                {/* Headline + small image */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-start gap-6 sm:gap-8">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                      {featured.title}
                    </h2>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ECF2EA] text-[#1D6205]">
                        {featured.category === "impact" ? "Impact" : "Story"}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(featured.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <img
                    src={featured.mainImage?.asset?.url || "/placeholder.jpg"}
                    alt={featured.title}
                    className="w-full sm:w-40 md:w-48 h-44 sm:h-32 md:h-36 object-cover rounded-xl flex-shrink-0"
                  />
                </div>

                {/* Full story */}
                <div className="prose prose-lg text-gray-700 max-w-none mt-10 pt-8 border-t border-gray-100">
                  <PortableText value={featured.body} />
                </div>

                {featured.showDonateButton && (
                  <div className="mt-10 bg-[#1D6205]/5 border border-[#1D6205]/15 rounded-2xl p-6 sm:p-8 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      Help Make This Story Possible
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md sm:max-w-xl mx-auto">
                      Your donation can directly support this initiative and help bring it to life.
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          import.meta.env.VITE_DONATION_URL,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 bg-[#1D6205] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#155304] transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                    >
                      <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="sm:hidden">Donate Now</span>
                      <span className="hidden sm:inline">Donate to Support This Story</span>
                    </button>
                  </div>
                )}
              </div>
            </article>
          </motion.div>
        )}

        {/* Toggle */}
        <div id="more" className="flex justify-center mt-16 px-4 scroll-mt-[calc(var(--nav-height)+1rem)]">
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
              ? "More Stories"
              : "More Impact Updates"}
          </h2>

          <p className="text-gray-600 mt-2">
            {activeTab === "story"
              ? "Discover inspiring stories from our ministry and community."
              : "Explore the impact of our work and outreach initiatives."}
          </p>
        </div>

        {/* Posts */}
        {otherPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No more{" "}
              {activeTab === "story"
                ? "stories"
                : "impact updates"}{" "}
              available yet.
            </p>
          </div>
        ) : (
          <div className="grid mt-16 mb-24 px-4 sm:px-6 lg:px-20 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
              <Link
                to={`/blog/${post.slug.current}`}
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
              </motion.div>
            ))}
          </div>
        )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BlogList;
