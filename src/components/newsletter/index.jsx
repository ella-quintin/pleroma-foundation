import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MailCheck,
  Leaf,
} from "lucide-react";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    setSubscribing(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://pleroma-sycamore.org/api/newsletter.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setAlreadySubscribed(Boolean(data.alreadySubscribed));
        setMessage(
          data.alreadySubscribed
            ? "This email is already subscribed."
            : "Thank you for subscribing to our newsletter."
        );
        setEmail("");
      } else {
        setSuccess(false);
        setAlreadySubscribed(false);
        setMessage(
          data.message ||
          "Unable to subscribe."
        );
      }
    } catch (error) {
      setSuccess(false);
      setAlreadySubscribed(false);
      setMessage(
        "Something went wrong. Please try again."
      );
    }

    setSubscribing(false);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
      <div
        className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#0C3A0A] via-[#1D6205] to-[#1F7A2E] p-8 sm:p-12 md:p-16 shadow-2xl shadow-[#0C3A0A]/30"
      >
        {/* Organic texture: soft leaf-vein dot grid, low opacity */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Decorative organic blobs (asymmetric, leaf-like) */}
        <div className="absolute -top-24 -right-16 w-72 h-72 bg-[#8FD14F]/20 blur-3xl [border-radius:60%_40%_55%_45%/45%_55%_40%_60%]" />
        <div className="absolute -bottom-28 -left-20 w-80 h-80 bg-[#F4C95D]/10 blur-3xl [border-radius:45%_55%_40%_60%/55%_40%_60%_45%]" />

        <div className="relative z-10 grid md:grid-cols-[1.05fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left: message */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4C95D]/15 border border-[#F4C95D]/30 text-[#F4E4B0] text-xs font-semibold uppercase tracking-[0.15em] mb-6">
              <Leaf className="w-3.5 h-3.5" />
              Stay Connected
            </div>

            <h3 className="text-white text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight mb-5">
              Never miss a{" "}
              <span className="text-white">story</span> of impact
            </h3>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Receive inspiring stories, ministry updates, community impact reports, and upcoming events directly in your inbox.
            </p>

            <div className="hidden md:flex items-center gap-2 mt-8 text-white/60 text-sm">
              <ShieldCheck className="w-4 h-4 text-[#8FD14F]" />
              No spam. Unsubscribe whenever you like.
            </div>
          </div>

          {/* Right: form card */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-xl"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1D6205]/10 flex items-center justify-center mx-auto mb-4">
                    {alreadySubscribed ? (
                      <MailCheck className="w-7 h-7 text-[#1D6205]" />
                    ) : (
                      <CheckCircle2 className="w-7 h-7 text-[#1D6205]" />
                    )}
                  </div>
                  <h4 className="text-gray-900 font-bold text-xl mb-2">
                    {alreadySubscribed
                      ? "You're already subscribed"
                      : "You're on the list"}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {alreadySubscribed
                      ? "This email is already on our newsletter list — thanks for being part of our community."
                      : "Thank you for subscribing. Look out for our next update in your inbox."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSuccess(false);
                      setAlreadySubscribed(false);
                      setMessage("");
                    }}
                    className="text-[#1D6205] text-sm font-semibold hover:underline"
                  >
                    Subscribe another email
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubscribe}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-xl"
                >
                  <div className="grid grid-cols-1 gap-3 mb-3">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border-0 outline-none text-sm text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#F4C95D] transition-shadow"
                      />
                    </div>

                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border-0 outline-none text-sm text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#F4C95D] transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-10 pr-3 py-3 rounded-xl border-0 outline-none text-sm text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#F4C95D] transition-shadow"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={subscribing}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-xl text-[#1D6205] font-semibold text-sm hover:bg-[#F4C95D]/90 hover:text-[#0C3A0A] transition-all duration-300 shadow-md disabled:opacity-50 disabled:pointer-events-none group"
                  >
                    {subscribing ? (
                      "Subscribing…"
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <p className="flex md:hidden items-center justify-center gap-1.5 text-white/60 text-xs mt-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8FD14F]" />
                    No spam. Unsubscribe whenever you like.
                  </p>

                  {message && (
                    <p
                      className={`mt-4 text-sm text-center ${success ? "text-green-200" : "text-red-200"
                        }`}
                    >
                      {message}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Newsletter;
