"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { TextEffect } from "./ui/TextEffect";

const education = [
    {
    dates: "2020 - 2024",
    title: "Bachelor of Technology in Information Technology",
    source: "LIT",
    desc: "Specialized in software engineering and modern web application development.",
  },
  {
    dates: "2018 - 2020",
    title: "11th - 12th Grade",
    source: "Asan Memorial Senior Secondary School",
    desc: "Developed analytical mindset with focus on mathematics and technology.",
  },
    {
    dates: "2018",
    title: "10th Grade",
    source: "Asan Memorial Senior Secondary School",
    desc: "Built strong academic discipline and logical thinking skills.",
  },

];
const experience = [
  {
    dates: "2025 - Present",
    title: "Software Developer",
    source: "Encircle Innovations",
    desc: "Designing and developing high-performance applications using Next.js with modern UI and backend integration.",
  },

];

const tools = [
  { name: "JavaScript", icon: "/JS.svg" },
  { name: "TypeScript", icon: "/typeScript.svg" },
  { name: "React", icon: "/React.svg" },
  { name: "Next", icon: "/Next.svg" },
  { name: "Figma", icon: "/Figma.svg" },
  { name: "SQL", icon: "/SQL.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: ".NET", icon: "/dotnet.svg" },
  { name: "HTML", icon: "/HTML.svg" },
  { name: "CSS", icon: "/CSS.svg" },
  { name: "Bootstrap", icon: "/Bootstrap.svg" },
  { name: "Tailwind", icon: "/Tailwind.svg" },
  { name: "MUI", icon: "/MUI.svg" },
  { name: "Framer", icon: "/Framer.svg" },
  { name: "Adobe XD", icon: "/XD.svg" },
  { name: "GitHub", icon: "/GitHub.svg" },
  { name: "GitHub Actions", icon: "/GitHub_Actions.svg" },
];

export function Resume() {
  return (
    <section id="resume" className="py-12 sm:py-16 md:py-20">
      {/*
        Mirrors navbar + Hero grid:
          px-4 sm:px-6 lg:px-12
          [label=2] [content=8] [spacer=2]
      */}
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-12">
          {/* ── LEFT STICKY LABEL – aligns with logo col (2) ── */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-20 md:top-24">
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider text-foreground">
                Resume
                <ArrowDownRight size={18} />
              </span>
            </div>
          </div>

          {/* ── MAIN CONTENT – aligns with nav col (8) ── */}
          <div className="col-span-12 lg:col-span-8 space-y-12 sm:space-y-16 md:space-y-20">
            {/* Mobile-only label */}
            <div className="lg:hidden">
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider text-foreground">
                Resume
                <ArrowDownRight size={16} />
              </span>
            </div>

            {/* Headline */}
            <TextEffect as="h2" perWord={true} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight mb-6 sm:mb-8">
              The digital <br />
              journey
            </TextEffect>

             {/* ── Experience ── */}
            <div>
              <h3 className="text-sm sm:text-base uppercase tracking-wider text-foreground mb-6 sm:mb-8 border-b border-foreground/10 pb-3 sm:pb-4">
                Work experience
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {experience.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-foreground/5 pb-6 sm:pb-8 last:border-0"
                  >
                    <div className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                      {item.dates}
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg lg:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        {item.source}
                      </p>
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Education ── */}
            <div>
              <h3 className="text-sm sm:text-base uppercase tracking-wider text-foreground mb-6 sm:mb-8 border-b border-foreground/10 pb-3 sm:pb-4">
                My education
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-foreground/5 pb-6 sm:pb-8 last:border-0"
                  >
                    <div className="text-muted-foreground font-medium text-sm sm:text-base lg:text-lg">
                      {item.dates}
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg lg:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        {item.source}
                      </p>
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

           

            {/* ── Tools grid ── */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ rotate: 8, y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl cursor-pointer bg-foreground/5 backdrop-blur-md border border-white/10 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-foreground/10 rounded-xl p-2">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h6 className="text-xs sm:text-sm font-semibold tracking-wide text-center leading-tight">
                    {tool.name}
                  </h6>
                </motion.div>
              ))}
            </div>
          </div>

          {/* spacer aligns with theme col (2) */}
          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
