import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa]/50 to-[#fafafa] z-10" />
        <img
          src="/assets/image1.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-black uppercase tracking-widest text-slate-600">
            Available for New Projects
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DIGITAL
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          >
            ARCHITECT
          </motion.div>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          복잡한 요구사항을{" "}
          <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-4">
            단순하고 명료한 사용자 경험
          </span>
          으로 설계하는 프론트엔드 개발자입니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("stack")}
            className="group px-10 py-5 bg-slate-900 text-white rounded-xl font-black text-lg shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 transition-all flex items-center gap-2"
          >
            TECH STACK{" "}
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>

          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-md"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="avatar"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="w-12 h-12 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center text-xs font-bold text-slate-500"
            >
              +12
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
