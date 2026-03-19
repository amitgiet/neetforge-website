import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What is Eduport?',
    a: 'Eduport offers online tuition for Class 7 to 12 students (State & CBSE syllabus) and NEET/JEE coaching, taught by alumni from prestigious institutions like NIT, IIT, and AIIMS. The platform focuses on personalized learning through live classes, video lessons, and regular exams.',
  },
  {
    q: 'Which courses are available on Eduport?',
    a: 'Eduport provides online courses for SSLC, Plus One, Plus Two (Science, Commerce), NEET, JEE, and KEAM exam preparation. Courses are structured to align with the school curriculum, ensuring students are well-prepared for board and entrance exams.',
  },
  {
    q: 'Who teaches the courses at Eduport?',
    a: 'Eduport courses are taught by experienced tutors who are graduates from renowned institutions such as NIT, IIT, and AIIMS. They ensure a strong academic foundation for students.',
  },
  {
    q: 'How does Eduport\'s learning platform work?',
    a: 'The platform offers live classes, recorded lessons, and AI-powered adaptive learning tools. Students receive personalized mentorship, regular assessments, and detailed performance tracking.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes! Eduport offers a 7-Day Trial with 100% Refund Guarantee. If you are not satisfied within the first 7 days, you can request a full refund.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about Eduport</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-base py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}