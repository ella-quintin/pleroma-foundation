import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/appLayout";
import Landing from "./pages/landing";
import WhatWeDo from "./pages/wwd";
import WhoWeAre from "./pages/wwa";
import HowWeDo from "./pages/hwd";
import Contact from "./pages/contact";
import HowWeWork from "./pages/hwd";

// Lazy-loaded pages
const GalleryAlbums = lazy(() => import("./pages/gallery"));
const GalleryDetail = lazy(() => import("./pages/gallery/gallerydetails"));
const BlogList = lazy(() => import("./pages/bloglist"));
const SinglePost = lazy(() => import("./pages/singlepost"));
const Grant = lazy(() => import("./pages/grant"));
const Donate = lazy(() => import("./pages/donate"));
const DonationSuccess = lazy(() => import("./pages/donate/donationSuccess"));

const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-[#1D6205] font-medium animate-pulse">
            Preparing page…
        </p>
    </div>
);

function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                { path: "/", element: <Landing /> },
                { path: "/who-we-are", element: <WhoWeAre /> },
                { path: "/what-we-do", element: <WhatWeDo /> },
                { path: "/how-we-do-it", element: <HowWeDo /> },
                { path: "/contact-us", element: <Contact /> },
                { path: "/how-we-work", element: <HowWeWork /> },

                {
                    path: "/grants",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <Grant />
                        </Suspense>
                    ),
                },
                {
                    path: "/donate",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <Donate />
                        </Suspense>
                    ),
                },
                {
                    path: "/donation-successful",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <DonationSuccess />
                        </Suspense>
                    ),
                },
                {
                    path: "/blog",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <BlogList />
                        </Suspense>
                    ),
                },
                {
                    path: "/blog/:slug",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <SinglePost />
                        </Suspense>
                    ),
                },
                {
                    path: "/gallery",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <GalleryAlbums />
                        </Suspense>
                    ),
                },
                {
                    path: "/gallery/:albumId",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <GalleryDetail />
                        </Suspense>
                    ),
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
