"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const logos = ["HubSpot", "Salesforce", "Cal.com", "Google Ads", "Meta Ads", "Zapier", "Stripe", "Slack", "HubSpot", "Salesforce", "Cal.com", "Google Ads", "Meta Ads", "Zapier", "Stripe", "Slack"];

const testimonials = [
  {
    quote: "We were missing 40% of inbound calls. NAYA AI now answers every single one, qualifies them, and books into my calendar. First month — 23 extra appointments.",
    name: "Marcus T.",
    role: "Owner",
    company: "Elite Solar Solutions",
    industry: "Solar",
    avatar: "M",
    color: "#A78BFA",
    rating: 5,
  },
  {
    quote: "Our contact-to-meeting rate doubled in 6 weeks. The AI sounds more confident than half my human reps. I genuinely can't tell the difference on recordings.",
    name: "Sarah K.",
    role: "Head of Growth",
    company: "PropMax Realty",
    industry: "Real Estate",
    avatar: "S",
    color: "#06B6D4",
    rating: 5,
  },
  {
    quote: "ROI in week one. I was sceptical about AI calls feeling robotic — first demo completely changed my mind. Clients have no idea they're talking to an AI.",
    name: "Daniel R.",
    role: "Director",
    company: "HomeShield Services",
    industry: "Home Services",
    avatar: "D",
    color: "#34D399",
    rating: 5,
  },
];

const bigStats = [
  { value: "2,400+", label: "Businesses using NAYA AI" },
  { value: "4.9★",   label: "Average customer rating"  },
  { value: "$12M+",  label: "Revenue booked via NAYA"   },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="social-proof" className="relative py-28 md:py-36 overflow-hidden">
      <div className="section-divider" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[400px] rounded-full bg-naya-primary/8 blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
            Businesses that never miss
            <br />a <span className="gradient-text">lead again</span>
          </h2>
        </motion.div>

        {/* Big stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto">
          {bigStats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="text-center">
              <p className="text-4xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-sm text-naya-muted mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: EASE }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl border border-naya-border hover:border-naya-primary/25
                         transition-all duration-300 group"
              style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)" }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${t.color}10 0%, transparent 70%)` }} />

              <Quote className="w-8 h-8 mb-4 opacity-30" style={{ color: t.color }} />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-naya-text-secondary leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-naya-border">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-naya-text text-sm">{t.name}</p>
                  <p className="text-naya-muted text-xs truncate">{t.role}, {t.company}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-naya-border text-naya-muted shrink-0">
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee logos */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}>
          <p className="text-center text-naya-muted text-xs mb-6 uppercase tracking-widest font-medium">
            Integrates with your existing stack
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-naya-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-naya-bg to-transparent z-10 pointer-events-none" />
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {logos.map((logo, i) => (
                <span key={i}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl border border-naya-border
                             bg-naya-surface text-naya-text-secondary text-sm font-medium shrink-0
                             hover:border-naya-primary/40 hover:text-white transition-all duration-200">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
