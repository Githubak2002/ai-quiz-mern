import React, { useState } from "react";

import { BorderBeam } from "../Components/magicui/BorderBeam";

// ==== all features ====
const features = [
  {
    title: "AI-Generated Quizzes",
    description:
      "Generate quizzes effortlessly using AI. Simply choose any topic, and our intelligent system will create customized questions tailored to your needs.",
  },
  {
    title: "Advanced JWT Authentication",
    description:
      "Utilize secure JWT authentication that includes features like email verification and password recovery. This ensures a safe and smooth user experience while managing accounts.",
  },
  {
    title: "Diverse Quiz Topics",
    description:
      "Take quizzes on a wide range of topics. Whether you're interested in science, history, or pop culture, there's something for everyone.",
  },
  {
    title: "Beginner-Friendly Interface",
    description:
      "Enjoy an easy-to-use interface designed for all skill levels. Even beginners can navigate the platform effortlessly and create quizzes with ease.",
  },
  {
    title: "Fully Secure",
    description:
      "Rest assured with a fully secure platform that protects user data and privacy. Our robust security measures ensure that your information is safe at all times.",
  },
];

const Features = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    
    <section className="py-16 px-4 bg-[#fff]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-medium text-center mb-12 font">
        Features
      </h2>

      <div className="flexCenter flex-wrap gap-10 overflow-hidden py-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg border-2 max-w-96 px-3 duration-300 transition-all ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-30"
                : "opacity-100 hover:scale-110 "
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <BorderBeam />
            <h3 className="text-xl mb-4 font-raleway font-semibold">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-7 text-sm font-raleway">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Features