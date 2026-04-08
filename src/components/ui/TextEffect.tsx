"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextEffectProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  perWord?: boolean;
}

export function TextEffect({
  children,
  className = "",
  as: Component = "span",
  delay = 0,
  perWord = false,
}: TextEffectProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const MotionComponent = motion(Component as any);

  if (perWord && typeof children === "string") {
    const words = children.split(" ");
    return (
      <MotionComponent
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-pre">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { type: "spring", damping: 20, stiffness: 100 },
                },
              }}
            >
              {word}
            </motion.span>
            {i !== words.length - 1 ? " " : ""}
          </span>
        ))}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }, // custom easeOut quint
        },
      }}
    >
      {children}
    </MotionComponent>
  );
}
