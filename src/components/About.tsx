"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowDownRight } from "lucide-react";
import { TextEffect } from "./ui/TextEffect";

export function About() {
  const stats = [
    { value: "8+", label: "Months of experience" },
    // { value: "8+", label: "Projects done" },
    // { value: "10+", label: "Freelance projects" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
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
                About me
                <ArrowDownRight size={18} />
              </span>
            </div>
          </div>

          {/* ── MAIN CONTENT – aligns with nav col (8) ── */}
          <div className="col-span-12 lg:col-span-8 space-y-10 sm:space-y-12 md:space-y-14">
            {/* Mobile-only label */}
            <div className="lg:hidden">
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider text-foreground">
                About me
                <ArrowDownRight size={16} />
              </span>
            </div>

            {/* Headline */}
            <TextEffect as="h2" perWord={true} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight">
              Architecture and
              <br />
              performance
            </TextEffect>

            {/* Image */}
            <div className="relative  w-full h-56 sm:h-72 lg:h-155 rounded-2xl overflow-hidden">
              <NextImage
                src="/aboutimage 6.png"
                alt="About me"
                fill
                priority
                className="contain object-cover object-top"
              />
            </div>

            {/* Bio + Contact */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              {/* Bio + CTA */}
              <div className="md:col-span-8">
                <TextEffect as="p" perWord={true} className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-6 sm:mb-8">
                  I specialize in developing end-to-end applications by combining modern frontend technologies with robust backend systems, ensuring scalability, performance, and long-term maintainability.
                </TextEffect>
                <Button
                  href="https://drive.google.com/file/d/1b7RzlAWFuGxmfHU3ZWftBpOOYNiAO-7T/view"
                  variant="default"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Button>
              </div>

              {/* Contact details */}
              <div className="md:col-span-4 space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-foreground text-base sm:text-lg md:text-xl">
                  Tharun
                </p>

                <a
                  href="tel:+916383156392"
                  className="block text-foreground text-base sm:text-lg md:text-xl hover:text-accent transition-colors"
                >
                  +91 6383156392
                </a>

                <a
                  href="mailto:tharunbindhu7090@gmail.com"
                  className="block text-foreground text-base sm:text-lg md:text-xl hover:text-accent transition-colors break-all"
                >
                  tharunbindhu7090@gmail.com
                </a>

                <span className="block text-foreground text-base sm:text-lg md:text-xl">
                  Chennai, India
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-light mb-1 sm:mb-2 text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-foreground uppercase tracking-wider text-xs sm:text-sm">
                    {stat.label}
                  </p>
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
