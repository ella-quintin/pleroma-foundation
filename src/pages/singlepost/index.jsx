// src/pages/SinglePost.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Navbar from "../../components/navbar";

const SinglePost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [morePosts, setMorePosts] = useState([]);


  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
        title, body, publishedAt, slug,
        mainImage{asset->{url}}
      }`,
        { slug }
      )
      .then(setPost);

    client
      .fetch(
        `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
        _id, title, slug, publishedAt,
        mainImage{asset->{url}},
        body
      }`,
        { slug }
      )
      .then(setMorePosts);
  }, [slug]);


  if (!post) return <div className="text-center py-20">Loading post...</div>;

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen mt-28 mb-28 pt-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-gray-800 sm:text-2xl md:text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-500 text-sm mb-6">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          {post.mainImage?.asset?.url && (
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="rounded-lg w-full h-80 object-cover mb-8"
            />
          )}
          <div className="prose prose-lg text-gray-800 max-w-none">
            <PortableText value={post.body} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Other posts you might like</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {morePosts.map((p) => (
              <div
                key={p._id}
                className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={p.mainImage?.asset?.url}
                  alt={p.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{p.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {new Date(p.publishedAt).toLocaleDateString()}
                  </p>
                  <a
                    href={`/blog/${p.slug.current}`}
                    className="text-green-700 text-sm font-medium mt-2 inline-block hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default SinglePost;
