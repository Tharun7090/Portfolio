"use client";

import { Marquee } from "./ui/Marquee";
import { ArrowUpRight } from "lucide-react";
import { Linkedin, Instagram, MessageCircle, Dribbble, Mail, Github } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/tharunshaiju/",
  },
  { name: "GitHub", icon: Github, link: "https://github.com/Tharunshaiju" },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    link: "https://wa.me/916383156392",
  },
  //   {
  //   name: "dribbble",
  //   icon: Dribbble,
  //   link: "https://dribbble.com/Tharunshaiju",
  // },

  { name: "Email", icon: Mail, link: "mailto:tharunbindhu7090@gmail.com" },
];

export function Footer() {
  const scrollTo = (id: string) =>
    document
      .getElementById(id.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-background text-foreground overflow-hidden relative">
      {/* ── Top border ────────────────────────────────────────────── */}
      <div className="w-full border-t border-foreground/15" />

      {/* ── Marquee – smaller text ────────────────────────────────── */}
      <div className="pt-6 sm:pt-8 md:pt-10 text-xs sm:text-sm">
        <Marquee
          items={["Got an idea?", "Tell me!", "Let's build it.", "Reach out →"]}
          speed={30}
        />
      </div>

      {/* ── Name + Hire CTA ───────────────────────────────────────── */}
      <div className="w-full px-4 sm:px-6 lg:px-12 mt-8 sm:mt-10 md:mt-14">
        <div className="grid grid-cols-12">
          <div className="hidden lg:block lg:col-span-2" />

          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 border-b border-foreground/10 pb-10 sm:pb-12 md:pb-16">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-medium mb-2 sm:mb-3 text-muted-foreground">
                  Full Stack Developer
                </p>
                {/* ↑ Larger name headline */}
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight">
                  Tharun
                </h2>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="inline-flex items-center gap-2 self-start sm:self-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-foreground text-background text-sm sm:text-base font-medium hover:opacity-80 transition-opacity shrink-0"
              >
                Hire me
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>

      {/* ── Info row ──────────────────────────────────────────────── */}
      <div className="w-full px-4 sm:px-6 lg:px-12 mt-10 sm:mt-12 md:mt-14 pb-10 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12">
          <div className="hidden lg:block lg:col-span-2" />

          <div className="col-span-12 lg:col-span-8">
            {/* 3 equal cols on sm+, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Location */}
              <div>
                <p className="text-xs font-bold sm:text-sm uppercase tracking-widest text-muted-foreground mb-3 sm:mb-4">
                  [ Location ]
                </p>
                <p className="text-base md:text-lg font-light leading-relaxed">
                  Chennai, India
                  <br />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    600042
                  </span>
                </p>
              </div>

              {/* Phone + Socials */}
              <div>
                <p className="text-xs font-bold sm:text-sm uppercase tracking-widest text-muted-foreground mb-3 sm:mb-4">
                  [ Phone ]
                </p>
                <a
                  href="tel:+916383156392"
                  className="block text-base md:text-lg font-light hover:text-muted transition-colors"
                >
                  +91 6383156392
                </a>
                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-md border border-foreground/15 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Icon size={13} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs font-bold sm:text-sm uppercase tracking-widest text-muted-foreground mb-3 sm:mb-4">
                  [ Email ]
                </p>
                <a
                  href="mailto:tharunbindhu7090@gmail.com"
                  className="block text-base md:text-lg font-light hover:text-muted transition-colors break-all"
                >
                  tharunbindhu7090@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>

      {/* ── Copyright bar ─────────────────────────────────────────── */}
      <div className="w-full px-4 sm:px-6 lg:px-12 pb-6 sm:pb-8">
        <div className="grid grid-cols-12">

          <div className="col-span-12 border-t border-foreground/10 pt-5 sm:pt-6 flex flex-col justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Tharun. All rights
              reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
