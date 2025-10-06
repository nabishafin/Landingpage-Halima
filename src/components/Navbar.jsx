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
    <nav className=" shadow-md  fixed top-0 w-full z-[9999] bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-white">MyLanding</h1>
        <ul className="flex gap-6 text-white font-medium">
          <li>
            <Link
              to="hero"
              smooth
              duration={800}
              className="cursor-pointer hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={800}
              className="cursor-pointer hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth
              duration={800}
              className="cursor-pointer hover:text-white"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              smooth
              duration={800}
              className="cursor-pointer hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
