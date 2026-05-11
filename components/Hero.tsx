"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Play, PhoneCall, TrendingUp, Users, Zap } from "lucide-react";
import AnimatedStat from "@/components/AnimatedStat";

const stats = [
  { value: "30%+", label: "Leads Recovered" },
  { value: "2×",   label: "Conversion Rate"  },
  { value: "50%",  label: "Lower Ops Cost"   },
  { value: "1.3B+",label: "Contacts Database"},
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function use3DTilt(strength = 12) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), { stiffness: 300, damping: 30 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

function MetricCard({ icon: Icon, label, value, color, delay }: {
  icon: React.ElementType; label: string; value: string; color: string; delay: number;
}) {
  const t = use3DTilt(8);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      style={{ rotateX: t.rotateX, rotateY: t.rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={t.onMouseMove}
      onMouseLeave={t.onMouseLeave}
      className="glass-card rounded-2xl p-4 cursor-default min-w-[148px] shadow-card"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${color}22` }}>
          <Icon className="w-3.5 h-3.5" style={{ color }} />
        </div>
        <span className="text-[11px] text-naya-text-secondary font-medium leading-tight">{label}</span>
      </div>
      <p className="text-2xl font-extrabold" style={{
        background: `linear-gradient(135deg, #fff 0%, ${color} 100%)`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>{value}</p>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Layered aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1200px] h-[700px]
                        rounded-full bg-naya-primary/25 blur-[180px] animate-pulse-slow" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px]
                        rounded-full bg-violet-700/15 blur-[120px] animate-float-slow" />
        <div className="absolute top-1/4 -right-20 w-[420px] h-[420px]
                        rounded-full bg-naya-accent/10 blur-[100px] animate-float" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left copy ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border border-naya-primary/30 bg-naya-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-naya-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-naya-accent" />
              </span>
              <span className="text-sm font-medium text-naya-primary-light">Voice-First AI Sales Automation</span>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.93] tracking-tight mb-5">
              {["Your", "AI", "Sales", "Agent."].map((w, i) => (
                <motion.span key={w}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: EASE }}
                  className="inline-block mr-4">
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.7, ease: EASE }}
                className="gradient-text inline-block">
                Always On.
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-lg md:text-xl text-naya-text-secondary leading-relaxed mb-10 max-w-xl">
              AI voice agents trained on{" "}
              <span className="text-white font-semibold">400+ hours</span> of high-ticket sales calls.
              Qualify leads, book meetings, handle objections — 24/7, no extra headcount.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#pricing" className="btn-primary text-base">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </a>
              <button className="btn-ghost text-base group">
                <span className="w-9 h-9 rounded-full border border-naya-primary/40 flex items-center justify-center
                                 group-hover:border-naya-primary group-hover:bg-naya-primary/10 transition-all">
                  <Play className="w-3.5 h-3.5 ml-0.5 text-naya-primary-light" fill="currentColor" />
                </span>
                Watch 2-min Demo
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.88 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-naya-border">
              {stats.map((s, i) => (
                <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 120} />
              ))}
            </motion.div>
          </div>

          {/* ── Right 3D panel ── */}
          <div className="hidden lg:block relative h-[560px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-64 h-64 rounded-full bg-naya-primary/15 blur-[70px] animate-pulse-slow" />

            <motion.div className="absolute top-4 left-6" animate={{ y: [0,-12,0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <MetricCard icon={PhoneCall}  label="Calls Answered"  value="100%"  color="#A78BFA" delay={0.65} />
            </motion.div>
            <motion.div className="absolute top-32 right-2" animate={{ y: [0,-16,0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <MetricCard icon={TrendingUp} label="Conversion Lift" value="+2×"   color="#06B6D4" delay={0.8}  />
            </motion.div>
            <motion.div className="absolute bottom-32 left-2" animate={{ y: [0,-10,0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <MetricCard icon={Users}      label="Leads Recovered" value="30%+"  color="#34D399" delay={0.95} />
            </motion.div>
            <motion.div className="absolute bottom-6 right-4" animate={{ y: [0,-14,0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
              <MetricCard icon={Zap}        label="Setup Time"      value="24hrs" color="#F59E0B" delay={1.1}  />
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-52 h-[380px] rounded-[36px] overflow-hidden
                         border border-naya-primary/20 shadow-glow-purple"
              style={{ background: "linear-gradient(145deg,rgba(124,58,237,0.12) 0%,rgba(6,182,212,0.05) 100%)", backdropFilter: "blur(20px)" }}
            >
              <div className="relative p-5 pt-8 h-full flex flex-col">
                <div className="w-16 h-1.5 bg-white/15 rounded-full mx-auto mb-5" />
                <div className="space-y-2.5">
                  {[
                    { text: "Incoming call...", dot: "bg-naya-primary-light animate-pulse" },
                    { text: "Qualifying lead",  dot: "bg-naya-accent animate-pulse" },
                    { text: "Meeting booked ✓", dot: "bg-green-400" },
                  ].map((item, i) => (
                    <motion.div key={item.text}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + i * 0.25 }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                      <span className="text-xs text-naya-text-secondary">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.95 }}
                  className="mt-auto p-3.5 rounded-2xl text-center"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}>
                  <p className="text-xs font-bold text-naya-primary-light tracking-widest">NAYA AI</p>
                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-[10px] text-naya-text-secondary">Active 24/7</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-naya-bg to-transparent pointer-events-none" />
    </section>
  );
}
