import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">About</span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mt-2 mb-6">Eduport.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Eduport Academic Research Centre is the result of the collective efforts of several NIT/IIT Alumni, as an attempt to make quality education accessible and affordable to all.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are on a mission to provide world-class education through online, in Vernacular Language at an affordable cost to all.
            </p>
            <Link to="/About">
              <Button variant="outline" size="lg" className="rounded-full gap-2 font-semibold border-2 border-foreground hover:bg-foreground hover:text-background">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://eduport.app/wp-content/uploads/2024/09/Team-Photo.webp"
                  alt="Eduport Team"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}