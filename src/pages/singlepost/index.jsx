// src/pages/SinglePost.jsx

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { HiOutlineMail } from "react-icons/hi";
import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet-async";

const SinglePost = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [morePosts, setMorePosts] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getExcerpt = (body) => {
    const block = body?.find(
      (b) => b._type === "block"
    );

    return block
      ? block.children
        .map((c) => c.text)
        .join(" ")
        .slice(0, 160)
      : "";
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const currentPost =
          await client.fetch(
            `*[_type == "post" && slug.current == $slug][0]{
              _id,
              title,
              body,
              category,
              publishedAt,
              slug,
              mainImage{
                asset->{url}
              }
            }`,
            { slug }
          );

        setPost(currentPost);

        if (
          currentPost?.category
        ) {
          const relatedPosts =
            await client.fetch(
              `*[
                _type == "post" &&
                slug.current != $slug &&
                category == $category
              ]
              | order(publishedAt desc)[0...3]{
                _id,
                title,
                slug,
                category,
                publishedAt,
                body,
                mainImage{
                  asset->{url}
                }
              }`,
              {
                slug,
                category:
                  currentPost.category,
              }
            );

          setMorePosts(
            relatedPosts
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post)
    return (
      <div className="text-center py-20">
        Loading post...
      </div>
    );

  const handleSubscribe = async (e) => {
    e.preventDefault();

    setLoading(true);
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
        setMessage(
          "Thank you for subscribing to our newsletter."
        );
        setEmail("");
      } else {
        setSuccess(false);
        setMessage(
          data.message ||
          "Unable to subscribe."
        );
      }
    } catch (error) {
      setSuccess(false);
      setMessage(
        "Something went wrong. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <Helmet>
        <title>
          {post.title} |
          Pleroma Sycamore
          Foundation
        </title>

        <meta
          name="description"
          content={getExcerpt(
            post.body
          )}
        />
      </Helmet>

      <div className="bg-white min-h-screen mt-28 mb-28 pt-16 px-4 md:px-12">

        {/* Main Post */}
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl text-gray-800 sm:text-3xl md:text-4xl font-bold mb-2">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mb-6 flex-wrap">

            <p className="text-gray-500 text-sm">
              {new Date(
                post.publishedAt
              ).toLocaleDateString()}
            </p>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${post.category ===
                "impact"
                ? "bg-[#ECF2EA] text-[#1D6205]"
                : "bg-[#ECF2EA] text-[#1D6205]"
                }`}
            >
              {post.category ===
                "impact"
                ? "Impact"
                : "Story"}
            </span>
          </div>

          {post.mainImage
            ?.asset?.url && (
              <img
                src={
                  post.mainImage.asset
                    .url
                }
                alt={post.title}
                className="rounded-lg w-full h-80 object-cover mb-8"
              />
            )}

          <div className="prose prose-lg text-gray-800 max-w-none">
            <PortableText
              value={post.body}
            />
          </div>
        </div>

        {/* Newsletter Section */}

        <div className="max-w-4xl mx-auto mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1D6205] to-[#2E8B57] p-8 md:p-12 shadow-2xl">

            {/* Decorative Blur */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <HiOutlineMail className="text-white text-3xl" />
                </div>
              </div>

              <div className="text-center">

                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                  Stay Connected
                </span>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                  Never Miss a Story
                </h3>

                <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                  Receive inspiring stories, ministry updates,
                  community impact reports, and upcoming events
                  directly in your inbox.
                </p>

                {success ? (
                  <div className="bg-white rounded-2xl p-6 max-w-xl mx-auto">
                    <h4 className="text-[#1D6205] font-bold text-xl mb-2">
                      Thank You!
                    </h4>

                    <p className="text-gray-600">
                      You've successfully joined our newsletter.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="max-w-2xl mx-auto"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">

                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="flex-1 px-5 py-3 rounded-xl border-0 outline-none text-gray-700 bg-white shadow-lg"
                      />

                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="flex-1 px-5 py-3 rounded-xl border-0 outline-none text-gray-700 bg-white shadow-lg"
                      />

                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        placeholder="Enter your email address"
                        className="flex-1 px-5 py-3 rounded-xl border-0 outline-none text-gray-700 bg-white shadow-lg"
                      />


                    </div>
                    <div className="flex flex-col items-center mt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3 bg-white rounded-full text-[#1D6205] font-semibold hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50"
                    >
                      {loading
                        ? "Subscribing..."
                        : "Subscribe"}
                    </button>
                    </div>  

                    <p className="text-white/80 text-sm mt-4">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                    {message && (
                      <p
                        className={`mt-4 text-sm ${success
                          ? "text-green-200"
                          : "text-red-200"
                          }`}
                      >
                        {message}
                      </p>
                    )}
                  </form>
                )}

              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {morePosts.length >
          0 && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                More{" "}
                {post.category ===
                  "impact"
                  ? "Impact Updates"
                  : "Stories"}
              </h2>

              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {morePosts.map(
                  (p) => (
                    <div
                      key={p._id}
                      className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
                    >
                      <img
                        src={
                          p.mainImage
                            ?.asset?.url
                        }
                        alt={p.title}
                        className="h-48 w-full object-cover"
                      />

                      <div className="p-4">

                        <span
                          className={`inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold ${p.category ===
                            "impact"
                            ? "bg-[#ECF2EA] text-[#1D6205]"
                            : "bg-[#ECF2EA] text-[#1D6205]"
                            }`}
                        >
                          {p.category ===
                            "impact"
                            ? "Impact"
                            : "Story"}
                        </span>

                        <h4 className="text-lg font-semibold text-gray-800">
                          {p.title}
                        </h4>

                        <p className="text-gray-600 text-sm mb-2">
                          {new Date(
                            p.publishedAt
                          ).toLocaleDateString()}
                        </p>

                        <Link
                          to={`/blog/${p.slug.current}`}
                          className="text-green-700 text-sm font-medium mt-2 inline-block hover:underline"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
      </div>
    </>
  );
};

export default SinglePost;