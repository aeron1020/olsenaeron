"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const email = "olsenaeron20@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleContact = () => {
    // Attempt to open the mail client
    window.location.href = `mailto:${email}`;
    
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Reset the "Copied" state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40 flex flex-col items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="label-mono text-accent mb-6 block">Available for Hire</span>
        
        <h2 className="text-5xl md:text-7xl text-silver mb-10 font-light">
          Let’s build <br /> 
          <span className="font-semibold italic text-white">something great.</span>
        </h2>

      
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
          {/* Main Contact Button */}
          <div className="relative group">
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-accent hover:text-white transition-all shadow-xl shadow-white/5"
            >
              {copied ? "Address Copied" : "Send an Email"}
            </motion.button>

            {/* Success Feedback Tooltip */}
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  className="absolute -bottom-8 left-1/2 text-[9px] text-accent font-mono uppercase tracking-[0.2em] whitespace-nowrap"
                >
                  Copied to clipboard
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Social Link */}
          <motion.a
            href="https://github.com/aeron1020"
            target="_blank"
            className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-white transition-colors p-4"
          >
            GitHub ↗
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}