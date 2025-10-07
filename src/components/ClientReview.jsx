import React from "react";
import { Star, Plus, ExternalLink } from "lucide-react";

// Import your images
import LucyImage from "../../public/customer-1.jpg";
import LucyImage1 from "../../public/customer-2.jpg";
import LucyImage2 from "../../public/customer-3.jpg";

import Image from "next/image";

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
        <Image
          src={image}
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

export default function ClientTestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Lucy Shepherd",
      role: "TV Producer",
      image: LucyImage,
      rating: 5,
      testimonial:
        "They went above and beyond to get the shots and are really great guys. Would 100% recommend.",
    },
    {
      id: 2,
      name: "Assumpta Ozua",
      role: "Ave Creations",
      image: LucyImage1,
      rating: 5,
      testimonial:
        "They took the time to understand my objective and made thoughtful, strategic suggestions that elevated the final output.",
      isCenter: true,
    },
    {
      id: 3,
      name: "Ashleigh Neptial",
      role: "From Me to You",
      image: LucyImage2,
      rating: 5,
      testimonial:
        "Their professionalism, creativity, and attention to detail made everything smooth and stress-free.",
    },
  ];

  const handleReviewClick = () => {
    window.open(
      "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full lg:w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <ClientReview key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleReviewClick}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-8 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
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
