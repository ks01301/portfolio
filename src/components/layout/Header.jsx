import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "../common/ThemeToggle";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "md:w-[600px]" : "md:w-[800px]"
      }`}
    >
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-xl border backdrop-blur-xl transition-all ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 shadow-xl"
            : "bg-white/40 dark:bg-slate-900/40 border-transparent shadow-none"
        }`}
      >
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("home", setIsMenuOpen)}
        >
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Sparkles className="text-white dark:text-slate-900 w-4 h-4" />
          </div>
          <span className="font-black text-lg tracking-tighter dark:text-white">
            SEOUL_DEV
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {["home", "about", "stack", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item, setIsMenuOpen)}
              className={`text-sm font-bold uppercase tracking-widest transition-all ${
                activeSection === item
                  ? "text-blue-600 dark:text-blue-400 scale-110"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              {item === "home" ? "Main" : item}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-100 dark:border-slate-800 rounded-xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95">
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
