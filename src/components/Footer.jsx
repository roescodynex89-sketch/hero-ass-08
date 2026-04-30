"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
          {/* Section 1: Logo & Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              SUN<span className="text-[#F59E0B]">CART</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Your one-stop shop for all your summer essentials. From stylish
              sunglasses to skincare, you will find it all here.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#F59E0B] transition-all text-white"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#F59E0B] transition-all text-white"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#F59E0B] transition-all text-white"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#F59E0B]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#F59E0B]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1 text-[#F59E0B]" />
                <span>Tokyo Japan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhoneAlt className="text-[#F59E0B]" />
                <span>+0999 1234 567890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-[#F59E0B]" />
                <span>support@suncart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            © 2026{" "}
            <span className="font-bold">
              SUN<span>CART</span>
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
