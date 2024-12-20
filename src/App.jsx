import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import WhatWeDo from "./pages/wwd";
import WhoWeAre from "./pages/wwa";
import HowWeDo from "./pages/hwd";
import New from "./pages/wn";
import Contact from "./pages/contact";
import HowWeWork from "./pages/hwd";
import ScrollToTop from "./components/scrollToTop";

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <Landing /> },
        { path: "/who-we-are", element: <WhoWeAre /> },
        { path: "/what-we-do", element: <WhatWeDo /> },
        { path: "/how-we-do-it", element: <HowWeDo /> },
        { path: "/whats-new", element: <New /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/how-we-work", element: <HowWeWork /> },
    ]);

    return (
        <RouterProvider router={router}>
            <ScrollToTop /> {/* This is now within the router context */}
        </RouterProvider>
    );
}

export default App;
