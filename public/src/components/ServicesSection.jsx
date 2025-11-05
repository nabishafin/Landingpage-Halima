export default function ServicesSection() {
  return (
    <div
      data-scroll
      data-scroll-speed="1"
      className="min-h-screen flex flex-col justify-center items-center bg-white"
    >
      <h2 className="text-4xl font-semibold mb-4 text-green-800">
        Our Services
      </h2>
      <ul className="space-y-3 text-lg text-gray-700">
        <li>✅ Modern Web Design</li>
        <li>✅ Smooth UX Animations</li>
        <li>✅ High Performance Frontend</li>
      </ul>
    </div>
  );
}
