import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
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
          <button className="hover:text-slate-600 transition-colors">
            Privacy
          </button>
          <button className="hover:text-slate-600 transition-colors">
            Terms
          </button>
          <button className="hover:text-slate-600 transition-colors">
            Cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
