"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Will the AI voice agent sound robotic to my leads?",
    a: "No. NAYA's voice agents are trained on 400+ hours of real high-ticket sales calls and sound remarkably natural. They speak at a human pace, handle pauses, respond to interruptions, and adapt their tone. Most clients cannot tell the difference from a trained human rep.",
  },
  {
    q: "How quickly can I get set up?",
    a: "Most customers are live within 24–48 hours. We connect to your calendar (Cal.com, Google Calendar, or others), configure your qualification script, and run a test call together. No developer needed — it's a plug-and-play setup.",
  },
  {
    q: "What CRMs and tools does NAYA integrate with?",
    a: "NAYA integrates natively with HubSpot, Salesforce, and Cal.com. Through Zapier you can connect virtually any other tool in your stack. All call transcripts, recordings, and booking data sync automatically.",
  },
  {
    q: "What happens when a lead asks a question the AI doesn't know?",
    a: "The agent is trained on your specific business, services, pricing, and common objections before going live. For edge-case questions, it gracefully offers to have a human follow up — and immediately notifies you via email or SMS with the full call transcript.",
  },
  {
    q: "How does the pay-as-you-go call rate work?",
    a: "Each plan includes a monthly minute allowance (e.g. 100 min on Basic, 1,500 min on Growth). If you exceed your allowance, additional minutes are billed at the per-minute rate shown for your plan ($0.15/min Basic, $0.13/min Growth). No surprise bills — you get an alert before you hit your limit.",
  },
  {
    q: "Can I try NAYA AI before committing?",
    a: "Yes. All plans come with a 14-day free trial — no credit card required. You can book a live demo where we show you a call in action, or start your trial directly and run it against your own leads.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border border-naya-border rounded-xl overflow-hidden hover:border-naya-primary/30
                 transition-colors duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5
                   text-left bg-naya-surface hover:bg-white/[0.02] transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="font-semibold text-naya-text">{faq.q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-naya-border flex items-center justify-center
                         text-naya-primary transition-all duration-200">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 pt-1 text-naya-text-secondary leading-relaxed bg-naya-surface">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-naya-primary-light tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Questions?{" "}
            <span className="gradient-text">We&apos;ve got you.</span>
          </h2>
          <p className="text-naya-text-secondary text-lg">
            Everything you need to know before you start booking more meetings.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center p-8 rounded-2xl border border-naya-border bg-naya-surface"
        >
          <p className="text-naya-text font-semibold mb-2">Still have questions?</p>
          <p className="text-naya-text-secondary text-sm mb-4">
            Our team responds within 2 hours during business hours.
          </p>
          <a href="mailto:hello@nayaai.io" className="btn-primary text-sm py-2.5 px-6 inline-flex">
            Talk to the team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
