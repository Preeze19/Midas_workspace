"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { Mic2, Database, BarChart3, CheckCircle2, ArrowRight, Shield, Clock } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function use3DTilt(strength = 10) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), { stiffness: 250, damping: 25 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

const features = [
  {
    icon: Mic2,
    color: "#A78BFA",
    colorBg: "rgba(167,139,250,0.1)",
    title: "Voice AI Sales Agents",
    description: "Trained on 400+ hours of high-ticket sales calls. Natural speech, objection handling, voicemails — indistinguishable from a top closer.",
    bullets: ["Answers every inbound call instantly", "Handles objections like a pro", "Auto-books into your calendar", "Leaves personalised voicemails"],
    size: "large",
  },
  {
    icon: Database,
    color: "#06B6D4",
    colorBg: "rgba(6,182,212,0.1)",
    title: "Lead Research & Validation",
    description: "1.3B+ verified contacts. Enrich and prioritise your pipeline before the first dial.",
    bullets: ["1.3B+ business contacts", "121M+ company profiles", "Mobile enrichment (LeadsFinder)", "CRM sync"],
    size: "small",
  },
  {
    icon: BarChart3,
    color: "#34D399",
    colorBg: "rgba(52,211,153,0.1)",
    title: "AI Campaign Manager",
    description: "Run fully AI-managed outbound call + email sequences. AdsConnect qualifies ad leads before they go cold.",
    bullets: ["Outbound call sequences", "AdsConnect for ad leads", "Auto call & email reminders", "Full transcripts & recordings"],
    size: "small",
  },
  {
    icon: Shield,
    color: "#F59E0B",
    colorBg: "rgba(245,158,11,0.1)",
    title: "CRM Integrations",
    description: "Plug-and-play with HubSpot, Salesforce, Cal.com and 100+ tools via Zapier.",
    size: "wide",
    bullets: ["HubSpot & Salesforce native", "Cal.com calendar sync", "Zapier for 100+ tools", "Real-time data sync"],
  },
  {
    icon: Clock,
    color: "#F472B6",
    colorBg: "rgba(244,114,182,0.1)",
    title: "24/7 Always-On",
    description: "Never miss a lead at 2am. Your AI agent works every hour of every day.",
    size: "small",
    bullets: ["Zero downtime", "Instant response", "Multi-timezone", "Auto-escalation"],
  },
];

function BentoCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = use3DTilt();
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.65, ease: EASE }}
      style={{ rotateX: t.rotateX, rotateY: t.rotateY, transformStyle: "preserve-3d", background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)" }}
      onMouseMove={t.onMouseMove}
      onMouseLeave={t.onMouseLeave}
      className="relative rounded-2xl overflow-hidden group cursor-default
                 border border-naya-border hover:border-naya-primary/30 transition-colors duration-300"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${feature.color}14 0%, transparent 70%)` }} />
      {/* Top shine line */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${feature.color}50, transparent)` }} />

      <div className="relative p-7 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
          style={{ background: feature.colorBg, border: `1px solid ${feature.color}30` }}>
          <Icon className="w-6 h-6" style={{ color: feature.color }} />
        </div>

        <h3 className="text-xl font-bold text-naya-text mb-3">{feature.title}</h3>
        <p className="text-naya-text-secondary leading-relaxed mb-5 text-sm">{feature.description}</p>

        <ul className="space-y-2 mt-auto">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-naya-text-secondary">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: feature.color }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            The Full Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
            Three tools.{" "}
            <span className="gradient-text">One unstoppable</span>
            <br />sales stack.
          </h2>
          <p className="text-naya-text-secondary text-lg max-w-2xl mx-auto">
            Everything your team needs to qualify faster, book more, and close more — without burning anyone out.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Large card */}
          <div className="md:col-span-1 md:row-span-2">
            <div className="h-full"><BentoCard feature={features[0]} index={0} /></div>
          </div>
          {/* Small cards top row */}
          <BentoCard feature={features[1]} index={1} />
          <BentoCard feature={features[2]} index={2} />
          {/* Wide card */}
          <div className="md:col-span-1">
            <BentoCard feature={features[3]} index={3} />
          </div>
          {/* Last small */}
          <BentoCard feature={features[4]} index={4} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12">
          <a href="#pricing" className="inline-flex items-center gap-2 text-naya-primary-light font-semibold
                                        hover:text-white transition-colors group">
            See all features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
