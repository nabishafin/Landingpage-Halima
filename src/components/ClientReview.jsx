import React from "react";
import { Star, Plus, ExternalLink } from "lucide-react";

const ClientReview = ({ name, role, image, rating, testimonial, isCenter }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${
        isCenter ? "transform scale-105 z-10" : ""
      }`}
    >
      <p className="text-gray-900 leading-relaxed text-2xl mb-8">
        {testimonial}
      </p>

      <div className="flex gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex items-start gap-4">
        <img
          src={image || "/api/placeholder/56/56"}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const GoogleReviewCard = ({ platform, rating, totalReviews, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{platform}</h3>
            <p className="text-sm text-gray-500">{totalReviews} reviews</p>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
      </div>

      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-2xl font-bold text-gray-900">
          {rating.toFixed(1)}
        </span>
      </div>
    </a>
  );
};

export default function ClientTestimonialsSection() {
  const reviewPlatforms = [
    {
      platform: "Google",
      rating: 4.9,
      totalReviews: 127,
      link: "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review",
    },
    {
      platform: "Facebook",
      rating: 4.8,
      totalReviews: 89,
      link: "https://www.facebook.com/YOUR_PAGE/reviews",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Lucy Shepherd",
      role: "TV Producer",
      image: "/api/placeholder/56/56",
      rating: 5,
      testimonial:
        "They went above and beyond to get the shots and are really great guys. Would 100% recommend.",
    },
    {
      id: 2,
      name: "Assumpta Ozua",
      role: "Ave Creations",
      image: "/api/placeholder/56/56",
      rating: 5,
      testimonial:
        "They took the time to understand my objective and made thoughtful, strategic suggestions that elevated the final output.",
      isCenter: true,
    },
    {
      id: 3,
      name: "Ashleigh Neptial",
      role: "From Me to You",
      image: "/api/placeholder/56/56",
      rating: 5,
      testimonial:
        "Their professionalism, creativity, and attention to detail made everything smooth and stress-free.",
    },
  ];

  const handleReviewClick = () => {
    window.open(reviewPlatforms[0].link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full lg:w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h2>

        {/* Client Reviews Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <ClientReview key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Leave Review Button */}
        <div className="flex justify-center">
          <button
            onClick={handleReviewClick}
            className="w-full  bg-gray-900 hover:bg-gray-800 text-white py-2 px-8 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Leave us a review
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-4">
          Share your experience with us on Google
        </p>
      </div>
    </section>
  );
}
