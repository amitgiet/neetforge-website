import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Menon",
    exam: "NEET 2024 - AIR 342",
    text: "Eduport's adaptive learning system helped me identify my weak areas and work on them systematically. The faculty from IIT and AIIMS are exceptional. I couldn't have cracked NEET without Eduport!",
    stars: 5,
    avatar: "AM",
  },
  {
    name: "Sneha Krishnan",
    exam: "JEE Advanced 2024",
    text: "The live classes and the quality of study materials provided by Eduport are unmatched. The personalized mentorship from IIT alumni gave me the edge I needed for JEE Advanced.",
    stars: 5,
    avatar: "SK",
  },
  {
    name: "Rahul Nair",
    exam: "Plus Two Board - 98%",
    text: "Eduport helped me balance both board exams and entrance coaching. The 100+ mock tests kept me well prepared. Highly recommend to all Plus Two students in Kerala!",
    stars: 5,
    avatar: "RN",
  },
  {
    name: "Priya Suresh",
    exam: "KEAM 2024 - Top 100",
    text: "The AdaPT learning ecosystem is revolutionary. It personalizes your study schedule and ensures you never fall behind. Eduport is truly the future of education.",
    stars: 5,
    avatar: "PS",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1a1a2e]">What Our Students Say</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center relative">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(t.stars)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold text-sm">
              {t.avatar}
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1a1a2e]">{t.name}</div>
              <div className="text-[#FF6B35] text-sm font-medium">{t.exam}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-[#FF6B35]" : "bg-gray-200"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}