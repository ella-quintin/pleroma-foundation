// pages/gallery/index.jsx or GalleryAlbums.jsx
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import media from "../../assets/images/gallery.jpg";

const GalleryAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "album"]{
      _id,
      title,
      "coverImage": coverImage.asset->url,
      "imageCount": count(*[_type == "galleryImage" && references(^._id)])
    }`).then(setAlbums);
  }, []);

  return (
    <>
      <Navbar />
      <div className=" bg-gray-50 min-h-screen">
        <div
          className="relative w-full h-64 bg-cover bg-center overflow-hidden mt-20"
          style={{ backgroundImage: `url(${media})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">

            <div
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
            >
              Our Gallery
            </div>
            <p className="text-lg text-white font-light mt-2 text-center">View images from our recent programs</p>

          </div>
        </div>

        <div className="grid gap-8 pt-20 pb-28 px-4 sm:px-6 lg:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {albums.map(album => (
            <Link to={`/gallery/${album._id}`} key={album._id}>
              <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-lg font-semibold text-white">{album.title}</h3>
                  <p className="text-sm text-gray-200">{album.imageCount} photo{album.imageCount === 1 ? "" : "s"}</p>
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

export default GalleryAlbums;
