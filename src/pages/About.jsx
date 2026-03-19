import React from 'react';
import AnnouncementBar from '../components/eduport/AnnouncementBar';
import Navbar from '../components/eduport/Navbar';
import Footer from '../components/eduport/Footer';
import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become the most trusted and accessible online learning platform, empowering every student to achieve academic excellence regardless of their background.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide world-class education through online, in Vernacular Language at an affordable cost to all, leveraging technology and expert educators.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We believe in accessibility, quality, innovation, and student-first approach. Every decision we make is guided by the impact it has on our students\' learning journey.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">About</span>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mt-2">Eduport.</h1>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eduport Academic Research Centre is the result of the collective efforts of several NIT/IIT Alumni, as an attempt to make quality education accessible and affordable to all. We are on a mission to provide world-class education through online, in Vernacular Language at an affordable cost to all.
            </p>
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-3xl overflow-hidden">
          <img
            src="https://eduport.app/wp-content/uploads/2024/09/Team-Photo.webp"
            alt="Eduport Team"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}