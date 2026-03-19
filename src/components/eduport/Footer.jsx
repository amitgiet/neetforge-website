import React from "react";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["Home", "Our Courses", "NEET - JEE Campus", "Study Materials", "Careers", "About", "Contact Us"];
const courses = ["NCERT", "CBSE", "Kerala State", "JEE", "NEET", "CUET", "KEAM"];
const campusMalappuram = ["Inkel Campus", "Kondotty Campus"];
const campusKozhikode = ["Feroke Campus", "Mathara Campus"];
const campusThrissur = ["Eduport Campus"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a2e] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <img
                src="https://eduport.app/wp-content/uploads/2024/09/Eduport-Logo1.svg.png"
                alt="Eduport"
                className="h-10 object-contain brightness-200"
                onError={
                  /** @param {React.SyntheticEvent<HTMLImageElement>} e */
                  (e) => {
                    const imageEl = e.currentTarget;
                    imageEl.style.display = "none";
                    const fallbackEl = imageEl.nextElementSibling;
                    if (fallbackEl instanceof HTMLElement) {
                      fallbackEl.style.display = "block";
                    }
                  }
                }
              />
              <span style={{display:"none"}} className="text-white text-2xl font-bold">
                <span className="text-[#FF6B35]">e</span>duport
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Explore a world of educational resources, connect with peers, and enhance your skills with Eduport. Join our community today and take your learning to the next level.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mb-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="mailto:hello@eduport.app" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
            <p className="text-[#FF6B35] font-semibold text-sm mb-1">For admission :</p>
            <a href="tel:+919207998855" className="text-white font-bold text-base hover:text-[#FF6B35] transition-colors">
              +91 92 07 99 88 55
            </a>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:hello@eduport.app" className="text-gray-400 text-sm hover:text-white transition-colors">hello@eduport.app</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#FF6B35] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-4">Courses</h4>
            <ul className="space-y-2">
              {courses.map((c) => (
                <li key={c}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#FF6B35] transition-colors">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEET-JEE Campus */}
          <div>
            <h4 className="text-white font-bold mb-4">NEET-JEE Campus</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold text-sm mb-1">Malappuram</p>
                {campusMalappuram.map((c) => (
                  <a key={c} href="#" className="block text-gray-400 text-sm hover:text-[#FF6B35] transition-colors">{c}</a>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Kozhikode</p>
                {campusKozhikode.map((c) => (
                  <a key={c} href="#" className="block text-gray-400 text-sm hover:text-[#FF6B35] transition-colors">{c}</a>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Thrissur</p>
                {campusThrissur.map((c) => (
                  <a key={c} href="#" className="block text-gray-400 text-sm hover:text-[#FF6B35] transition-colors">{c}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "1. What is Eduport?", a: "Eduport offers online tuition for Class 7 to 12 students (State & CBSE syllabus) and NEET/JEE coaching, taught by alumni from NIT, IIT, and AIIMS. The platform focuses on personalized learning through live classes, video lessons, and regular exams." },
              { q: "2. Which courses are available on Eduport?", a: "Eduport provides online courses for SSLC, Plus One, Plus Two (Science, Commerce), NEET, JEE, and KEAM exam preparation. Courses are structured to align with the school curriculum." },
              { q: "3. Who teaches the courses at Eduport?", a: "Eduport courses are taught by experienced tutors who are graduates from renowned institutions such as NIT, IIT, and AIIMS. They ensure strong conceptual understanding and exam readiness." },
              { q: "4. How does the AdaPT system work?", a: "The AdaPT (Adaptive Platform Technology) system personalizes your learning experience based on your performance, pace, and weak areas to help you improve efficiently." },
            ].map((faq, i) => (
              <div key={i}>
                <h5 className="text-white font-semibold text-sm mb-1">{faq.q}</h5>
                <p className="text-gray-400 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Eduport Academic Research Centre. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
