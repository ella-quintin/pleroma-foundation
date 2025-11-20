// pages/gallery/GalleryDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../../lib/sanity";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const GalleryDetail = () => {
  const { albumId } = useParams();
  const [images, setImages] = useState([]);
  const [album, setAlbum] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (!albumId) return;

    const query = `
    {
      "album": *[_type == "album" && _id == $albumId][0]{
        title,
        "coverImage": coverImage.asset->url
      },
      "images": *[_type == "galleryImage" && album._ref == $albumId]{
        _id,
        "src": image.asset->url
      }
    }
    `;

    client.fetch(query, { albumId }).then(({ album, images }) => {
      setAlbum(album);
      setImages(images);
    });
  }, [albumId]);

  return (
    <>
      <Navbar />
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-20 bg-gray-50 min-h-screen">
        <div className="mb-10 text-center">
          <Link to="/gallery" className="text-sm text-green-700 hover:underline block mb-2 mt-14">
            ← Back to albums
          </Link>
          <h2 className="text-3xl font-bold text-gray-800">
            {album?.title || "Album"}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <img
              key={img._id}
              src={img.src}
              alt=""
              className="rounded-lg h-64 w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute left-5 text-white text-5xl hover:text-green-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
              }}
            >
              ‹
            </button>
            <img
              src={images[selectedIndex].src}
              alt="Gallery"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-5 text-white text-5xl hover:text-green-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % images.length);
              }}
            >
              ›
            </button>
            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GalleryDetail;
