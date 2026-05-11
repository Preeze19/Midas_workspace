"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic2, Database, BarChart3, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Mic2,
    color: "naya-primary",
    colorHex: "#7C3AED",
    title: "Voice AI Sales Agents",
    description:
      "Trained on 400+ hours of high-ticket sales calls, our agents sound natural, handle objections, leave voicemails, and turn every conversation into a booked meeting.",
    bullets: [
      "Answers inbound calls in under 1 second",
      "Handles objections like a top closer",
      "Leaves personalised voicemails",
      "Auto-books into your calendar",
    ],
  },
  {
    icon: Database,
    color: "naya-accent",
    colorHex: "#06B6D4",
    title: "Lead Research & Validation",
    description:
      "Real-time access to 1.3 billion+ business contacts and 121 million+ companies. Enrich, validate, and prioritise your pipeline before dialling.",
    bullets: [
      "1.3B+ verified business contacts",
      "121M+ company profiles",
      "Mobile number enrichment (LeadsFinder)",
      "CRM sync — HubSpot & Salesforce",
    ],
  },
  {
    icon: BarChart3,
    color: "violet-400",
    colorHex: "#A78BFA",
    title: "AI Campaign Manager",
    description:
      "Run fully AI-managed outbound call and email campaigns with AdsConnect — automatically qualify leads from your ads and convert them before they go cold.",
    bullets: [
      "AI-managed outbound sequences",
      "AdsConnect — qualify ad leads instantly",
      "Auto call & email reminders",
      "Full call transcripts & recordings",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: EASE },
  }),
};

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      custom={index}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative rounded-2xl bg-naya-surface border border-naya-border p-8
                 shadow-card hover:border-naya-primary/40 transition-colors duration-300 group"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${feature.colorHex}18 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
        style={{ background: `${feature.colorHex}18`, border: `1px solid ${feature.colorHex}30` }}
      >
        <Icon className="w-6 h-6" style={{ color: feature.colorHex }} />
      </div>

      <h3 className="text-xl font-bold text-naya-text mb-3">{feature.title}</h3>
      <p className="text-naya-text-secondary leading-relaxed mb-6">{feature.description}</p>

      <ul className="space-y-2">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-naya-text-secondary">
            <CheckCircle2
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: feature.colorHex }}
            />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            What NAYA AI Does
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Three tools. One{" "}
            <span className="gradient-text">unstoppable</span> sales stack.
          </h2>
          <p className="text-naya-text-secondary text-lg max-w-2xl mx-auto">
            Everything your sales team needs to qualify leads faster, book more meetings,
            and close more deals — without burning out your reps.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
