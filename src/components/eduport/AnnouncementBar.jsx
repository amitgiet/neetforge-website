import React from 'react';

export default function AnnouncementBar() {
  const text = "Join Eduport Super Batch! Admissions Open for Next Year Super Batch. Complete Syllabus by January. Try our 7-Day Trial with 100% Refund Guarantee. Register Now!";
  
  return (
    <div className="bg-accent text-accent-foreground py-2.5 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-flex">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-sm font-medium">
            <span className="font-bold">Join Eduport Super Batch!</span>
            {" "}Admissions Open for Next Year Super Batch. Complete Syllabus by January. Try our 7-Day Trial with 100% Refund Guarantee. Register Now!
          </span>
        ))}
      </div>
    </div>
  );
}