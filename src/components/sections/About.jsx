import React from "react";
import { ArrowUpRight, Globe, Cpu, Layers, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  { category: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "Prisma"] },
  { category: "Design & DevTools", items: ["Figma", "Docker", "Git", "Jest"] },
];

const bentoItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
      >
        {/* Bento Item 1: Profile */}
        <motion.div
          variants={bentoItemVariants}
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-2 bg-white rounded-xl p-10 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-2xl transition-shadow overflow-hidden relative group"
        >
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
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 font-bold text-blue-600"
            >
              Learn more <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
          <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 bg-blue-50 rounded-xl opacity-50 group-hover:scale-110 transition-transform">
            <img
              src="/assets/image5.png"
              alt="Profile"
              className="w-full h-full object-contain opacity-80 mix-blend-multiply"
            />
          </div>
        </motion.div>

        {/* Bento Item 2: Experience */}
        <motion.div
          variants={bentoItemVariants}
          whileHover={{ y: -5, backgroundColor: "#2563eb" }}
          className="md:col-span-1 bg-slate-900 rounded-xl p-8 text-white flex flex-col justify-center items-center text-center cursor-pointer group"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            className="text-5xl font-black mb-1 group-hover:scale-110 transition-transform"
          >
            3+
          </motion.div>
          <div className="text-xs font-bold uppercase tracking-widest opacity-60">
            Years of Exp
          </div>
        </motion.div>

        {/* Bento Item 3: Skills Icon */}
        <motion.div
          variants={bentoItemVariants}
          className="md:col-span-1 bg-white rounded-xl p-8 border border-slate-100 flex items-center justify-center group"
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              { Icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
              { Icon: Cpu, color: "text-purple-600", bg: "bg-purple-50" },
              { Icon: Layers, color: "text-orange-600", bg: "bg-orange-50" },
              { Icon: Terminal, color: "text-green-600", bg: "bg-green-50" },
            ].map(({ Icon, color, bg }, i) => (
              <motion.div
                key={i}
                whileHover={{ rotate: i % 2 === 0 ? 10 : -10, scale: 1.1 }}
                className={`p-3 ${bg} rounded-xl cursor-pointer`}
              >
                <Icon className={color} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bento Item 4: Marquee/List Skills */}
        <motion.div
          variants={bentoItemVariants}
          className="md:col-span-2 bg-[#f0f2f5] rounded-xl p-8 overflow-hidden flex flex-col justify-center relative"
        >
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {SKILLS.flatMap((s) => s.items)
              .slice(0, 10)
              .map((skill, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2563eb",
                    color: "#fff",
                  }}
                  className="px-4 py-2 bg-white rounded-xl text-sm font-black shadow-sm border border-slate-100 cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-black cursor-pointer"
            >
              Ready to Learn
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
