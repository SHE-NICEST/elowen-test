"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vision & Mission", path: "/" },
    { name: "Activities", path: "/activities" },
    { name: "Careers", path: "/careers" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-dark-900/90 border-b border-white/10 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white"
            >
              <div className="bg-brand-500 flex h-8 w-8 items-center justify-center rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              SHE NICEST
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-brand-500 bg-white/5"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-dark-900 border-b border-white/10 md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.path)
                    ? "text-brand-500 bg-white/5"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
