"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were missing 40% of inbound calls. NAYA AI now answers every single one, qualifies them, and books into my calendar. First month — 23 extra appointments.",
    name: "Marcus T.",
    role: "Owner, Elite Solar Solutions",
    industry: "Solar",
    rating: 5,
  },
  {
    quote:
      "Our old follow-up process was a spreadsheet and crossed fingers. NAYA handles the entire outbound sequence. Our contact-to-meeting rate doubled in 6 weeks.",
    name: "Sarah K.",
    role: "Head of Growth, PropMax Realty",
    industry: "Real Estate",
    rating: 5,
  },
  {
    quote:
      "I was sceptical about AI voice calls feeling robotic. First demo blew me away — it sounds like a trained rep. Clients don't even notice. ROI in week one.",
    name: "Daniel R.",
    role: "Director, HomeShield Services",
    industry: "Home Services",
    rating: 5,
  },
];

const logos = [
  "HubSpot", "Salesforce", "Cal.com", "Google Ads", "Meta Ads", "Zapier",
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: EASE },
  }),
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="social-proof" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-naya-primary/5 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Businesses that never miss a{" "}
            <span className="gradient-text">lead again</span>
          </h2>
          <p className="text-naya-text-secondary text-lg max-w-xl mx-auto">
            Across home services, solar, real estate, and healthcare — NAYA AI
            delivers measurable pipeline growth in weeks, not months.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={i}
              className="relative p-8 rounded-2xl bg-naya-surface border border-naya-border
                         shadow-card hover:border-naya-primary/30 transition-colors duration-300"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 mb-6 text-naya-text-secondary leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-naya-primary to-naya-accent
                                flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-naya-text text-sm">{t.name}</p>
                  <p className="text-naya-muted text-xs">{t.role}</p>
                </div>
                <span className="ml-auto text-xs px-2 py-1 rounded-full border border-naya-border text-naya-muted">
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-naya-muted text-sm mb-8 uppercase tracking-widest font-medium">
            Integrates with your existing stack
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.07 }}
                className="px-5 py-2.5 rounded-xl border border-naya-border bg-naya-surface
                           text-naya-text-secondary text-sm font-medium hover:border-naya-primary/40
                           hover:text-naya-text transition-all duration-200"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
