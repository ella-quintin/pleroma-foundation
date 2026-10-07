import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/appLayout";
import Landing from "./pages/landing";
import WhoWeAre from "./pages/wwa";
import WhatWeDo from "./pages/hwd";
import Contact from "./pages/contact";
import Resources from "./pages/resources";

// Lazy-loaded pages
const GalleryAlbums = lazy(() => import("./pages/gallery"));
const GalleryDetail = lazy(() => import("./pages/gallery/gallerydetails"));
const BlogList = lazy(() => import("./pages/bloglist"));
const SinglePost = lazy(() => import("./pages/singlepost"));
const NewGrant = lazy(() => import("./pages/newgrant"));
const Donate = lazy(() => import("./pages/donate"));
const DonationSuccess = lazy(() => import("./pages/donate/donationSuccess"));
const ProgramDetail = lazy(() => import("./pages/programdetail"));

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
                { path: "/how-we-do-it", element: <WhatWeDo /> },
                { path: "/resources", element: <Resources /> },
                { path: "/contact-us", element: <Contact /> },
                { path: "/how-we-work", element: <WhatWeDo /> },

                {
                    path: "/our-programs/:slug",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <ProgramDetail />
                        </Suspense>
                    ),
                },
                {
                    path: "/grants-application",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <NewGrant />
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
