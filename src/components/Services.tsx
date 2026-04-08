"use client";

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextEffect } from "./ui/TextEffect";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with a strong focus on user experience, usability, and responsive design.",
    image: "/1400x1200_t02.webp",
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using React, Tailwind CSS, and modern UI practices.",
    image: "/1400x1200_t01.webp",
  },
  {
    title: "Next.js Application Development",
    description:
      "Building fast, SEO-friendly, and scalable web applications using Next.js and modern React architecture.",
    image: "/api.jpg",
  },
  {
    title: "Full Stack Web Solutions",
    description:
      "End-to-end development from frontend interfaces to backend systems, deployment, and performance optimization.",
    image: "/full_stack.jpg",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-background text-foreground"
    >
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
              <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-foreground">
                Services
                <ArrowDownRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* ── MAIN CONTENT – aligns with nav col (8) ── */}
          <div className="col-span-12 lg:col-span-8">
            {/* Mobile-only label */}
            <div className="lg:hidden mb-6">
              <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-foreground">
                Services
                <ArrowDownRight className="w-4 h-4" />
              </span>
            </div>

            {/* Headline */}
            <div className="mb-10 sm:mb-12 md:mb-16">
              <TextEffect as="h2" perWord={true} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight">
                Building scalable modern web applications
              </TextEffect>
            </div>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 cursor-pointer"
                >
                  {/* Card image */}
                  <motion.div
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.08 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                  </motion.div>

                  {/* Card body */}
                  <motion.div
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -6 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-4 sm:p-5 md:p-6"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-medium mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
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
