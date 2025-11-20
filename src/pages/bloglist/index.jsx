
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../../components/navbar";
import blog from "../../assets/images/blog.jpg";
import Footer from "../../components/footer";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc){
        _id, title, slug, body, publishedAt,
        mainImage{asset->{url}}
      }`)
      .then(setPosts);
  }, []);



  const getExcerpt = (body) => {
    const block = body.find((b) => b._type === "block");
    return block ? block.children.map(c => c.text).join(" ").slice(0, 150) + "..." : "";
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
         <div
                className="relative w-full h-64 bg-cover bg-center overflow-hidden mt-20"
                style={{ backgroundImage: `url(${blog})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                  
                  <div
                    className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
                  >
                    What's New?
                  </div>
                  <p className="text-lg text-white font-light mt-2 text-center">Read our latest stories and updates here</p>
                  
                </div>
              </div>

        <div className="grid mt-24 mb-24 px-4 sm:px-6 lg:px-20 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug.current}`} key={post._id}>
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300">
                <img
                  src={post.mainImage?.asset?.url || "/placeholder.jpg"}
                  alt={post.title}
                  className="h-48 sm:h-52 md:h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{getExcerpt(post.body)}</p>
                  <span className="text-green-700 font-semibold text-sm mt-4 inline-block">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
        <Footer />
    </>
  );
};

export default BlogList;
