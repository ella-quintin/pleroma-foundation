import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const DonationSuccess = () => {
    return (
        <>
            <Navbar />

            <div className="relative min-h-[80vh] pt-40 pb-12 flex items-center justify-center bg-gray-50 px-4 sm:px-6 overflow-hidden">
                
                {/* Decorative soft glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(29,98,5,0.08),transparent_60%)] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative max-w-xl w-full bg-white rounded-3xl shadow-xl px-6 sm:px-10 py-10 sm:py-12 text-center"
                >
                    {/* Animated Heart */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 160,
                        }}
                        className="mb-4"
                    >
                        <Heart
                            className="mx-auto text-[#1D6205]"
                            size={52}
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
                    >
                        Thank You for Giving
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.6 }}
                        className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base"
                    >
                        Your generosity is an act of faith and love.
                        Because of you, lives are being touched, hope
                        is being restored, and God’s work continues
                        to grow within our communities.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.75, duration: 0.6 }}
                        className="text-xs sm:text-sm text-gray-500 italic mb-8"
                    >
                        “Whoever is generous to the poor lends to the Lord.” — Proverbs 19:17
                    </motion.p>

                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-[#1D6205] text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:bg-[#155304] transition"
                    >
                        Return to Home
                    </motion.a>

                    {/* Trust reassurance */}
                    <p className="text-[11px] text-gray-400 mt-6">
                        If you did not complete a donation, please disregard this message.
                    </p>
                </motion.div>
            </div>

            
        </>
    );
};

export default DonationSuccess;
