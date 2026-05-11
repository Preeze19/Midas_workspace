"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Star } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Plan = typeof plans[0];

function PricingCard({ plan, index, inView }: { plan: Plan; index: number; inView: boolean }) {
  const t = use3DTilt();
  const cardStyle = plan.highlight
    ? { background: "linear-gradient(145deg, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0.04) 100%)", boxShadow: "0 0 0 1px rgba(124,58,237,0.2), 0 20px 60px rgba(124,58,237,0.2)", rotateX: t.rotateX, rotateY: t.rotateY, transformStyle: "preserve-3d" as const }
    : { background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", rotateX: t.rotateX, rotateY: t.rotateY, transformStyle: "preserve-3d" as const };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.65, ease: EASE }}
      style={cardStyle}
      onMouseMove={t.onMouseMove}
      onMouseLeave={t.onMouseLeave}
      className={`relative rounded-2xl p-8 transition-all duration-300 ${plan.highlight ? "border border-naya-primary/50 scale-[1.03]" : "border border-naya-border hover:border-naya-primary/25"}`}
    >
      {plan.highlight && (
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.8), rgba(6,182,212,0.5), transparent)" }} />
      )}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-glow-purple"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #7C3AED)" }}>
            <Star className="w-3 h-3 fill-current" />{plan.badge}
          </span>
        </div>
      )}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-naya-text">{plan.name}</h3>
          {plan.highlight && <Zap className="w-4 h-4 text-naya-primary-light" fill="currentColor" />}
        </div>
        <p className="text-naya-muted text-sm mb-5">{plan.tagline}</p>
        <div className="flex items-end gap-1.5">
          <span className="text-5xl font-black text-white">{plan.price}</span>
          {plan.period && <span className="text-naya-muted mb-2 text-sm">{plan.period}</span>}
        </div>
        <p className="text-xs text-naya-muted mt-1.5">+ {plan.callRate}</p>
      </div>
      <a href="#"
        className={`flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${plan.highlight ? "btn-primary" : "border border-naya-border hover:border-naya-primary/40 text-naya-text-secondary hover:text-white"}`}>
        {plan.cta} <ArrowRight className="w-4 h-4" />
      </a>
      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: plan.color }} />
            <span className="text-naya-text-secondary">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function use3DTilt(strength = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), { stiffness: 200, damping: 25 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

const plans = [
  {
    name: "Basic",
    price: "$97",
    period: "/month",
    tagline: "Perfect for solo operators and small teams getting started.",
    highlight: false,
    cta: "Get Started",
    callRate: "$0.15/min overage",
    color: "#A78BFA",
    features: [
      "Unlimited voice sales agent",
      "Unlimited real-time booking",
      "Cal.com calendar integration",
      "100 minutes/month",
      "Up to 500 contacts",
      "AI lead qualification",
      "Unlimited call transcripts",
      "Auto call & email reminders",
    ],
  },
  {
    name: "Growth",
    price: "$497",
    period: "/month",
    tagline: "For teams serious about scaling pipeline fast.",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Growing",
    callRate: "$0.13/min overage",
    color: "#7C3AED",
    features: [
      "Everything in Basic",
      "1,500 minutes/month",
      "Uncapped call duration",
      "Up to 5,000 contacts",
      "2,000 call recordings",
      "LeadsFinder (mobile enricher)",
      "AdsConnect (auto-qualify ads)",
      "Priority support",
      "Advanced analytics",
      "Multi-campaign management",
    ],
  },
  {
    name: "Bespoke",
    price: "Custom",
    period: "",
    tagline: "Enterprise-grade, built entirely around your workflow.",
    highlight: false,
    cta: "Talk to Sales",
    callRate: "Volume pricing",
    color: "#06B6D4",
    features: [
      "Everything in Growth",
      "Unlimited voice cloning",
      "AI-managed campaigns",
      "Custom CRM integrations",
      "Dedicated account manager",
      "White-label options",
      "SLA & uptime guarantees",
      "Custom onboarding",
      "API access",
      "Security & compliance",
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
            Pay for results,{" "}
            <span className="gradient-text">not headcount</span>
          </h2>
          <p className="text-naya-text-secondary text-lg max-w-xl mx-auto">
            No long-term contracts. Pay-as-you-go minutes so you only pay for what you use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }} className="text-center text-naya-muted text-sm mt-10">
          All plans include a <span className="text-white">14-day free trial</span>. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
