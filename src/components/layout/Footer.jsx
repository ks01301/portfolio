import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-black text-white tracking-tighter text-xl">
            SEOUL_DEV
          </span>
          <p className="text-sm font-medium text-slate-500">
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm font-bold tracking-widest uppercase">
          <a href="#home" className="hover:text-white transition-colors">
            Main
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#stack" className="hover:text-white transition-colors">
            Stack
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600"
      >
        <p>&copy; {currentYear} Gildong Hong. All rights reserved.</p>
        <p>Built with React, Tailwind CSS & Framer Motion</p>
      </motion.div>
    </footer>
  );
}
