import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Brand tokens (unchanged brand colors, only reused consistently)    */
/* ------------------------------------------------------------------ */
const PRIMARY = "#1D6205";

/* ------------------------------------------------------------------ */
/*  Navigation data — single source of truth for both desktop & mobile */
/*  (removes the previous triplicated dropdown markup/logic)           */
/* ------------------------------------------------------------------ */
const NAV_ITEMS = [
  { type: "link", label: "Home", path: "/" },
  {
    type: "dropdown",
    key: "about",
    label: "About Us",
    isActive: (pathname) =>
      pathname === "/who-we-are" || pathname === "/how-we-do-it",
    children: [
      { label: "Who We Are", path: "/who-we-are" },
      {
        label: "Meet Our Board",
        path: "/who-we-are#board",
        scrollTargetId: "board",
      },
      { label: "What We Do", path: "/how-we-do-it" },
    ],
  },
  {
    type: "link",
    label: "Our Programs",
    path: "/how-we-do-it#programs",
    matchAgainst: "full",
  },
  {
    type: "dropdown",
    key: "grants",
    label: "Grants & Donations",
    isActive: (pathname) => pathname === "/grants-application",
    children: [
      { label: "Apply for a Grant", path: "/grants-application" },
      { label: "Donate to Support", path: "/donate" },
    ],
  },
  { type: "link", label: "What's New", path: "/blog" },
  { type: "link", label: "Gallery", path: "/gallery" },
  { type: "link", label: "Resources", path: "/resources" },
  { type: "link", label: "Contact Us", path: "/contact-us" },
];

