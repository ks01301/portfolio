import React from "react";
import { ArrowUpRight } from "lucide-react";

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
};

export default function Hero() {
  return (
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
  );
}
