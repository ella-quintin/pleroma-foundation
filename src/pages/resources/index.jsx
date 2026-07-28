import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Download,
  FileText,
  Calendar,
  BookOpen,
  Layers,
  FileX,
  Mail,
  Sparkles,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MailCheck,
  Leaf,
} from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import reimage from "../../assets/images/reimage.jpg";


import { client } from "../../lib/sanity";

const CATEGORIES = [
  {
    label: "Reports and Key Documents",
    value: "reports and key documents",
    icon: FileText,
  },
  { label: "Publications", value: "publications", icon: BookOpen },
  { label: "Other Resources", value: "other resources", icon: Layers },
];

const normalizeCategory = (value) => (value || "").trim().toLowerCase();

const RESOURCES_QUERY = `*[_type == "resource"] | order(publishedAt desc){
  title,
  slug,
  category,
  description,
  year,
  publishedAt,
  featured,
  file{
    asset->{
      url
    }
  },
  thumbnail{
    asset->{
      url
    }
  }
}`;


const formatDate = (dateString, year) => {
  if (dateString) {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return year ? String(year) : "";
};

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].label);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const fetchResources = useCallback(async () => {
    try {
      const data = await client.fetch(RESOURCES_QUERY);
      setResources(data || []);
    } catch (error) {
      console.error("Failed to fetch resources:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    setSubscribing(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://pleroma-sycamore.org/api/newsletter.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setAlreadySubscribed(Boolean(data.alreadySubscribed));
        setMessage(
          data.alreadySubscribed
            ? "This email is already subscribed."
            : "Thank you for subscribing to our newsletter."
        );
        setEmail("");
      } else {
        setSuccess(false);
        setAlreadySubscribed(false);
        setMessage(
          data.message ||
          "Unable to subscribe."
        );
      }
    } catch (error) {
      setSuccess(false);
      setAlreadySubscribed(false);
      setMessage(
        "Something went wrong. Please try again."
      );
    }

    setSubscribing(false);
  };

  // Initial load, then subscribe to Sanity's real-time listen API so any
  // create/update/delete made in the Studio (including deletions) is
  // reflected on the page immediately, without needing a manual refresh.
  useEffect(() => {
    fetchResources();

    const subscription = client
      .listen('*[_type == "resource"]')
      .subscribe(() => {
        fetchResources();
      });

    return () => subscription.unsubscribe();
  }, [fetchResources]);

  const activeCategoryConfig = CATEGORIES.find(
    (cat) => cat.label === activeCategory
  );

  const categoryResources = resources.filter(
    (resource) =>
      normalizeCategory(resource.category) === activeCategoryConfig?.value
  );

  const featuredResource = categoryResources.find((r) => r.featured);
  const remainingResources = featuredResource
    ? categoryResources.filter((r) => r !== featuredResource)
    : categoryResources;

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Resources | Pleroma Sycamore Foundation</title>
        <meta
          name="description"
          content="Access reports, publications and other resources from Pleroma Sycamore Foundation to learn more about our work, impact and mission."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-64 bg-cover bg-center overflow-hidden mt-20"
        style={{ backgroundImage: `url(${reimage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          <motion.h1
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Resources
          </motion.h1>
          <motion.p
            className="text-white text-sm sm:text-base lg:text-lg text-center mt-4 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access our reports, publications and other resources to learn
            more about our work, impact and mission.
          </motion.p>
        </div>
      </motion.div>

      {/* Intro Section */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1D6205] bg-[#1D6205]/10 px-4 py-1.5 rounded-full mb-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Resource Centre
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Knowledge That Creates Impact
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore our growing library of reports, publications and
            resources documenting the reach, lessons and outcomes of our
            work across communities in Ghana.
          </motion.p>
        </div>
      </motion.div>

      {/* Category Tabs + Resources */}
      <motion.div
        className="px-4 sm:px-8 lg:px-16 py-16 mb-16 bg-[#f9f9f9]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.label;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setActiveCategory(cat.label)}
                  aria-pressed={isActive}
                  className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 border ${isActive
                    ? "text-white border-transparent"
                    : "text-gray-700 bg-white border-gray-200 hover:border-[#1D6205]/30 hover:text-[#1D6205] shadow-sm"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#1D6205] rounded-full shadow-md shadow-[#1D6205]/20"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="w-10 h-10 border-4 border-[#1D6205] border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-500 text-sm">Loading resources…</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && categoryResources.length === 0 && (
            <motion.div
              className="flex flex-col items-center justify-center text-center py-24 px-6 bg-white rounded-3xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 rounded-full bg-[#1D6205]/5 flex items-center justify-center mb-6">
                <FileX className="w-12 h-12 text-[#1D6205]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                No resources available
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-md">
                Resources in this category will appear here once published.
              </p>
            </motion.div>
          )}

          {/* Resources Content */}
          <AnimatePresence mode="wait">
            {!loading && categoryResources.length > 0 && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Featured Resource */}
                {featuredResource && (
                  <motion.div
                    className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 mb-14 grid grid-cols-1 md:grid-cols-2 border border-gray-100"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64 md:h-full min-h-[320px]">
                      {featuredResource.thumbnail?.asset?.url ? (
                        <img
                          src={featuredResource.thumbnail.asset.url}
                          alt={featuredResource.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#1D6205]/5 flex items-center justify-center">
                          <FileText className="w-16 h-16 text-[#1D6205]/40" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-[#1D6205] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                        <Sparkles className="w-3.5 h-3.5" />
                        Featured
                      </span>
                    </div>

                    <div className="p-8 sm:p-10 flex flex-col justify-center">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D6205] bg-[#1D6205]/10 px-3 py-1 rounded-full w-fit mb-4">
                        {featuredResource.category}
                      </span>

                      <h3 className="font-bold text-2xl sm:text-3xl text-gray-900 leading-tight mb-3">
                        {featuredResource.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-5 line-clamp-3">
                        {featuredResource.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-7">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredResource.publishedAt, featuredResource.year)}
                      </div>

                      <a
                        href={featuredResource.file?.asset?.url || undefined}
                        download
                        aria-disabled={!featuredResource.file?.asset?.url}
                        onClick={(e) => {
                          if (!featuredResource.file?.asset?.url) e.preventDefault();
                        }}
                        className={`inline-flex items-center justify-center gap-2 w-fit px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${featuredResource.file?.asset?.url
                          ? "bg-[#1D6205] text-white hover:bg-[#088E31] shadow-md hover:shadow-lg hover:-translate-y-0.5"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                          }`}
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Resource Cards Grid */}
                {remainingResources.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remainingResources.map((resource, index) => (
                      <motion.div
                        key={resource.slug?.current || `${resource.title}-${index}`}
                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="relative">
                          {resource.thumbnail?.asset?.url ? (
                            <img
                              src={resource.thumbnail.asset.url}
                              alt={resource.title}
                              className="w-full h-52 object-cover"
                            />
                          ) : (
                            <div className="w-full h-52 bg-[#1D6205]/5 flex items-center justify-center">
                              <FileText className="w-12 h-12 text-[#1D6205]/40" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <span className="absolute top-4 left-4 bg-white/95 text-[#1D6205] text-xs font-semibold px-3 py-1 rounded-full">
                            {resource.category}
                          </span>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 line-clamp-2">
                            {resource.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">
                            {resource.description}
                          </p>

                          <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-auto mb-5">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(resource.publishedAt, resource.year)}
                          </div>

                          <a
                            href={resource.file?.asset?.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-disabled={!resource.file?.asset?.url}
                            onClick={(e) => {
                              if (!resource.file?.asset?.url) e.preventDefault();
                            }}
                            className={`inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${resource.file?.asset?.url
                              ? "bg-[#1D6205] text-white hover:bg-[#088E31] shadow-sm hover:shadow-md"
                              : "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                              }`}
                          >
                            <FileText className="w-4 h-4" />
                            View Report
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto mt-24 mb-24 px-4 sm:px-0">
        <div
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#0C3A0A] via-[#1D6205] to-[#1F7A2E] p-8 sm:p-12 md:p-16 shadow-2xl shadow-[#0C3A0A]/30"
        >
          {/* Organic texture: soft leaf-vein dot grid, low opacity */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Decorative organic blobs (asymmetric, leaf-like) */}
          <div className="absolute -top-24 -right-16 w-72 h-72 bg-[#8FD14F]/20 blur-3xl [border-radius:60%_40%_55%_45%/45%_55%_40%_60%]" />
          <div className="absolute -bottom-28 -left-20 w-80 h-80 bg-[#F4C95D]/10 blur-3xl [border-radius:45%_55%_40%_60%/55%_40%_60%_45%]" />

          <div className="relative z-10 grid md:grid-cols-[1.05fr_1fr] gap-12 md:gap-16 items-center">
            {/* Left: message */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4C95D]/15 border border-[#F4C95D]/30 text-[#F4E4B0] text-xs font-semibold uppercase tracking-[0.15em] mb-6">
                <Leaf className="w-3.5 h-3.5" />
                Stay Connected
              </div>

              <h3 className="text-white text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight mb-5">
                Never miss a{" "}
                <span className="text-white">story</span> of impact
              </h3>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                Receive inspiring stories, ministry updates, community impact reports, and upcoming events directly in your inbox.
              </p>

              <div className="hidden md:flex items-center gap-2 mt-8 text-white/60 text-sm">
                <ShieldCheck className="w-4 h-4 text-[#8FD14F]" />
                No spam. Unsubscribe whenever you like.
              </div>
            </div>

            {/* Right: form card */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl p-8 text-center shadow-xl"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1D6205]/10 flex items-center justify-center mx-auto mb-4">
                      {alreadySubscribed ? (
                        <MailCheck className="w-7 h-7 text-[#1D6205]" />
                      ) : (
                        <CheckCircle2 className="w-7 h-7 text-[#1D6205]" />
                      )}
                    </div>
                    <h4 className="text-gray-900 font-bold text-xl mb-2">
                      {alreadySubscribed
                        ? "You're already subscribed"
                        : "You're on the list"}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {alreadySubscribed
                        ? "This email is already on our newsletter list — thanks for being part of our community."
                        : "Thank you for subscribing. Look out for our next update in your inbox."}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSuccess(false);
                        setAlreadySubscribed(false);
                        setMessage("");
                      }}
                      className="text-[#1D6205] text-sm font-semibold hover:underline"
                    >
                      Subscribe another email
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubscribe}
                    className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-xl"
                  >
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 rounded-xl border-0 outline-none text-sm text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#F4C95D] transition-shadow"
                        />
                      </div>

                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 rounded-xl border-0 outline-none text-sm text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#F4C95D] transition-shadow"
                        />
                      </div>
                    </div>

                    <div className="relative mb-4">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full pl-10 pr-3 py-3 rounded-xl border-0 outline-none text-sm text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#F4C95D] transition-shadow"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={subscribing}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-xl text-[#1D6205] font-semibold text-sm hover:bg-[#F4C95D]/90 hover:text-[#0C3A0A] transition-all duration-300 shadow-md disabled:opacity-50 disabled:pointer-events-none group"
                    >
                      {subscribing ? (
                        "Subscribing…"
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="flex md:hidden items-center justify-center gap-1.5 text-white/60 text-xs mt-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8FD14F]" />
                      No spam. Unsubscribe whenever you like.
                    </p>

                    {message && (
                      <p
                        className={`mt-4 text-sm text-center ${success ? "text-green-200" : "text-red-200"
                          }`}
                      >
                        {message}
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;