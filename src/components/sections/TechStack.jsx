import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Settings, X, Terminal, Cpu } from "lucide-react";

const STACKS = [
  {
    id: "virtualization",
    title: "Virtualization",
    icon: Server,
    color: "bg-orange-500",
    description: "서버 자원 효율화 및 격리 환경 구축 기술",
    techs: [
      {
        name: "Proxmox VE",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop", // Placeholder or use local asset if available
        description:
          "오픈소스 서버 가상화 플랫폼 Proxmox VE를 활용하여 고가용성 클러스터를 구축하고 관리합니다. LXC 컨테이너와 KVM 가상머신을 효율적으로 운영한 경험이 있습니다.",
      },
      {
        name: "Docker",
        image:
          "https://images.unsplash.com/photo-1605745341117-95775fb50bfa?q=80&w=1000&auto=format&fit=crop",
        description:
          "애플리케이션을 컨테이너화하여 일관된 배포 환경을 보장합니다.",
      },
    ],
  },
  {
    id: "ops",
    title: "Operations",
    icon: Settings,
    color: "bg-blue-500",
    description: "안정적인 시스템 운영 및 자동화",
    techs: [
      {
        name: "Linux",
        description:
          "Ubuntu, CentOS 등 다양한 리눅스 배포판 환경에서의 서버 운영 및 쉘 스크립팅 능력을 보유하고 있습니다.",
      },
      {
        name: "CI/CD",
        description:
          "GitHub Actions를 활용한 자동화된 빌드 및 배포 파이프라인 구축 경험이 있습니다.",
      },
    ],
  },
];

export default function TechStack() {
  const [selectedStack, setSelectedStack] = useState(null);

  return (
    <section
      id="stack"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            TECH <span className="text-blue-600 dark:text-blue-400">STACK</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-bold max-w-lg uppercase text-xs tracking-widest leading-loose">
            Explored technologies focused on Virtualization and Operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STACKS.map((stack) => {
            const Icon = stack.icon;
            return (
              <motion.div
                key={stack.id}
                layoutId={`card-${stack.id}`}
                onClick={() => setSelectedStack(stack)}
                whileHover={{ y: -5, borderColor: "#3b82f6" }}
                className="bg-white dark:bg-slate-900 rounded-xl p-10 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all border-2 border-slate-200 dark:border-slate-800 group relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${stack.color} opacity-10 rounded-bl-[100%] transition-transform group-hover:scale-150`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${stack.color} rounded-xl flex items-center justify-center text-white mb-8 shadow-lg`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {stack.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    {stack.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {stack.techs.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedStack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setSelectedStack(null)}
          >
            <motion.div
              layoutId={`card-${selectedStack.id}`}
              className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-xl p-8 md:p-12 shadow-2xl relative border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedStack(null)}
                className="absolute top-8 right-8 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6 text-slate-900 dark:text-white" />
              </button>

              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div
                    className={`w-20 h-20 ${selectedStack.color} rounded-xl flex items-center justify-center text-white shadow-xl`}
                  >
                    <selectedStack.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black">
                      {selectedStack.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-1">
                      {selectedStack.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {selectedStack.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 md:p-8 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700"
                    >
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* 이미지 영역 (왼쪽) */}
                        <div className="w-full md:w-1/3 shrink-0">
                          {tech.image ? (
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
                              <img
                                src={tech.image}
                                alt={tech.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="aspect-[4/3] rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 font-bold border border-slate-300 dark:border-slate-600">
                              NO IMAGE
                            </div>
                          )}
                        </div>

                        {/* 설명 영역 (오른쪽) */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            <h4 className="text-2xl font-black">{tech.name}</h4>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-lg">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
