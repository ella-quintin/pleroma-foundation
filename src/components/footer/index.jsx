
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { MapPin, Phone, Mail } from 'lucide-react';


const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rid8tfh",
        "template_w1830sh",
        form.current,
        "w0GfeCN8k1_stJidz"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <footer className="bg-[#1D6205] text-white py-12 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 sm:px-6 md:px-8">
        {/* Company Info + Social Links */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">Pleroma Sycamore Foundation</h3>
          <p className="text-sm md:text-sm text-white hover:text-gray-100 leading-relaxed font-thin text-left mb-6">
            Pleroma Sycamore Foundation is a divine inspiration, established to enforce God’s will on earth through impactful partnerships and spirit-filled initiatives.
          </p>
          <h3 className="text-lg text-left font-bold mb-3">Social Media</h3>
          <div className="mt-4 flex text-left space-x-4">
            <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links + Help */}
        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white font-thin">
              {[
                { name: "Home", path: "/" },
                { name: "Who We Are", path: "/who-we-are" },
                { name: "How We Work", path: "/how-we-work" },
                { name: "What's New", path: "/whats-new" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="hover:underline hover:text-gray-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Our Programs</h3>
            <ul className="space-y-3 text-sm font-thin text-white hover:text-gray-100">
              <li>Mustard Seed Christian Entrepreneurship Development Program</li>
              <li>Youth For Jesus (Y4J) Initiative</li>
              <li>Children for Jesus (C4J) Initiative </li>
              <li>School of Evangelism - Masterclass</li>
              <li>Sycamore School of Christian Leadership - Masterclass</li>
              <li>Home and Day Care for the Aged</li>
              <li>Soup Kitchen </li>
              <li>Pleroma-Sycamore Media Ministry</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4 font-thin">
              <li className="flex items-center">
                <MapPin className="text-white w-7 h-7 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Location:</span> 4 Naa Botwey Street, Mabey, Haatso , Accra, Ghana
                </p>
              </li>
              <li className="flex items-center">
                <Phone className="text-white w-6 h-6 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Phone:</span> +233-302- 905659 | +233-597-395719
                </p>
              </li>
              <li className="flex items-center">
                <Mail className="text-white w-6 h-6 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Email:</span>{" "}
                  <a
                    href="mailto:info@pleroma-scycamore.org"
                    className="hover:underline text-white hover:text-gray-200"
                  >
                    info@pleroma-sycamore.org
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-base font-bold mb-4">Contact Us</h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 w-full max-w-sm bg-white p-4 rounded-lg shadow-md"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone"
              required
              className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="w-full p-2 md:p-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>

      {/* Footer Bottom */}

      <div className="mt-12 border-t border-white pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pleroma Sycamore Foundation. All rights reserved.
          <a href="https://www.freepik.com" className="text-gray-300 hover:underline" target="_blank" rel="noopener noreferrer"> Freepik</a>
        </p>
      </div>
    </footer >
  );
};

export default Footer;
