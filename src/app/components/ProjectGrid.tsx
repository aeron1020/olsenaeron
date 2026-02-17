"use client";
import { motion } from "framer-motion";
import { link } from "fs";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  { 
    title: "Free CSE Review App", 
    cat: "Python / Django DRF / TypeScript / PostgreSQL / React / Tailwind / digitalocean", 
    span: "md:col-span-2",
    link: "https://freecsereview.online/",
    github: "https://github.com/aeron1020/civil_service_review_app",
    image: "https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/611665330_25830169939953884_340083538583919518_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFLOrucwNB-4pM-IAlaE9Ai12SV50YI1THXZJXnRgjVMfg1ZEQyfr8Beg4OiR7ISRovqZK2PYuEWXWQupennV87&_nc_ohc=cz6NCaY48n4Q7kNvwG51wqd&_nc_oc=AdkBMzDLze7FIMKD7jz0w61KAkzJCiPjmcYjxlrKkVY24YGQXxQplTwNi73dRnG0Uq3Y9yGpJSXuMc7TZ1xGsBrT&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=aOjngixjkOKqFmBDKLtFBA&oh=00_Afv0bHykji8QsZxT4flQWp1YtDAg8cv6naMe5d8dHpt_4A&oe=6999F623" 
  },
  { 
    title: "Landing Page: Gerona", 
    cat: "TypeScript / Next.js / Tailwind", 
    span: "md:col-span-1",
    link: "https://gerona.vercel.app/",
    github: "https://github.com/aeron1020/gerona",
    image: "https://geronatarlac.gov.ph/wp-content/uploads/2021/04/gerona-36156667.png" 
  },
  { 
    title: "Personal Portfolio", 
    cat: "Python / JaavaScript / CSS / React", 
    span: "md:col-span-1",
    link: "https://youtu.be/IYEmZZtgHz0",
    github: "https://github.com/aeron1020/DjangoReactFullStackBlogApp",
    image: "https://avatars.githubusercontent.com/u/91646547?s=400&v=4" 
  },
  { 
    title: "Twitter Clone", 
    cat: "Python / Django / JavaScript / HTML / CSS", 
    span: "md:col-span-2",
    github: "https://github.com/aeron1020",
    link: "https://youtu.be/lvBjjxegTOU",
    image: "https://i9.ytimg.com/vi_webp/lvBjjxegTOU/mq2.webp?sqp=COir0cwG-oaymwEmCMACELQB8quKqQMa8AEB-AH8CIAC0AWKAgwIABABGEIgQihlMA8=&rs=AOn4CLA3gUhopilw5ODvCi96HQD1p5JW7w" 
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-12 md:py-24 relative px-4 md:px-0">
      <div className="mb-10 md:mb-16">
        <h2 className="label-mono text-accent">Selected Works</h2>
        <p className="text-zinc-500 text-sm md:text-base mt-2 font-light">
          Engineered solutions and architectural studies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -8 }}
            className={`${p.span} glass-card min-h-[340px] md:min-h-[400px] flex flex-col justify-between group relative overflow-hidden`}
          >
            {/* Efficiency: Only render image if it exists */}
            {p.image && (
              <div className="absolute inset-0 pointer-events-none z-0">
                <motion.img 
                  src={p.image} 
                  alt={p.title}
                  loading="lazy"
                  className="absolute right-0 w-full md:w-3/4 h-full object-cover transition-all duration-700 brightness-[0.55] md:brightness-[0.65] grayscale group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  style={{
                    maskImage: 'linear-gradient(to left, rgb(0, 0, 0) 10%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 10%, transparent 100%)'
                  }}
                />
                {/* Blue accent overlay */}
                <div className="absolute inset-0 bg-blue-900/15 group-hover:bg-blue-900/5 transition-all duration-700" style={{
                  maskImage: 'linear-gradient(to left, rgb(0, 0, 0) 10%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 10%, transparent 100%)'
                }} />
                {/* Mobile-first dark gradient to ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/90 md:via-background/60 to-transparent" />
              </div>
            )}

            {/* Content Container - Higher padding for desktop, snug for mobile */}
            <div className="p-6 md:p-10 relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="label-mono text-accent text-[10px] md:text-xs">
                    / 0{i + 1}
                  </span>
                  
                  {p.github && (
                    <a 
                      href={p.github} 
                      target="_blank" 
                      className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all duration-300"
                      title="View Source"
                    >
                      <Github size={16} className="md:w-[18px]" />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl md:text-5xl mt-4 md:mt-6 mb-6 md:mb-8 text-silver leading-tight max-w-[90%] font-medium">
                  {p.title}
                </h3>
                
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    className="inline-flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-white/10 border border-white/10 hover:bg-accent hover:border-accent px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all active:scale-95"
                  >
                    Launch <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-white/10">
                <p className="text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] group-hover:text-accent transition-colors truncate">
                  {p.cat}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}