"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowDownRight } from "lucide-react";
import { TextEffect } from "./ui/TextEffect";

export function Portfolio() {
  const projects = [
    {
      title: "Office Connect",
      category:
        "Real-time office management platform with optimized performance and scalable UI architecture.",
      source: "/frame-medical-equipment-desk.jpg",
    },
    {
      title: "Lab Connect",
      category:
        "Developed centralized lab management system with modern UI/UX, case booking, mapping modules, and workflow optimization.",
      source: "/lab_management.png",
    },
    {
      title: "DSO Connect",
      category:
        "Created analytics dashboard with interactive charts and dynamic data filtering for real-time operational insights.",
      source: "/analytics_dashboard.jpg",
    },
    {
      title: "ShopCO",
      category:
        "Industry Experts & Career Oriented IT Software Training.",
      source: "/ShopCO.png",
    },
       {
      title: "MyLabConnect - UK",
      category:
        "Developed a centralized lab management system with modern UI/UX, case booking, mapping modules, and workflow optimization.",
      source: "/mlc.png",
    },
           {
      title: "GymFluence",
      category:
        "At Grill & Crave, we are powered by 15+ years of experience in the food industry, built on a strong foundation in chicken processing and supply chain excellence.",
      source: "/gym.png",
    },
    //        {
    //   title: "ASVA Life",
    //   category:
    //     "An evidence-based performance wellness program designed to help athletes achieve a competitive edge by harnessing the power of mind, body, and emotional balance.",
    //   source: "/Asva.png",
    // },
               {
      title: "MyLabConnect - US",
      category:
        "Designed to empower dental offices, dentists, DSOs and GPOs through seamless collaboration with dental labs.",
      source: "/Mylab.png",
    },
    //        {
    //   title: "Ploutus Holdings",
    //   category:
    //     "Shaping a better tomorrow through a multifaceted international organization",
    //   source: "/ploutus.png",
    // },
    //            {
    //   title: "Kirubai Silk Buyers",
    //   category:
    //     "Kirubai Silk Buyers are the best old silk saree buyers Chennai. We serve the best to sell your used silk sarees for cash. Over 10 years of experience in the old silk saree business make us among the best Old Pattu Saree Buyers in Chennai..",
    //   source: "/kirubai.png",
    // },
  ];

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 md:py-20 min-h-screen bg-gradient-to-b from-background via-background/95 to-background/80"
    >
      {/*
        Mirrors navbar + Hero grid:
          px-4 sm:px-6 lg:px-12
          [logo=2] [nav=8] [theme=2]  → [label=2] [content=8] [spacer=2]
      */}
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-x-0 gap-y-8 md:gap-y-12">
          {/* ── LEFT STICKY LABEL – aligns with logo col (2) ── */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-20 md:top-24">
              <span className="flex items-center gap-2 uppercase tracking-wider text-xs sm:text-sm">
                Portfolio
                <ArrowDownRight size={16} />
              </span>
            </div>
          </div>

          {/* ── MAIN CONTENT – aligns with nav col (8) ── */}
          <div className="col-span-12 lg:col-span-8">
            {/* Mobile-only label */}
            <div className="lg:hidden mb-6">
              <span className="flex items-center gap-2 uppercase tracking-wider text-xs sm:text-sm">
                Portfolio
                <ArrowDownRight size={16} />
              </span>
            </div>

            {/* SECTION HEADER */}
            <div className="mb-12 sm:mb-16 md:mb-24">
              <TextEffect as="h2" perWord={true} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight md:leading-[1.05] tracking-tight mb-6 sm:mb-8 md:mb-10">
                Code, creativity &
                <br />
                scalable solutions
              </TextEffect>

              <TextEffect as="p" perWord={true} delay={0.2} className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
                Building modern full stack applications that balance performance, usability, and clean architecture.
              </TextEffect>
            </div>

            {/* PROJECTS */}
            {/*
              Mobile/tablet  → normal flow, moderate gap
              Desktop        → large gap + sticky stacking effect
            */}
            <div className="flex flex-col gap-10 sm:gap-14 md:gap-20 lg:gap-[40vh]">
              {projects.map((project, index) => (
                <div key={index} className="lg:sticky lg:top-24">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer h-[52vw] min-h-[260px] max-h-[420px] sm:h-[56vw] sm:min-h-[300px] sm:max-h-[500px] md:h-[60vw] md:min-h-[360px] md:max-h-[600px] lg:h-[70vh] lg:max-h-none"
                  >
                    {/* IMAGE */}
                    <Image
                      src={project.source}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* CONTENT CARD */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-auto lg:bottom-10 lg:left-10 lg:right-auto lg:max-w-lg md:max-w-md sm:max-w-sm">
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={cn(
                          "p-4 sm:p-5 md:p-6 lg:p-8",
                          "rounded-xl md:rounded-2xl",
                          "bg-white/10",
                          "backdrop-blur-xl",
                          "border border-white/20",
                          "shadow-2xl",
                        )}
                      >
                        {/* PROJECT NUMBER */}
                        <span className="text-xs sm:text-sm tracking-widest opacity-70 block mb-2 sm:mb-3">
                          0{index + 1}
                        </span>

                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-2 sm:mb-3 md:mb-4 text-white leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                          {project.category}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
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
