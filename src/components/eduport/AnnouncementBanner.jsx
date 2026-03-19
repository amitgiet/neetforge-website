import React from "react";

const message = "Join Eduport Super Batch! Admissions Open for Next Year Super Batch. Complete Syllabus by January. Try our 7-Day Trial with 100% Refund Guarantee. Register Now!";

export default function AnnouncementBanner() {
  return (
    <div className="bg-[#1a1a2e] text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-sm font-medium mx-8">
            <span className="text-[#FF6B35] font-bold">Join Eduport Super Batch!</span>{" "}
            Admissions Open for Next Year Super Batch. Complete Syllabus by January.
            Try our 7-Day Trial with 100% Refund Guarantee.{" "}
            <a href="#" className="underline font-semibold">Register Now!</a>
            <span className="mx-8 text-[#FF6B35]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}