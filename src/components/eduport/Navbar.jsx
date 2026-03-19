import React, { useState } from "react";
import { Phone, ShoppingCart, Monitor, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://eduport.app/wp-content/uploads/2024/09/Eduport-Logo1.svg.png"
            alt="Eduport"
            className="h-10 object-contain"
            onError={
              /** @param {React.SyntheticEvent<HTMLImageElement>} e */
              (e) => {
                const imageEl = e.currentTarget;
                imageEl.style.display = "none";
                const fallbackEl = imageEl.nextElementSibling;
                if (fallbackEl instanceof HTMLElement) {
                  fallbackEl.style.display = "flex";
                }
              }
            }
          />
          <div style={{display:"none"}} className="items-center gap-1">
            <span className="text-2xl font-bold text-[#1a1a2e]">
              <span className="text-[#FF6B35]">e</span>duport
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="/" className="text-[#1a1a2e] font-medium hover:text-[#FF6B35] transition-colors text-sm">Home</a>
          <a href="#about" className="text-[#1a1a2e] font-medium hover:text-[#FF6B35] transition-colors text-sm">About</a>
          <a href="#courses" className="text-[#1a1a2e] font-medium hover:text-[#FF6B35] transition-colors text-sm">Our Courses</a>
          <a href="#" className="text-[#FF6B35] font-semibold text-sm">NEET JEE Campus</a>
          <a href="#" className="text-[#1a1a2e] font-medium hover:text-[#FF6B35] transition-colors text-sm">Careers</a>
          <a href="#contact" className="text-[#1a1a2e] font-medium hover:text-[#FF6B35] transition-colors text-sm">Contact Us</a>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919207998855" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[#1a1a2e] font-bold text-xs leading-tight">+91 92 07 99 88 55</div>
              <div className="text-gray-400 text-[10px]">For Admission</div>
            </div>
          </a>

          <a href="https://shop.eduport.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
              <ShoppingCart className="w-4 h-4 text-[#FF6B35]" />
            </div>
            <div>
              <div className="text-[#1a1a2e] font-bold text-xs leading-tight">Buy Courses</div>
              <div className="text-gray-400 text-[10px]">On Eduport Store</div>
            </div>
          </a>

          <a href="https://web.eduport.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Monitor className="w-4 h-4 text-[#1a1a2e]" />
            </div>
            <div>
              <div className="text-[#1a1a2e] font-bold text-xs leading-tight">Access Eduport App</div>
              <div className="text-gray-400 text-[10px]">On Web</div>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          {["Home", "About", "Our Courses", "NEET JEE Campus", "Careers", "Contact Us"].map((item) => (
            <a
              key={item}
              href="#"
              className={`block py-2 font-medium text-sm ${item === "NEET JEE Campus" ? "text-[#FF6B35]" : "text-[#1a1a2e]"}`}
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-2 border-t">
            <a href="tel:+919207998855" className="block text-[#FF6B35] font-bold text-sm py-1">+91 92 07 99 88 55</a>
          </div>
        </div>
      )}
    </nav>
  );
}
