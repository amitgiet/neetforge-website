import React from "react";
import { Brain, Video, BookOpen, Users, Target, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    desc: "Adaptive learning ecosystem that personalizes your study path based on your performance and pace.",
    color: "bg-orange-50 text-[#FF6B35]",
  },
  {
    icon: Video,
    title: "Live + Recorded Classes",
    desc: "Attend live sessions with expert faculty or watch recorded videos anytime at your convenience.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Premium Study Materials",
    desc: "Comprehensive notes, worksheets, PYQs, and NCERT exercises crafted by IIT/AIIMS/NIT alumni.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Target,
    title: "100+ Mock Tests",
    desc: "Regular assessments and full-length mock tests to track progress and exam readiness.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    desc: "One-on-one mentorship from Kerala's best teachers from IITs, NITs, and medical colleges.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: MessageCircle,
    title: "Instant Doubt Clearance",
    desc: "Get your doubts resolved quickly with our expert doubt-clearing sessions and digital notes.",
    color: "bg-yellow-50 text-yellow-600",
  },
];

export default function WhyEduport() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1a1a2e]">Why Eduport?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}