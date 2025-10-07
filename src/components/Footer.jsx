export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 pb-32">
      <div className="w-full lg:w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        {/* Left side content */}
        <div className="flex-1 max-w-2xl">
          <p className="text-sm text-gray-400 mb-4">
            © 2025 Re: Initiative. All rights reserved.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We streamline your content creation process, helping you batch
            produce high-quality content efficiently. Preventing burnout, and
            allowing you to maintain consistent output.
          </p>
          <p className="text-gray-300 font-medium">
            Let your videos work for you so you don't have to.
          </p>
        </div>

        {/* Right side links */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Terms and conditions
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
