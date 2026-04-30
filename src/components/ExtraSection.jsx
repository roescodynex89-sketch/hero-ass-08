"use client";

import { FaTint, FaSun, FaGlasses, FaLeaf } from "react-icons/fa";
import "animate.css";

const tips = [
  {
    icon: <FaTint />,
    title: "Stay Hydrated",
    desc: "Drink plenty of water to stay fresh and energetic.",
  },
  {
    icon: <FaSun />,
    title: "Use Sunscreen",
    desc: "Protect your skin from harmful UV rays.",
  },
  {
    icon: <FaGlasses />,
    title: "Wear Sunglasses",
    desc: "Keep your eyes safe and stylish.",
  },
  {
    icon: <FaLeaf />,
    title: "Skin Care",
    desc: "Keep your skin moisturized and healthy.",
  },
];

export default function ExtraSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold animate__animated animate__fadeInUp">
          🌴 Summer Care Tips
        </h2>
        <p className="text-gray-500 mt-2">
          Simple tips to stay cool and protected this summer
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 px-5 md:px-16">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="text-3xl text-orange-500 mb-3">
              {tip.icon}
            </div>
            <h3 className="font-semibold text-lg">{tip.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}