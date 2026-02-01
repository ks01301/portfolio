import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
