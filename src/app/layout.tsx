"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen relative bg-[#020202] text-foreground`}>
        
        {/* Background Aquarium Illusion */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          
          {/* Layer 1: Deepest - Large Slow Dark Blue */}
          <motion.div 
            animate={{ 
              x: [-100, 100, -100],
              y: [-50, 50, -50],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] rounded-full bg-blue-950/30 blur-[150px]" 
          />

          {/* Layer 2: Mid-ground - The "Aquarium" Water Light */}
          <motion.div 
            animate={{ 
              x: [0, -150, 0], 
              y: [0, 150, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-accent/20 blur-[120px]" 
          />

          {/* Layer 3: Foreground - Bright Pulsing Highlight */}
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1, 0.8],
              x: [200, -100, 200]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[90px]" 
          />

          {/* Texture & Depth Mask */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150" />
          
          {/* Subtle Vignette to trap the eye in the center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}