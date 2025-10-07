"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent default behavior for all links (optional - react-scroll handles this)
    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => e.preventDefault());
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: "you", label: "You" },
    { to: "clients", label: "Clients" },
    { to: "us", label: "Us" },
    { to: "pricing", label: "Pricing" },
  ];

  return (
    <header className="fixed top-0 w-full z-[9999] bg-black/80 backdrop-blur-sm">
      <nav className="text-white">
        <div className="mx-auto w-full md:w-11/12 px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold flex-shrink-0">
              <div className="flex gap-1 items-center justify-center">
                <div className="border-2 px-1">Re:</div>
                <div>Initiative</div>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-12 lg:space-x-32 text-lg font-semibold">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  activeClass="text-gray-300"
                  spy={true}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>

            {/* Right side spacer for balance (desktop only) */}
            <div className="hidden md:block flex-shrink-0 w-[120px]"></div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-black/90 backdrop-blur-sm transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-100}
                className="block text-sm font-medium hover:text-gray-300 transition-colors py-2 w-full text-left cursor-pointer"
                onClick={closeMobileMenu}
                activeClass="text-gray-300"
                spy={true}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;