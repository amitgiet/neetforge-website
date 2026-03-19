import React from "react";

const awards = [
  { title: "Formal Education Category Runners Up", org: "LONDON EDTECH-X AWARDS" },
  { title: "EdTech of the Year 2024", org: "ET BUSINESS AWARDS" },
  { title: "Emerging Startup of the year 2023", org: "BHARAT PITCHATHON 2.0" },
  { title: "Best EdTech Startup of the year 2023", org: "INDUSTRY MINISTER OF KERALA" },
];

function AwardBadge({ title, org }) {
  return (
    <div className="flex items-center gap-3 mx-8 flex-shrink-0">
      {/* Laurel wreath left */}
      <span className="text-[#FF6B35] text-2xl select-none">❮</span>
      <div className="text-center">
        <div className="text-xs font-bold text-[#1a1a2e] leading-tight max-w-[120px]">{title}</div>
        <div className="text-[10px] text-gray-500 mt-0.5 font-medium uppercase tracking-wide">{org}</div>
      </div>
      {/* Laurel wreath right */}
      <span className="text-[#FF6B35] text-2xl select-none">❯</span>
    </div>
  );
}

export default function AwardsMarquee() {
  const doubled = [...awards, ...awards, ...awards, ...awards];
  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="flex animate-marquee-awards">
        {doubled.map((a, i) => (
          <AwardBadge key={i} title={a.title} org={a.org} />
        ))}
      </div>
    </div>
  );
}