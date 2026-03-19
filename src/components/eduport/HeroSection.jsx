import React from "react";
import { Star } from "lucide-react";

const courseTags = [
  "Class 7 - 12 (State & CBSE)",
  "NEET-JEE Foundation",
  "NEET-JEE (Offline)",
  "11 & 12 Integrated school",
  "Class 11 - 12 (Science,Commerce,Humanities)",
  "CUET",
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-orange-50/30 to-blue-50/20 py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FF6B35]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* AdaPT Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm">
          <span className="text-[#FF6B35] font-bold text-sm">▲</span>
          <span className="text-[#1a1a2e] font-bold text-sm tracking-wide">AdaPT</span>
        </div>

        {/* Main Headline */}
        <div className="relative mb-4">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight">
            <span className="text-[#FF6B35]">Fun,</span>{" "}
            <span className="text-[#1a1a2e] italic">Engaging, Personalized</span>
          </h1>
          {/* Decorative sparkle */}
          <div className="absolute -top-4 right-1/3 text-yellow-400 text-2xl hidden md:block">✦</div>
        </div>

        {/* EveryBody Can Learn Banner */}
        <div className="relative inline-block mb-10 mt-2">
          <div className="bg-[#FF6B35] text-white font-poppins font-bold text-2xl md:text-4xl px-10 py-4 rounded-full shadow-lg relative">
            EveryBody Can Learn
          </div>
          {/* Decorative star */}
          <div className="absolute -bottom-3 -right-3 text-[#1a1a2e] text-2xl hidden md:block">✶</div>
        </div>

        {/* Course Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 mt-8">
          {courseTags.map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-[#1a1a2e] shadow-sm hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors cursor-pointer">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              {tag}
            </span>
          ))}
        </div>

        {/* Tagline + CTA */}
        <p className="text-gray-600 text-base mb-6">
          Expert classes by <strong className="text-[#1a1a2e]">IIT/AIIMS/NIT Alumni.</strong>
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="text-[#1a1a2e] font-medium">For Admission</span>
          <a
            href="#contact"
            className="bg-[#1a1a2e] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF6B35] transition-colors shadow-md"
          >
            Connect Us
          </a>
        </div>
      </div>
    </section>
  );
}