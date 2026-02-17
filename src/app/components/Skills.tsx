"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    { 
      name: "Frontend", 
      items: ["TypeScript", "Next.js", "Tailwind", "Framer Motion"],
      delay: 0.1 
    },
    { 
      name: "Backend", 
      items: ["Python", "DRF", "PostgreSQL", "Django"],
      delay: 0.2 
    },
    { 
      name: "Foundations", 
      items: ["C", "Algorithms", "Data Structures", "Linux"],
      delay: 0.3 
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl italic">Technical Stack</h2>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: cat.delay }}
            viewport={{ once: true }}
            className="glass-card p-10 hover:border-accent/30 transition-colors group"
          >
            <h4 className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-8">
              {cat.name}
            </h4>
            
            <ul className="space-y-4">
              {cat.items.map((item) => (
                <li 
                  key={item} 
                  className="text-xl text-zinc-400 group-hover:text-white transition-colors flex items-center gap-3 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}