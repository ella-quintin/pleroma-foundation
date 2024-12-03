import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

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

    return (
        <nav>
            {/* Top Bar */}
            <div className="bg-[#1D6205] text-white py-2 px-4 flex justify-center sm:justify-between text-sm">
                <div className="hidden sm:flex flex-wrap gap-x-4">
                    <span>MAIL: contact@ourcharity.com</span>
                    <span>PHONE: +24 3772 120 091 / +56452 4567</span>
                </div>
                {/* <div className="hidden sm:block">
                    <button className="bg-green-600 px-4 py-2 text-white rounded hover:bg-green-700">
                        Donate Now
                    </button>
                </div> */}
            </div>

            {/* Main Navbar */}
            <div className="bg-white shadow-md relative">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-16 sm:h-20" />
                    </div>

                    {/* Navigation Links */}
                    <div
                        ref={menuRef}
                        className={`${isMenuOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row md:items-center absolute md:static top-20 right-0 bg-white md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-3/4 md:w-auto z-40 p-4 md:p-0`}
                    >
                        <div className="flex flex-col md:flex-row md:space-x-8 md:ml-auto">
                            <Link
                                to="/"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                Home
                            </Link>
                            <Link
                                to="/who-we-are"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                Who We Are
                            </Link>
                            {/* <Link
                                to="/what-we-do"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                What We Do
                            </Link> */}
                            <Link
                                to="/how-we-do-it"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                How We Do It
                            </Link>
                            <Link
                                to="/whats-new"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                What's New
                            </Link>
                            <Link
                                to="/contact-us"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
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
            </div>
        </nav>
    );
};

export default Navbar;
