"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center px-6 max-w-5xl mx-auto relative">
      
      {/* Subtle Ocean Light Leak */}
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Humble Breadcrumb */}
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-12 flex items-center gap-2">
          <span className="w-2 h-[1px] bg-cyan-900" />
          Villasis / Ilocos Region
        </p>

        {/* Typography with Ocean Gradient */}
        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-8 leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-cyan-200/40">
            Olsen Aeron
          </span>
          <span className="text-cyan-500/50">.</span>
        </h1>

        {/* The Concise Narrative */}
        <div className="max-w-2xl border-l border-white/5 pl-6 md:pl-10">
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            Student of Industrial Technology at 
            <span className="text-white hover:text-cyan-300 transition-colors cursor-default"> MMSU</span>. 
            Exploring the balance between hardware systems and 
            software logic through <span className="text-white italic">Computer Science</span>.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <a href="#projects" className="group text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="group-hover:text-cyan-400 transition-colors">Projects</span>
              <span className="text-cyan-600 transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            
            <a href="#academic" className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-cyan-200 transition-colors">
              Academic Core
            </a>
            
            <a href="https://github.com/aeron1020" target="_blank" className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-cyan-200 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}