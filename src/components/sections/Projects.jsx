import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Insight Canvas",
    category: "AI Platform",
    description:
      "사용자의 텍스트 데이터를 분석하여 시각적 마인드맵과 리포트를 자동 생성하는 AI 대시보드입니다.",
    tags: ["React", "Next.js", "OpenAI", "D3.js"],
    image: "/assets/image2.png",
  },
  {
    id: 2,
    title: "Flow State",
    category: "Productivity",
    description:
      "팀 프로젝트의 병목 현상을 실시간으로 감지하고 작업 흐름을 최적화하는 협업 툴입니다.",
    tags: ["TypeScript", "Node.js", "Redis", "Canvas API"],
    image: "/assets/image3.png",
  },
  {
    id: 3,
    title: "Neo Market",
    category: "E-Commerce",
    description:
      "Web3 기술을 접목하여 아티스트들의 디지털 굿즈를 안전하게 거래하는 미래형 커머스 플랫폼입니다.",
    tags: ["React", "Solidity", "Tailwind", "Framer"],
    image: "/assets/image4.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            SELECTED
            <br />
            <span className="text-slate-300">WORKS</span>
          </h2>
          <p className="text-slate-500 font-bold max-w-xs uppercase text-xs tracking-widest leading-loose">
            Every project is a new opportunity to push the boundaries of what's
            possible on the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`group cursor-pointer ${
                idx % 2 !== 0 ? "md:mt-24" : ""
              }`}
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-8 border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 group-hover:opacity-100 group-hover:y-0"
                  >
                    <ArrowUpRight className="w-8 h-8" />
                  </motion.button>
                </div>
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                    {project.category}
                  </span>
                  <div className="h-px w-8 bg-slate-200"></div>
                </div>
                <h3 className="text-3xl font-black group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
