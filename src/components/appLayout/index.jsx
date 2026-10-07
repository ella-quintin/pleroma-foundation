
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant, not smooth: a route change swaps the entire page, so animating
    // the scroll here only draws attention to the new page's content briefly
    // appearing at the old scroll offset before gliding into place.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppLayout;
