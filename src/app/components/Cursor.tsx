"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { stiffness: 1000, damping: 40, mass: 0.2 };
  const x = useSpring(mousePos.x, springConfig);
  const y = useSpring(mousePos.y, springConfig);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-blue-500 rounded-full pointer-events-none z-[999999]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.4)", // Electric blue glow
      }}
    />
  );
}