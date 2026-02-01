import React from "react";
import { ArrowUpRight, Globe, Cpu, Layers, Terminal } from "lucide-react";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  { category: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "Prisma"] },
  { category: "Design & DevTools", items: ["Figma", "Docker", "Git", "Jest"] },
];

export default function About() {
  return (
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
              단순한 코더가 아닌, 비즈니스 가치를 더하는 파트너가 되고 싶습니다.
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
  );
}