/* ------------------------------------------------------------------ */
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */
const desktopDropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 28 },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const accordionVariants = {
  collapsed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 320, damping: 34 } },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeIn" } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop hover/click
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null); // mobile drawer
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const timersRef = useRef({});
  const desktopNavRef = useRef(null);
  const drawerRef = useRef(null);

  /* ---------------- Responsive breakpoint tracking ---------------- */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- Sticky shrink + close-on-scroll ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      setOpenDropdown(null);
      setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Close desktop dropdowns on outside click -------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- Close mobile drawer on outside click ------------ */
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  /* ---------------- Close everything on route change ---------------- */
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileAccordion(null);
  }, [location.pathname, location.hash]);

  /* ---------------- Lock body scroll while drawer is open ------------ */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* ---------------- Generic dropdown helpers (desktop) --------------- */
  const handleMouseEnter = useCallback(
    (key) => {
      if (isMobile) return;
      clearTimeout(timersRef.current[key]);
      setOpenDropdown(key);
    },
    [isMobile]
  );

  const handleMouseLeave = useCallback(
    (key) => {
      if (isMobile) return;
      timersRef.current[key] = setTimeout(() => {
        setOpenDropdown((prev) => (prev === key ? null : prev));
      }, 220);
    },
    [isMobile]
  );

  const toggleDropdown = useCallback((key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }, []);

  const toggleMobileAccordion = useCallback((key) => {
    setOpenMobileAccordion((prev) => (prev === key ? null : key));
  }, []);

  /* ---------------- Active state resolution --------------------------- */
  const isLinkActive = (item) => {
    if (item.matchAgainst === "full") return currentPath === item.path;
    return location.pathname === item.path;
  };

  /* ---------------- Shared child-link click handler -------------------- */
  const handleChildClick = (child, e, closeFn) => {
    closeFn();
    setIsMenuOpen(false);
    if (child.scrollTargetId && location.pathname === child.path.split("#")[0]) {
      e.preventDefault();
      const target = document.getElementById(child.scrollTargetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* ---------------------------------------------------------------- */}
      {/* Top contact bar                                                  */}
      {/* ---------------------------------------------------------------- */}
      <div
        className="hidden sm:block text-white text-xs sm:text-sm font-medium tracking-wide"
        style={{ backgroundColor: PRIMARY }}
      >
        <div className="w-full px-5 sm:px-8 lg:px-12 py-2 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-8 gap-y-1">
          <a
            href="mailto:info@pleroma-sycamore.org"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={2} />
            <span>info@pleroma-sycamore.org</span>
          </a>
          <a
            href="tel:+233597395719"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2} />
            <span>+233-302-905659 &nbsp;|&nbsp; +233-597-395719</span>
          </a>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Main navbar                                                      */}
      {/* ---------------------------------------------------------------- */}
      <div
        className={`bg-white transition-all duration-300 ease-out ${isScrolled ? "shadow-lg" : "shadow-sm"
          }`}
      >
        <div
          className={`w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ease-out ${isScrolled ? "py-2.5" : "py-4"
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="Pleroma Sycamore Foundation home">
            <motion.img
              src={logo}
              alt="Pleroma Sycamore Foundation"
              className={`transition-all duration-300 ease-out ${isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
                }`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>

          {/* Desktop navigation */}
          <div
            ref={desktopNavRef}
            className="hidden md:flex md:items-center md:gap-3 lg:gap-6 xl:gap-8"
          >
            {NAV_ITEMS.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative px-3 py-2 text-[15px] font-medium tracking-[0.01em] transition-colors duration-200 group ${isLinkActive(item)
                      ? "text-[#1D6205] font-semibold"
                      : "text-gray-700 hover:text-[#1D6205]"
                    }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[#1D6205] origin-left transition-transform duration-300 ease-out ${isLinkActive(item)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              ) : (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={() => handleMouseLeave(item.key)}
                >
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.key)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.key}
                    className={`relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium tracking-[0.01em] transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6205]/40 rounded-md ${item.isActive(location.pathname)
                        ? "text-[#1D6205] font-semibold"
                        : "text-gray-700 hover:text-[#1D6205]"
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.key ? "rotate-180 text-[#1D6205]" : ""
                        }`}
                    />
                    <span
                      className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[#1D6205] origin-left transition-transform duration-300 ease-out ${item.isActive(location.pathname)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.key && (
                      <motion.div
                        variants={desktopDropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-0 top-full mt-3 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-gray-900/10 p-2 origin-top"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            role="menuitem"
                            onClick={(e) =>
                              handleChildClick(child, e, () => setOpenDropdown(null))
                            }
                            className="group/item flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 border-l-2 border-transparent hover:border-[#1D6205] hover:bg-[#1D6205]/5 hover:text-[#1D6205] transition-all duration-200"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300 group-hover/item:bg-[#1D6205] transition-colors duration-200" />
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </div>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-800 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6205]/40"
          >
            <Menu className="w-6 h-6" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Mobile slide-out drawer                                          */}
      {/* ---------------------------------------------------------------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              ref={drawerRef}
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm bg-white rounded-l-3xl shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <img src={logo} alt="Pleroma Sycamore Foundation" className="h-12" />
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-50 hover:text-[#1D6205] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6205]/40"
                >
                  <X className="w-6 h-6" strokeWidth={1.75} />
                </button>
              </div>

              {/* Drawer nav items */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {NAV_ITEMS.map((item) =>
                  item.type === "link" ? (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors duration-200 ${isLinkActive(item)
                          ? "text-[#1D6205] bg-[#1D6205]/5 font-semibold"
                          : "text-gray-800 hover:bg-gray-50 hover:text-[#1D6205]"
                        }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div key={item.key}>
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(item.key)}
                        aria-haspopup="true"
                        aria-expanded={openMobileAccordion === item.key}
                        className={`w-full flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors duration-200 focus:outline-none ${item.isActive(location.pathname)
                            ? "text-[#1D6205] bg-[#1D6205]/5 font-semibold"
                            : "text-gray-800 hover:bg-gray-50 hover:text-[#1D6205]"
                          }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${openMobileAccordion === item.key
                              ? "rotate-180 text-[#1D6205]"
                              : ""
                            }`}
                        />
                      </button>

                      <motion.div
                        initial="collapsed"
                        animate={openMobileAccordion === item.key ? "open" : "collapsed"}
                        variants={accordionVariants}
                        className="overflow-hidden pl-4"
                      >
                        <div className="border-l-2 ml-3 mt-1 mb-1 space-y-0.5" style={{ borderColor: `${PRIMARY}33` }}>
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              onClick={(e) =>
                                handleChildClick(child, e, () =>
                                  setOpenMobileAccordion(null)
                                )
                              }
                              className="block px-5 py-3 text-sm font-medium text-gray-600 hover:text-[#1D6205] transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )
                )}
              </div>

              {/* Drawer footer */}
              <div className="px-6 py-5 border-t border-gray-100 space-y-2 text-sm text-gray-500">
                <a href="mailto:info@pleroma-sycamore.org" className="flex items-center gap-2 hover:text-[#1D6205] transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  info@pleroma-sycamore.org
                </a>
                <a href="tel:+233597395719" className="flex items-center gap-2 hover:text-[#1D6205] transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  +233-302-905659
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;