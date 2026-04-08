"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Linkedin, Instagram, MessageCircle, Mail, Github, ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { TextEffect } from "./ui/TextEffect";
import { CurvedLoop } from "./ui/CurvedLoop";

export function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/balumahendiran-k",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/chxser._.liza.24/",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      link: "https://wa.me/917200111805",
    },
    { name: "GitHub", icon: Github, link: "https://github.com" },
    { name: "Email", icon: Mail, link: "mailto:tharunbindhu7090@gmail.com" },
  ];

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  /* ── Validation ─────────────────────────────────────────────── */
  const validate = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters."
          : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address.";
      case "phone":
        return value && !/^\+?[\d\s\-()]{7,15}$/.test(value)
          ? "Please enter a valid phone number."
          : "";
      case "message":
        return value.trim().length < 10
          ? "Message must be at least 10 characters."
          : "";
      default:
        return "";
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({ ...err, [name]: validate(name, value) }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validate(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = ["name", "email", "phone", "message"] as const;

    // Run all validations
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    fields.forEach((f) => {
      newTouched[f] = true;
      const val = (form.elements.namedItem(f) as HTMLInputElement)?.value ?? "";
      newErrors[f] = validate(f, val);
    });
    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);
    setStatus("");

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: new FormData(form),
    });
    const data = await res.json();

    setLoading(false);
    setStatus(
      data.success
        ? "Message Sent ✅"
        : "Something went wrong. Please try again ❌",
    );
    if (data.success) {
      form.reset();
      setTouched({});
      setErrors({});
    }
  };

  /* ── Shared input classes ────────────────────────────────────── */
  const inputBase =
    "w-full bg-black/30 border rounded-lg px-4 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none transition-colors";
  const inputClass = (field: string) =>
    `${inputBase} ${errors[field] && touched[field] ? "border-red-500 focus:border-red-400" : "border-white/10 focus:border-accent"}`;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
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
                Contact <ArrowDownRight size={18} />
              </span>
            </div>
          </div>

          {/* ── MAIN CONTENT – aligns with nav col (8) ── */}
          <div className="col-span-12 lg:col-span-8 space-y-10 sm:space-y-12 md:space-y-16">
            {/* Mobile-only label */}
            <div className="lg:hidden">
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider text-foreground">
                Contact <ArrowDownRight size={16} />
              </span>
            </div>

            {/* Headline + sub-copy */}
            <div className="relative">
              <TextEffect as="h2" perWord={true} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.95] mb-4 sm:mb-6 pr-20 md:pr-40">
                Let's connect
              </TextEffect>
              <TextEffect as="p" perWord={true} delay={0.2} className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 font-light max-w-2xl leading-relaxed pr-8 md:pr-0">
                Looking for a Full Stack Developer to build scalable web applications or improve your product experience? Let's connect and discuss how I can contribute to your next project.
              </TextEffect>

              {/* Curved Loop Badge */}
              <div className="absolute top-0 right-0 hidden sm:block opacity-60 mt-[-10px] sm:mt-[-20px] md:mt-[-30px] sm:mr-0 md:mr-[20px] lg:mr-[60px]">
                <CurvedLoop text="GET IN TOUCH • TELL ME ABOUT YOUR PROJECT • " size={120} />
              </div>
            </div>

            {/* ── Contact form ─────────────────────────────── */}
            <div className="bg-neutral-900 p-5 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-white/5">
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name*"
                    className={inputClass("name")}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-400 text-xs px-1">{errors.name}</p>
                  )}
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1">
                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className={`${inputBase} border-white/10 focus:border-accent`}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className={inputClass("email")}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-400 text-xs px-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className={inputClass("phone")}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-red-400 text-xs px-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div className="sm:col-span-2 flex flex-col gap-1">
                  <textarea
                    name="message"
                    placeholder="A few words about your project*"
                    rows={4}
                    className={inputClass("message")}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && touched.message && (
                    <p className="text-red-400 text-xs px-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <Button
                    type="submit"
                    variant="default"
                    className="border-2 border-white/10 hover:border-accent"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit request"}
                  </Button>
                  {status && <p className="text-sm text-white/70">{status}</p>}
                </div>
              </form>
            </div>

            {/* ── Social links ─────────────────────────────── */}
            {/* <div className="flex flex-wrap gap-3 sm:gap-4">
              {contacts.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:bg-white/10 transition-all duration-300 group text-sm sm:text-base"
                  >
                    <Icon
                      size={16}
                      className="group-hover:scale-110 transition shrink-0"
                    />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div> */}

            {/* ── Location / Phone / Email ──────────────────── */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pb-4">
              <div>
                <h6 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                  Phone
                </h6>
                <a
                  href="tel:+917200111805"
                  className="text-muted-foreground text-sm sm:text-base lg:text-lg hover:text-foreground transition-colors"
                >
                  +91 7200111805
                </a>
              </div>
              <div>
                <h6 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                  Email
                </h6>
                <a
                  href="mailto:tharunbindhu7090@gmail.com"
                  className="text-muted-foreground text-sm sm:text-base lg:text-lg hover:text-foreground transition-colors break-all"
                >
                  tharunbindhu7090@gmail.com
                </a>
              </div>
              <div>
                <h6 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                  India
                </h6>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                  Chennai, TN
                  <br />
                  600100
                </p>
              </div>
            </div> */}
          </div>

          {/* spacer aligns with theme col (2) */}
          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
