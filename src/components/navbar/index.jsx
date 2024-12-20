import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    // Close menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Helper function to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
            {/* Top Bar */}
            <div className="bg-[#1D6205] text-white py-2 px-4 flex justify-center sm:justify-between text-sm">
                <div className="hidden sm:flex flex-wrap gap-x-4">
                    <span>EMAIL: info@pleroma-sycamore.org</span>
                    <span>PHONE: +233-302- 905659 | +233-597-395719</span>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6 relative">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-24 sm:h-24" />
                </div>

                {/* Navigation Links */}
                <div
                    ref={menuRef}
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } flex-col md:flex md:flex-row md:items-center absolute md:static top-full right-0 bg-white opacity-85 md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-3/4 md:w-auto z-40 p-4 md:p-0`}
                >
                    <div className="flex flex-col md:flex-row md:space-x-8 md:ml-auto">
                        <Link
                            to="/"
                            className={`block md:inline py-2 md:py-0 font-medium text-center ${
                                isActive("/") ? "text-[#1D6205]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/who-we-are"
                            className={`block md:inline py-2 md:py-0 font-medium text-center ${
                                isActive("/who-we-are") ? "text-[#1D6205]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            Who We Are
                        </Link>
                        <Link
                            to="/how-we-do-it"
                            className={`block md:inline py-2 md:py-0 font-medium text-center ${
                                isActive("/how-we-do-it") ? "text-[#1D6205]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            How We Work
                        </Link>
                        <Link
                            to="/how-we-do-it#programs"
                            className={`block md:inline py-2 md:py-0 font-medium text-center ${
                                isActive("/how-we-do-it#programs") ? "text-[#1D6205]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            Our Programs
                        </Link>
                        <Link
                            to="/whats-new"
                            className={`block md:inline py-2 md:py-0 font-medium text-center ${
                                isActive("/whats-new") ? "text-[#1D6205]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            What's New
                        </Link>
                        <Link
                            to="/contact-us"
                            className={`block md:inline py-2 md:py-0 font-medium text-center ${
                                isActive("/contact-us") ? "text-[#1D6205]" : "text-black"
                            } hover:text-[#1D6205]`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Hamburger Menu Icon */}
                <button
                    className="md:hidden text-black z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
