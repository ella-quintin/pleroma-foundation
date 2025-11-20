// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useNavigation } from "react-router-dom";

const ScrollToTop = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [navigation.location?.pathname]);

  return null;
};

export default ScrollToTop;
