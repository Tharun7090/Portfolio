"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useSpring,
} from "framer-motion";
import { ArrowDownRight, ArrowUp, Lightbulb, Smile, Sparkles } from "lucide-react";
import { TextEffect } from "./ui/TextEffect";

const TITLES = [
  "Software Developer",
  // "UI/UX Designer",
  "Frontend Developer",
  "Full Stack Developer",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  // Typewriter state
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentTitle) {
      typingSpeed = 2000; // Pause before deleting
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: pageScroll } = useScroll();
  const smoothProgress = useSpring(pageScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
  }, [smoothProgress]);

  const yRockR = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yRockL = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rotR = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotL = useTransform(scrollYProgress, [0, 1], [0, -8]);

  const yPhone = useTransform(scrollYProgress, [0, 0.5], [0, -90]);
  const scalePhone = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);
  const opacityPhone = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const marqueeItems = [
    { type: "image", src: "/photography.jpg" },
    { type: "icon", icon: Lightbulb },
    { type: "image", src: "/travel_adventure.jpg" },
    { type: "icon", icon: Smile },
    { type: "image", src: "/design.jpg" },
    { type: "icon", icon: Sparkles },
  ];


  const rotations = [-6, -3, 4, 7, -5, 3];

  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      {/* ─── Hero Banner ─────────────────────────────────────────── */}
      <div className="relative lg:min-h-svh">
        {/* Decorative rocks – desktop only */}
        <motion.div
          style={{ y: yRockR, rotate: rotR }}
          className="absolute top-[-80px] right-[-140px] w-[480px] h-[480px] xl:w-[640px] xl:h-[640px] hidden lg:block pointer-events-none"
        >
          <Image src="/Timberland.png" alt="" fill priority />
        </motion.div>

        <motion.div
          style={{ y: yRockL, rotate: rotL }}
          className="absolute bottom-[-40px] left-[-96px] w-[240px] h-[220px] xl:w-[320px] xl:h-[300px] hidden lg:block pointer-events-none"
        >
          <Image src="/Timberland.png" alt="" fill />
        </motion.div>

        {/* ─── Main content ──────────────────────────────────────── */}
        <div className="relative z-20 lg:min-h-svh flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-12 items-center">
              {/* Offset spacer – desktop only */}
              <div className="hidden lg:block col-span-2" />

              {/* Text block */}
              <div className="col-span-12 lg:col-span-8 xl:col-span-7">
                <div className="max-w-3xl mt-24 pb-16 lg:py-0">
                  {/* Greeting */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-6 sm:mb-8 lg:mb-10"
                  >
                    <p className="text-base sm:text-lg lg:text-xl font-light">
                      Hello!
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl">
                      I am Tharun
                    </p>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6 sm:mb-8 min-h-[2.5em] sm:min-h-0"
                  >
                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight">
                      {displayText}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-[3px] h-[0.9em] bg-foreground ml-2 transform translate-y-[0.1em]"
                      />
                    </span>
                  </motion.h1>

                  {/* Sub-copy */}
                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10"
                  >
                    I build scalable and high-performance web applications using
                    modern frontend and backend technologies.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16"
                  >
                    <a
                      href="#portfolio"
                      className="px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white rounded-xl text-sm sm:text-base"
                    >
                      View Projects
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1b7RzlAWFuGxmfHU3ZWftBpOOYNiAO-7T/view"
                      className="px-5 py-2.5 sm:px-6 sm:py-3 border rounded-xl text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  </motion.div>

                  {/* Scroll cue */}
                  <motion.a
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("portfolio")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-2 text-sm sm:text-base lg:text-lg group"
                  >
                    <span className="relative">
                      Scroll for more
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-foreground transition-all group-hover:w-full" />
                    </span>
                    <ArrowDownRight size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="hidden lg:block col-span-2" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Video + Animated Quote ───────────────────────────────── */}
      <div className="grid grid-cols-12">
        <div className="hidden sm:block col-span-1 lg:col-span-2" />

        <div className="col-span-12 sm:col-span-10 lg:col-span-8 mb-16 sm:mb-20 px-4 sm:px-0">
          {/* Video mockup */}
          <motion.div
            style={{ y: yPhone, scale: scalePhone, opacity: opacityPhone }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[840px] aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden opacity-80">
              <video
                src="/code_with_pc.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Scroll-reveal quote */}
          <section className="relative z-20 mt-14 sm:mt-20">
            <TextEffect as="blockquote" perWord={true} className="max-w-6xl mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground">
              Crafting scalable full stack applications with modern technologies performance driven architecture and seamless user experiences.
            </TextEffect>
          </section>
        </div>

        <div className="hidden sm:block col-span-1 lg:col-span-2" />
      </div>

      {/* ─── Marquee Gallery ──────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
        <motion.div
          className="flex gap-4 sm:gap-6 lg:gap-10 w-max px-4 sm:px-6 lg:px-10"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => {
            const Icon = item?.icon;

            return (
              <div
                key={i}
                style={{
                  transform: `rotate(${rotations[i % rotations.length]}deg)`,
                }}
                className="
                  group relative
                  w-[180px] h-[240px]
                  sm:w-[220px] sm:h-[300px]
                  lg:w-[300px] lg:h-[400px]
                  rounded-2xl lg:rounded-3xl overflow-hidden
                  transition-all duration-500
                  hover:rotate-0 hover:scale-105 hover:z-20
                "
              >
                {item.type === "image" && item.src && (
                  <div className="relative w-full h-full border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt="Gallery"
                      fill
                      draggable={false}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 300px"
                    />
                  </div>
                )}

                {item.type === "icon" && Icon && (
                  <div
                    className="
                      w-full h-full
                      flex items-center justify-center
                      rounded-2xl lg:rounded-3xl
                      border border-white/10
                      bg-gradient-to-br from-white/10 to-white/5
                      backdrop-blur-xl shadow-lg
                      transition-all duration-500
                      group-hover:shadow-2xl
                    "
                  >
                    <Icon
                      size={48}
                      className="
                        opacity-70
                        transition-all duration-500
                        group-hover:scale-125 group-hover:opacity-100
                        stroke-[1.2px]
                        lg:!w-[70px] lg:!h-[70px]
                      "
                    />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── Back-to-top FAB / Scroll Progress ──────────────────────── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/80 backdrop-blur-md text-foreground flex items-center justify-center z-50 shadow-lg border border-foreground/10 group overflow-hidden"
          >
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r="26"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-foreground/10"
              />
              <motion.circle
                cx="30"
                cy="30"
                r="26"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                style={{ pathLength: smoothProgress }}
                className="text-foreground transition-colors"
                strokeLinecap="round"
              />
            </svg>

            {/* Percentage Text (Default) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider font-mono">{scrollPercent}%</span>
            </div>
            
            {/* Arrow Icon (On Hover) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUp size={18} className="text-foreground" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
