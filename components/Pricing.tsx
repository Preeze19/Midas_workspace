"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$97",
    period: "/month",
    tagline: "Perfect for solo operators and small teams.",
    highlight: false,
    cta: "Get Started",
    callRate: "$0.15/min",
    features: [
      "Unlimited voice sales agent",
      "Unlimited real-time booking",
      "Cal.com calendar integration",
      "100 minutes/month included",
      "10 min max call duration",
      "Up to 500 contacts",
      "AI-powered lead qualification",
      "Unlimited call transcripts",
      "AI sales campaign manager",
      "Auto call & email reminders",
    ],
  },
  {
    name: "Growth",
    price: "$497",
    period: "/month",
    tagline: "For teams ready to scale their pipeline fast.",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Growing",
    callRate: "$0.13/min",
    features: [
      "Everything in Basic",
      "1,500 minutes/month included",
      "Uncapped call duration",
      "Up to 5,000 contacts",
      "2,000 call recordings",
      "LeadsFinder (verified mobile enricher)",
      "AdsConnect (auto-qualify ad leads)",
      "Priority support",
      "Advanced analytics dashboard",
      "Multi-campaign management",
    ],
  },
  {
    name: "Bespoke",
    price: "Custom",
    period: "",
    tagline: "Enterprise-grade, built around your workflow.",
    highlight: false,
    cta: "Talk to Sales",
    callRate: "Volume pricing",
    features: [
      "Everything in Growth",
      "Unlimited voice cloning",
      "AI-managed campaigns at scale",
      "Custom CRM integrations",
      "Dedicated account manager",
      "White-label options",
      "SLA & uptime guarantees",
      "Custom onboarding & training",
      "API access",
      "Advanced security & compliance",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: EASE },
  }),
};

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pay for results,{" "}
            <span className="gradient-text">not headcount</span>
          </h2>
          <p className="text-naya-text-secondary text-lg max-w-xl mx-auto">
            No long-term contracts. Pay-as-you-go call minutes so you only pay for what you use.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={i}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-naya-primary bg-gradient-to-b from-naya-primary/10 to-naya-surface shadow-glow-purple scale-[1.02]"
                  : "border-naya-border bg-naya-surface hover:border-naya-primary/30"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full
                                   bg-naya-primary text-white text-xs font-semibold shadow-glow-purple">
                    <Zap className="w-3 h-3" fill="currentColor" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-naya-text mb-1">{plan.name}</h3>
                <p className="text-naya-muted text-sm mb-4">{plan.tagline}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-naya-text">{plan.price}</span>
                  {plan.period && (
                    <span className="text-naya-muted mb-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-xs text-naya-muted mt-2">
                  + {plan.callRate} overage
                </p>
              </div>

              <a
                href="#"
                className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl
                            font-semibold text-sm transition-all duration-200 mb-8 ${
                  plan.highlight
                    ? "bg-naya-primary hover:bg-violet-600 text-white shadow-glow-purple hover:shadow-[0_0_60px_rgba(124,58,237,0.4)]"
                    : "border border-naya-border hover:border-naya-primary text-naya-text-secondary hover:text-white"
                }`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlight ? "text-naya-primary-light" : "text-naya-primary"
                      }`}
                    />
                    <span className="text-naya-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-naya-muted text-sm mt-10"
        >
          All plans include a 14-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}
