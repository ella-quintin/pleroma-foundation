import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import WhatWeDo from "./pages/wwd";
import WhoWeAre from "./pages/wwa";
import HowWeDo from "./pages/hwd";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import HowWeWork from "./pages/hwd";
import BlogList from "./pages/bloglist";
import SinglePost from "./pages/singlepost";
import AppLayout from "./components/appLayout";
import GalleryDetail from "./pages/gallery/gallerydetails";
import GalleryAlbums from "./pages/gallery";


function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                { path: "/", element: <Landing /> },
                { path: "/who-we-are", element: <WhoWeAre /> },
                { path: "/what-we-do", element: <WhatWeDo /> },
                { path: "/how-we-do-it", element: <HowWeDo /> },
                { path: "/blog", element: <BlogList /> },
                { path: "/blog/:slug", element: <SinglePost /> },
                { path: "/gallery", element: <GalleryAlbums /> },
                { path: "/gallery/:albumId", element: <GalleryDetail /> },
                { path: "/contact-us", element: <Contact /> },
                { path: "/how-we-work", element: <HowWeWork /> },
            ],
        }
    ]);

    return (

        <RouterProvider router={router}>
        </RouterProvider>
    );
}

export default App;
