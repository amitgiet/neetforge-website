import React from "react";

const stats = [
  { value: "50,000+", label: "Students Enrolled", icon: "👨‍🎓" },
  { value: "500+", label: "Expert Faculty", icon: "👩‍🏫" },
  { value: "100+", label: "Courses Available", icon: "📚" },
  { value: "95%", label: "Student Satisfaction", icon: "⭐" },
];

export default function StatsSection() {
  return (
    <section className="py-14 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-[#FF6B35] mb-1">{s.value}</div>
              <div className="text-gray-300 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}