"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Foundation", href: "#academic" },
  

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] p-6 flex justify-center pointer-events-none"
    >
      <div 
        className={`
          flex items-center justify-between md:justify-center w-full max-w-4xl px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto
          ${scrolled || isOpen
            ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" 
            : "bg-transparent border border-transparent"}
        `}
      >
        {/* Logo */}
        <a href="#" className="text-white font-bold tracking-tighter text-lg mr-8 group">
          OlsenAeron<span className="text-accent group-hover:animate-pulse">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            Let's Work
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-8 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] flex flex-col items-center gap-6 md:hidden pointer-events-auto shadow-3xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg uppercase tracking-[0.3em] font-light text-zinc-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <hr className="w-full border-white/5" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-accent text-white rounded-full font-bold uppercase tracking-widest text-xs"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}