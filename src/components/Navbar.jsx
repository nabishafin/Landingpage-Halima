"use client";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  useEffect(() => {
    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => e.preventDefault());
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">MyLanding</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link
              to="hero"
              smooth
              duration={800}
              className="cursor-pointer hover:text-green-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={800}
              className="cursor-pointer hover:text-green-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth
              duration={800}
              className="cursor-pointer hover:text-green-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              smooth
              duration={800}
              className="cursor-pointer hover:text-green-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
