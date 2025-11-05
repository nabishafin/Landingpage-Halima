export default function AboutSection() {
  return (
    <div
      data-scroll
      data-scroll-speed="0.5"
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-green-50"
    >
      <h2 className="text-4xl font-semibold mb-4 text-green-800">
        About Our Journey
      </h2>
      <p className="max-w-2xl text-center text-gray-600">
        Locomotive Scroll gives buttery-smooth scrolling effects and parallax
        animation without any lag.
      </p>
    </div>
  );
}
