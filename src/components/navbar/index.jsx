import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [grantsOpen, setGrantsOpen] = useState(false);
  const aboutTimer = useRef(null);
  const grantsTimer = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus on scroll
  useEffect(() => {
    const handleScroll = () => {
      setAboutOpen(false);
      setGrantsOpen(false);
      setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setAboutOpen(false);
        setGrantsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active link detection (cleaner logic)
  const isActive = (path) => location.pathname === path;

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const handleMouseEnter = (setOpen, otherSetOpen, timerRef) => {
    if (isMobile) return;
    clearTimeout(timerRef.current);
    setOpen(true);
    otherSetOpen(false);
  };

  const handleMouseLeave = (setOpen, timerRef) => {
    if (isMobile) return;
    timerRef.current = setTimeout(() => setOpen(false), 250);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === "about") {
      setAboutOpen((prev) => !prev);
      setGrantsOpen(false);
    } else if (dropdown === "grants") {
      setGrantsOpen((prev) => !prev);
      setAboutOpen(false);
    }
  };

  // Detect if we're on a section (like /how-we-do-it#programs)
  const currentPath = location.pathname + location.hash;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1D6205] text-white py-2 px-4 flex justify-center sm:justify-between text-sm font-medium">
        <div className="hidden sm:flex flex-wrap gap-x-6">
          <a href="mailto:info@pleroma-sycamore.org" className="hover:underline">
            EMAIL: info@pleroma-sycamore.org
          </a>
          <a href="tel:+233597395719" className="hover:underline">
            PHONE: +233-302-905659 | +233-597-395719
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 sm:h-24" />
        </Link>

        {/* Menu */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center absolute md:static top-full right-0 bg-white md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none w-4/5 md:w-auto z-40 p-5 md:p-0 transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:ml-auto text-center md:text-left font-medium text-base">
            {/* Home */}
            <Link
              to="/"
              className={`py-2 md:py-0 ${
                isActive("/") ? "text-[#1D6205]" : "text-gray-800"
              } hover:text-[#1D6205]`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Us */}
            <div
              className="relative group"
              onMouseEnter={() =>
                handleMouseEnter(setAboutOpen, setGrantsOpen, aboutTimer)
              }
              onMouseLeave={() => handleMouseLeave(setAboutOpen, aboutTimer)}
            >
              <button
                onClick={() => toggleDropdown("about")}
                className={`flex items-center justify-center md:justify-start w-full md:w-auto py-2 md:py-0 ${
                  location.pathname === "/who-we-are"
                    ? "text-[#1D6205]"
                    : "text-gray-800"
                } hover:text-[#1D6205]`}
              >
                About Us
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`${
                      isMobile
                        ? "block pl-6 space-y-1 mt-1"
                        : "absolute left-0 top-full bg-white shadow-xl rounded-md mt-2 w-48 border border-gray-100 text-left"
                    }`}
                  >
                    <Link
                      to="/who-we-are"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1D6205]/10 hover:text-[#1D6205]"
                      onClick={() => {
                        setAboutOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Who We Are
                    </Link>
                    <Link
                      to="/how-we-do-it"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1D6205]/10 hover:text-[#1D6205]"
                      onClick={() => {
                        setAboutOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      What We Do
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Our Programs (single link, no active overlap with About Us) */}
            <Link
              to="/how-we-do-it#programs"
              className={`py-2 md:py-0 ${
                currentPath === "/how-we-do-it#programs"
                  ? "text-[#1D6205]"
                  : "text-gray-800"
              } hover:text-[#1D6205]`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Programs
            </Link>

            {/* Grants & Donations Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() =>
                handleMouseEnter(setGrantsOpen, setAboutOpen, grantsTimer)
              }
              onMouseLeave={() => handleMouseLeave(setGrantsOpen, grantsTimer)}
            >
              <button
                onClick={() => toggleDropdown("grants")}
                className={`flex items-center justify-center md:justify-start w-full md:w-auto py-2 md:py-0 ${
                  isActive("/grants") ? "text-[#1D6205]" : "text-gray-800"
                } hover:text-[#1D6205]`}
              >
                Grants & Donations
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${
                    grantsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {grantsOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`${
                      isMobile
                        ? "block pl-6 space-y-1 mt-1"
                        : "absolute left-0 top-full bg-white shadow-xl rounded-md mt-2 w-56 border border-gray-100 text-left"
                    }`}
                  >
                    <Link
                      to="/grants"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1D6205]/10 hover:text-[#1D6205]"
                      onClick={() => {
                        setGrantsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Apply for a Grant
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1D6205]/10 hover:text-[#1D6205]"
                      onClick={() => {
                        setGrantsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Donate to Support
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* What's New */}
            <Link
              to="/blog"
              className={`py-2 md:py-0 ${
                isActive("/blog") ? "text-[#1D6205]" : "text-gray-800"
              } hover:text-[#1D6205]`}
              onClick={() => setIsMenuOpen(false)}
            >
              What’s New
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className={`py-2 md:py-0 ${
                isActive("/gallery") ? "text-[#1D6205]" : "text-gray-800"
              } hover:text-[#1D6205]`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact-us"
              className={`py-2 md:py-0 ${
                isActive("/contact-us") ? "text-[#1D6205]" : "text-gray-800"
              } hover:text-[#1D6205]`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-black z-50"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setAboutOpen(false);
            setGrantsOpen(false);
          }}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
