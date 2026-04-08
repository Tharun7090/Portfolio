"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { List, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About Me", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const HEADER_OFFSET = 96;

export function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= HEADER_OFFSET && rect.bottom >= HEADER_OFFSET) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          {/* 12 Column Grid */}
          <div className="grid grid-cols-12 items-center h-16 sm:h-20 md:h-24">
            {/* Logo - col 2 */}
            <div className="col-span-6 md:col-span-2">
              <Link href="#home" onClick={() => handleNavClick("#home")}>
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  TS
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - col 8 */}
            <div className="hidden md:flex col-span-8 items-center">
              <nav className="flex items-center gap-1 rounded-md backdrop-blur-md">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");

                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="relative px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium text-foreground hover:text-muted transition-colors"
                    >
                      {link.name}

                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-1 right-1 h-px bg-foreground"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Theme + Mobile Menu - col 2 */}
            <div className="col-span-6 md:col-span-2 flex justify-end items-center gap-2 sm:gap-4">
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-muted transition"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun size={18} className="sm:w-5 sm:h-5" />
                  ) : (
                    <Moon size={18} className="sm:w-5 sm:h-5" />
                  )}
                </button>
              )}

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-background text-foreground flex items-center justify-center hover:bg-muted transition"
                aria-label="Open menu"
              >
                <List size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* SLIDE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background z-50 flex flex-col"
            >
              {/* HEADER WITH CLOSE */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b">
                <span className="text-xl sm:text-2xl font-bold">
                  GS
                </span>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg hover:bg-muted transition"
                >
                  <X size={28} />
                </button>
              </div>

              {/* NAV */}
              <nav className="flex-1 p-4 sm:p-6 space-y-2 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");

                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition text-sm sm:text-base ${
                        isActive
                          ? "bg-foreground text-background"
                          : "hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="p-4 sm:p-6 border-t">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full"
                >
                  Let's Talk
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
