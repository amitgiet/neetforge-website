import React from 'react';
import { Award } from 'lucide-react';

const awards = [
  { title: 'Formal Education Category Runners Up', org: 'LONDON EDTECH-X', sub: 'AWARDS' },
  { title: 'EdTech of the Year 2024', org: 'ET BUSINESS', sub: 'AWARDS' },
  { title: 'Emerging Startup of the Year 2023', org: 'BHARAT', sub: 'PITCHATHON 2.0' },
  { title: 'Best EdTech Startup of the Year 2023', org: 'INDUSTRY MINISTER', sub: 'OF KERALA' },
];

function AwardBadge({ title, org, sub }) {
  return (
    <div className="flex items-center gap-4 px-6 shrink-0">
      <div className="flex items-center gap-3">
        <Award className="w-8 h-8 text-primary/40" />
        <div className="text-center min-w-[160px]">
          <p className="text-xs font-semibold text-foreground leading-tight">{title}</p>
          <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-1">{org}</p>
          <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">{sub}</p>
        </div>
        <Award className="w-8 h-8 text-primary/40" />
      </div>
    </div>
  );
}

export default function AwardsCarousel() {
  return (
    <section className="py-8 border-y border-border bg-muted/30 overflow-hidden">
      <div className="flex animate-marquee-awards">
        {[...awards, ...awards, ...awards, ...awards].map((award, i) => (
          <AwardBadge key={i} {...award} />
        ))}
      </div>
    </section>
  );
}