import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useActiveSection } from "./hooks/useActiveSection";
import { useReveal } from "./hooks/useReveal";

// --- 전역 애니메이션 스타일 ---
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function App() {
  const { scrollProgress, scrolled } = useScrollProgress();
  const activeSection = useActiveSection();
  useReveal();

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-500 selection:text-white">
      <style>{animationStyles}</style>

      {/* --- Scroll Progress Bar --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100]">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header scrolled={scrolled} activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Contact />
      </main>

      <Footer />

      {/* Custom Cursor Overlay (Desktop Only) */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300">
        {/* Optional: Add custom cursor logic here if desired */}
      </div>
    </div>
  );
}
