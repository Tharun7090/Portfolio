"use client";

import { motion } from "framer-motion";

interface CurvedLoopProps {
  text: string;
  size?: number;
  className?: string;
  speed?: number;
}

export function CurvedLoop({
  text,
  size = 120,
  className = "",
  speed = 10,
}: CurvedLoopProps) {
  // A perfect circle path for the text to follow
  const pathData = "M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0";

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <path id="circlePath" d={pathData} fill="none" />
        {/*
          The startOffset="0%" and length of text determine wrapping.
          Spacing is managed by the length of the string, so we add • or space to the text prop.
        */}
        <text className="text-[10.5px] font-bold uppercase tracking-[0.1em] fill-current">
          <textPath href="#circlePath" startOffset="0%" textLength="232">{text}</textPath>
        </text>
      </motion.svg>
      {/* Center dot/accent */}
      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
    </div>
  );
}
