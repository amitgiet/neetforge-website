import React from "react";
import { Smartphone } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d5e] rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-lg">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">Mobile App</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 leading-tight">
              Access Eduport<br />Anywhere, Anytime
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Download the Eduport app for a seamless learning experience. Watch live classes, access study materials, take mock tests, and connect with mentors — all from your smartphone.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://web.eduport.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-white text-[#1a1a2e] px-5 py-3 rounded-xl font-semibold text-sm hover:bg-orange-50 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-[#FF6B35]" />
                Access on Web
              </a>
              <a
                href="https://shop.eduport.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#FF6B35] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-orange-500 transition-colors"
              >
                Buy Courses
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-3xl bg-white/10 flex items-center justify-center">
              <Smartphone className="w-20 h-20 text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}