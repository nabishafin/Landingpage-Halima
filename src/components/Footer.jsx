"use client";

import { useState } from "react";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="bg-black text-white py-12 px-6 pb-32">
        <div className="w-full lg:w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left side content */}
          <div className="flex-1 max-w-2xl">
            <p className="text-sm text-gray-400 mb-4">
              © 2025 Re: Initiative. All rights reserved.
            </p>
          </div>

          {/* Right side links */}
          <div className="flex flex-row gap-6 lg:gap-8 items-center">
            <button
              onClick={openModal}
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Terms and conditions
            </button>

            <a
              href="https://www.linkedin.com" // put your real LinkedIn URL here
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com" // put your real LinkedIn URL here
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-2xl max-w-4xl w-full max-h-full overflow-auto p-8 relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>

            {/* Scrollable content */}
            <div
              className="overflow-y-auto h-96 pr-2 text-gray-700"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#a0aec0 #f0f0f0",
              }}
            >
              <p className="mb-4">
                Welcome to Re: Initiative. By accessing our website, you agree
                to the following terms and conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  You may use our website for personal and non-commercial
                  purposes only.
                </li>
                <li>
                  All content on this site is protected by copyright laws.
                </li>
                <li>
                  We reserve the right to modify these terms at any time without
                  prior notice.
                </li>
                <li>
                  We are not responsible for any third-party links or content.
                </li>
                <li>
                  By using this website, you agree to comply with all applicable
                  laws.
                </li>
                <li>
                  Additional term example to test scroll behavior. Repeat this
                  multiple times to check scrolling...
                </li>
                <li>Another term example for scrolling purposes.</li>
                <li>Keep adding terms to see scroll in action.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Phasellus finibus elit sit amet urna facilisis, ac tincidunt
                  libero malesuada.
                </li>
                <li>
                  Donec pulvinar arcu nec lacus interdum, a dictum justo
                  dapibus.
                </li>
              </ul>
              <p className="mt-4">Thank you for visiting Re: Initiative.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
