import { motion, useTransform, MotionValue } from "framer-motion";

const AnimatedLine = ({
  text,
  progress,
}: {
  text: string;
  progress: MotionValue<number>;
}) => {
  const chars = text.split("");

  return (
    <span className="block">
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 0.15;

        const opacity = useTransform(progress, [start, end], [0.2, 1]);

        return (
          <motion.span
            key={i}
            className="inline-block"
            style={{
              opacity,
              transform: "translateZ(0)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </span>
  );
};

export default AnimatedLine;

// <AnimatedLine text="Design, tech &" progress={scrollYProgress} />
