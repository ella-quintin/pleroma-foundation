import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import donate from "../../assets/images/donate.jpg";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Users } from "lucide-react";

const Donate = () => {

    const DONATION_URL = import.meta.env.VITE_DONATION_URL;


    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 60, scale: 0.97 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay, duration: 0.7, ease: "easeOut" },
        },
    });

    const handleDonate = () => {
        if (!DONATION_URL) {
            console.error("Donation URL is not configured");
            return;
        }

        window.open(
            DONATION_URL,
            "_blank",
            "noopener,noreferrer"
        );
    };




    return (
        <>
            <Navbar />

            <motion.div
                className="bg-gray-50 mt-20 overflow-x-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header Section */}
                <motion.section
                    className="relative bg-cover bg-center h-72 w-full"
                    style={{ backgroundImage: `url(${donate})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
                        <div className="text-center px-4">
                            <motion.h3
                                className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg mb-6"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                Donate to Transform Lives <br className="hidden md:block" />
                                & Empower Communities
                            </motion.h3>

                            <motion.button
                                onClick={handleDonate}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="
                bg-[#1D6205] hover:bg-[#155304]
                text-white font-semibold
                px-8 sm:px-10 py-3 sm:py-4
                rounded-full
                shadow-lg hover:shadow-xl
                transition-all
            "
                            >
                                Donate Now
                            </motion.button>
                        </div>
                    </div>


                </motion.section>

                {/* Decorative Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(29,98,5,0.06),transparent_70%)] pointer-events-none"></div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto relative px-6 md:px-8 py-16 space-y-20">

                    {/* Intro */}
                    <motion.div
                        variants={fadeUp(0.1)}
                        initial="hidden"
                        animate="show"
                        className="text-center"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Give to God’s Work.
                            <br />
                            Transform Lives Through Faith & Love.
                        </h3>

                        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                            Donate to support our programs. Your gift helps us remain agile,
                            enabling us to continue serving the young and the aged within
                            Christian communities with compassion, dignity, and hope.
                        </p>
                    </motion.div>

                    {/* Trust / Security Indicators */}
                    <motion.div
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                            <ShieldCheck className="mx-auto text-[#1D6205] mb-4" size={40} />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                Secure Giving
                            </h4>
                            <p className="text-gray-600 text-sm">
                                All donations are handled securely and responsibly,
                                ensuring your gift reaches those who need it most.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                            <HeartHandshake className="mx-auto text-[#1D6205] mb-4" size={40} />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                Faith-Driven Impact
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Your generosity directly supports Christian missions,
                                outreach programs, and social interventions.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                            <Users className="mx-auto text-[#1D6205] mb-4" size={40} />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                Lives Transformed
                            </h4>
                            <p className="text-gray-600 text-sm">
                                From the elderly to the youth, your support restores hope,
                                dignity, and purpose across communities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Call to Action Placeholder */}
                    <motion.div
                        variants={fadeUp(0.3)}
                        initial="hidden"
                        animate="show"
                        className="text-center"
                    >
                        <p className="text-gray-700 text-lg mb-6">
                            Join us in advancing God’s work through love in action.
                        </p>

                       

                        <p className="text-xs text-gray-500 mt-4">
                            Payments are processed securely via Paystack.
                            You will see our verified organization name before completing payment.
                        </p>

                        <p className="text-xs text-red-600 mt-2">
                            We will never ask for donations via WhatsApp, SMS, or personal accounts.
                        </p>




                    </motion.div>

                </div>

                <Footer />
            </motion.div>
        </>
    );
};

export default Donate;
