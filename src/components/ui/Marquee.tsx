"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  items,
  direction = "left",
  speed = 20,
}: MarqueeProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap flex select-none">
      <motion.div
        animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        className="flex gap-8 items-center"
      >
        {/* Triple the items to ensure smooth loop without gaps */}
        {[...items, ...items, ...items].map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-6xl md:text-7xl font-semibold uppercase">
              {item}
            </span>
            <span className="text-6xl md:text-7xl font-semibold uppercase opacity-50 text-stroke">
              Get in touch
            </span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
