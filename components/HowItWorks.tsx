"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Settings, Mic2, CalendarCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const steps = [
  {
    number: "01",
    icon: Settings,
    color: "#A78BFA",
    title: "Connect in 24 hours",
    description: "We sync with your calendar, configure your qualification script, and run a live test call. No dev work, no long onboarding. You're live the next day.",
  },
  {
    number: "02",
    icon: Mic2,
    color: "#06B6D4",
    title: "AI handles every call",
    description: "Your NAYA agent answers inbound calls instantly, runs outbound sequences, qualifies every lead with your exact criteria, and handles objections naturally.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    color: "#34D399",
    title: "Meetings land in your calendar",
    description: "Qualified prospects get booked directly into your team's calendar. Full call transcripts, recordings, and CRM updates happen automatically.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36">
      <div className="section-divider" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                        rounded-full bg-naya-accent/8 blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
            Live in{" "}
            <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="text-naya-text-secondary text-lg max-w-xl mx-auto">
            From sign-up to first booked meeting — most customers are live within 24 hours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)]
                          h-px bg-gradient-to-r from-naya-primary/40 via-naya-accent/40 to-naya-primary/40" />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.18, duration: 0.65, ease: EASE }}
                  className="relative text-center group"
                >
                  {/* Step number circle */}
                  <div className="relative inline-flex mb-8">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center
                                    border border-naya-border group-hover:border-naya-primary/40 transition-colors duration-300"
                      style={{ background: `linear-gradient(145deg, ${step.color}15 0%, rgba(255,255,255,0.02) 100%)` }}>
                      <Icon className="w-9 h-9" style={{ color: step.color }} />
                    </div>
                    {/* Step label */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center
                                     text-xs font-black text-naya-bg"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}>
                      {i + 1}
                    </span>
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`, filter: "blur(8px)" }} />
                  </div>

                  <h3 className="text-xl font-bold text-naya-text mb-3">{step.title}</h3>
                  <p className="text-naya-text-secondary leading-relaxed text-sm max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
