import React, { useRef } from "react";
import { Github, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="contact" ref={containerRef} className="py-24 px-6 relative">
      <motion.div
        className="max-w-4xl mx-auto bg-slate-900 rounded-xl p-12 md:p-20 text-center overflow-hidden relative group"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Decor */}
        <motion.div
          style={{ y }}
          className="absolute top-[-20%] right-[-20%] w-96 h-96 bg-blue-500/30 blur-[100px] rounded-full"
        />

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
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@example.com"
              className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-xl font-black text-xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all"
            >
              Let's Talk
            </motion.a>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white transition-colors"
              >
                <Github />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white transition-colors"
              >
                <Linkedin />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
