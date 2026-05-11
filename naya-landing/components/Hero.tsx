"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedStat from "@/components/AnimatedStat";

const stats = [
  { value: "30%+", label: "Leads Recovered" },
  { value: "2×", label: "Conversion Rate" },
  { value: "50%", label: "Lower Ops Cost" },
  { value: "1.3B+", label: "Contacts Database" },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full
                   bg-naya-primary/20 blur-[120px] animate-pulse-slow pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full
                   bg-naya-accent/15 blur-[100px] pointer-events-none"
      />

      {/* Floating orb */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/4 right-8 md:right-24 w-72 h-72 md:w-96 md:h-96 rounded-full
                   border border-naya-primary/20 bg-gradient-radial from-naya-primary/10 to-transparent
                   hidden sm:block pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
        className="absolute top-1/3 right-12 md:right-32 w-48 h-48 md:w-64 md:h-64 rounded-full
                   border border-naya-accent/20 hidden sm:block pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-naya-primary/30
                       bg-naya-primary/10 text-naya-primary-light text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-naya-accent animate-pulse" />
            Voice-First AI Sales Automation
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            Your AI Sales Agent.{" "}
            <span className="gradient-text">Always On.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg md:text-xl text-naya-text-secondary leading-relaxed mb-10 max-w-2xl"
          >
            Voice-first AI agents trained on 400+ hours of high-ticket sales calls.
            They qualify leads, book meetings, handle objections, and follow up
            automatically — 24/7, no extra headcount needed.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="#pricing" className="btn-primary text-base px-8 py-4 rounded-xl">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <button className="btn-ghost text-base px-8 py-4 rounded-xl group">
              <span className="w-9 h-9 rounded-full border border-naya-primary/40 flex items-center justify-center
                               group-hover:border-naya-primary group-hover:bg-naya-primary/10 transition-all">
                <Play className="w-4 h-4 ml-0.5 text-naya-primary-light" fill="currentColor" />
              </span>
              Watch 2-min Demo
            </button>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((s, i) => (
              <AnimatedStat
                key={s.label}
                value={s.value}
                label={s.label}
                delay={i * 120}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-naya-bg to-transparent pointer-events-none" />
    </section>
  );
}
