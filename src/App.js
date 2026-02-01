import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Code2,
  User,
  Briefcase,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Linkedin,
  Terminal,
  ArrowUpRight,
  Sparkles,
  Globe,
  Cpu,
  Layers,
} from "lucide-react";

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

// --- 데이터 설정 ---
const PROJECTS = [
  {
    id: 1,
    title: "Insight Canvas",
    category: "AI Platform",
    description:
      "사용자의 텍스트 데이터를 분석하여 시각적 마인드맵과 리포트를 자동 생성하는 AI 대시보드입니다.",
    tags: ["React", "Next.js", "OpenAI", "D3.js"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Flow State",
    category: "Productivity",
    description:
      "팀 프로젝트의 병목 현상을 실시간으로 감지하고 작업 흐름을 최적화하는 협업 툴입니다.",
    tags: ["TypeScript", "Node.js", "Redis", "Canvas API"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Neo Market",
    category: "E-Commerce",
    description:
      "Web3 기술을 접목하여 아티스트들의 디지털 굿즈를 안전하게 거래하는 미래형 커머스 플랫폼입니다.",
    tags: ["React", "Solidity", "Tailwind", "Framer"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
  },
];

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  { category: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "Prisma"] },
  { category: "Design & DevTools", items: ["Figma", "Docker", "Git", "Jest"] },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 핸들러 (진척도 & 네비게이션 효과)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 20);

      // 섹션 감지
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }

      // Reveal 효과
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
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
    setIsMenuOpen(false);
  };

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

      {/* --- Navigation --- */}
      <nav
        className={`fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "md:w-[600px]" : "md:w-[800px]"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-2xl border backdrop-blur-xl transition-all ${
            scrolled
              ? "bg-white/80 border-slate-200 shadow-xl"
              : "bg-white/40 border-transparent shadow-none"
          }`}
        >
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Sparkles className="text-white w-4 h-4" />
            </div>
            <span className="font-black text-lg tracking-tighter">
              SEOUL_DEV
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {["home", "about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
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
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95">
            {["home", "about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left text-lg font-bold py-2 border-b border-slate-50"
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-black uppercase tracking-widest text-slate-600">
              Available for New Projects
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              ARCHITECT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            복잡한 요구사항을{" "}
            <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-4">
              단순하고 명료한 사용자 경험
            </span>
            으로 설계하는 프론트엔드 개발자입니다.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-10 py-5 bg-slate-900 text-white rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              PROJECTS{" "}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="avatar"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                +12
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Section (Bento Grid) --- */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Bento Item 1: Profile */}
          <div className="reveal md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">
                Hello, I'm <br />
                Gildong Hong
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                서울을 기반으로 활동하는 개발자입니다. <br />
                기술의 심미성과 효율성 사이의 완벽한 균형을 찾는 것을 즐깁니다.{" "}
                <br />
                단순한 코더가 아닌, 비즈니스 가치를 더하는 파트너가 되고
                싶습니다.
              </p>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <button className="flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
          </div>

          {/* Bento Item 2: Experience */}
          <div className="reveal md:col-span-1 bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-center items-center text-center hover:bg-blue-600 transition-colors cursor-default">
            <div className="text-5xl font-black mb-1">3+</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-60">
              Years of Exp
            </div>
          </div>

          {/* Bento Item 3: Skills Icon */}
          <div className="reveal md:col-span-1 bg-white rounded-[2.5rem] p-8 border border-slate-100 flex items-center justify-center group">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded-2xl group-hover:rotate-6 transition-transform">
                <Globe className="text-blue-600" />
              </div>
              <div className="p-3 bg-purple-50 rounded-2xl group-hover:-rotate-12 transition-transform">
                <Cpu className="text-purple-600" />
              </div>
              <div className="p-3 bg-orange-50 rounded-2xl group-hover:-rotate-6 transition-transform">
                <Layers className="text-orange-600" />
              </div>
              <div className="p-3 bg-green-50 rounded-2xl group-hover:rotate-12 transition-transform">
                <Terminal className="text-green-600" />
              </div>
            </div>
          </div>

          {/* Bento Item 4: Marquee/List Skills */}
          <div className="reveal md:col-span-2 bg-[#f0f2f5] rounded-[2.5rem] p-8 overflow-hidden flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {SKILLS.flatMap((s) => s.items)
                .slice(0, 10)
                .map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white rounded-full text-sm font-black shadow-sm border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-black">
                Ready to Learn
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              SELECTED
              <br />
              <span className="text-slate-300">WORKS</span>
            </h2>
            <p className="text-slate-500 font-bold max-w-xs uppercase text-xs tracking-widest leading-loose">
              Every project is a new opportunity to push the boundaries of
              what's possible on the web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className={`reveal group cursor-pointer ${
                  idx % 2 !== 0 ? "md:mt-24" : ""
                }`}
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-8 border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <ArrowUpRight className="w-8 h-8" />
                    </button>
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                      {project.category}
                    </span>
                    <div className="h-px w-8 bg-slate-200"></div>
                  </div>
                  <h3 className="text-3xl font-black">{project.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden relative group">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to build <br />
              <span className="text-blue-400 italic">something amazing?</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg max-w-lg mx-auto">
              새로운 아이디어가 있거나 협업이 필요하신가요? <br />
              메일함은 언제나 열려 있습니다.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:hello@example.com"
                className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-full font-black text-xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-95"
              >
                Let's Talk
              </a>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <Github />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-slate-100 bg-[#fafafa] px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
                <Sparkles className="text-white w-3 h-3" />
              </div>
              <span className="font-black text-sm">SEOUL_DEV.PORTFOLIO</span>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Designed with passion for detail
            </p>
          </div>

          <div className="flex items-center gap-10">
            <div className="text-center md:text-right">
              <div className="text-[10px] font-black uppercase text-slate-300 tracking-widest mb-1">
                Current Time
              </div>
              <div className="text-sm font-bold text-slate-900 tracking-tighter uppercase">
                Seoul, KR {new Date().getHours()}:{new Date().getMinutes()} PM
              </div>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
            >
              <ArrowUpRight className="w-5 h-5 -rotate-90" />
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          <p>© 2024 Gildong Hong - All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </footer>

      {/* Custom Cursor Overlay (Desktop Only) */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300">
        {/* Optional: Add custom cursor logic here if desired */}
      </div>
    </div>
  );
}
