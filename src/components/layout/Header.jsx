import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const scrollToSection = (id, setIsMenuOpen) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  if (setIsMenuOpen) setIsMenuOpen(false);
};

export default function Header({ scrolled, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "md:w-[600px]" : "md:w-[800px]"
      }`}
    >
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-xl border backdrop-blur-xl transition-all ${
          scrolled
            ? "bg-white/80 border-slate-200 shadow-xl"
            : "bg-white/40 border-transparent shadow-none"
        }`}
      >
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("home", setIsMenuOpen)}
        >
          <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Sparkles className="text-white w-4 h-4" />
          </div>
          <span className="font-black text-lg tracking-tighter">SEOUL_DEV</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {["home", "about", "stack", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item, setIsMenuOpen)}
              className={`text-sm font-bold uppercase tracking-widest transition-all ${
                activeSection === item
                  ? "text-blue-600 scale-110"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item === "home" ? "Main" : item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95">
          {["home", "about", "stack", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item, setIsMenuOpen)}
              className="text-left text-lg font-bold py-2 border-b border-slate-50"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
