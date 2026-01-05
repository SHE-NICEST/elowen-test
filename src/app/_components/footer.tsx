import React from "react";
import {
  Twitter,
  Instagram,
  MessageCircle,
  FileText,
  Shield,
  Info,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter text-white">
              SHE NICEST
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering the next generation of creators through inclusive
              hackathons and community events.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-500 flex items-center text-gray-400 transition-colors"
                >
                  <span className="mr-2 flex h-5 w-5 items-center justify-center">
                    📕
                  </span>{" "}
                  Xiaohongshu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-500 flex items-center text-gray-400 transition-colors"
                >
                  <span className="mr-2 flex h-5 w-5 items-center justify-center">
                    🟡
                  </span>{" "}
                  Jike
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-500 flex items-center text-gray-400 transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" /> WeChat Public
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-500 flex items-center text-gray-400 transition-colors"
                >
                  <Twitter size={18} className="mr-2" /> Twitter / X
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-500 flex items-center text-gray-400 transition-colors"
                >
                  <Instagram size={18} className="mr-2" /> Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Status */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-white"
                >
                  <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>{" "}
                  Systems Normal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-white"
                >
                  <FileText size={16} className="mr-2" /> Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-white"
                >
                  <Shield size={16} className="mr-2" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-white"
                >
                  <Info size={16} className="mr-2" /> Legal Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} SHE NICEST. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <span>Shanghai</span>
            <span>Beijing</span>
            <span>Shenzhen</span>
            <span>Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
