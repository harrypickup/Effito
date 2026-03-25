import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PremiumInfrastructureAnimation: React.FC = () => {
  const manualPath =
    'M 90 150 C 170 112, 250 192, 330 158 C 390 132, 450 126, 520 154 C 590 182, 655 128, 735 146';
  const effitoPath =
    'M 90 335 C 220 335, 300 335, 390 335 C 500 335, 610 335, 735 335';

  const pulseTransition = {
    duration: 3.2,
    repeat: Infinity,
    ease: 'linear' as const,
  };

  return (
    <div className="relative w-full max-w-[760px]">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[28px] border border-stone-200/90 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.04),transparent_30%)]" />
        <motion.div
          className="absolute inset-y-0 -left-[20%] w-[40%] bg-gradient-to-r from-transparent via-white/60 to-transparent"
          animate={{ x: ['0%', '320%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Frame */}
        <div className="relative z-10 p-5 md:p-6">
          {/* Header */}
          <div className="mb-5 flex items-start justify-between gap-4 border-b border-stone-200/80 pb-5">
            <div>
              <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.42em] text-stone-400">
                Infrastructure Blueprint
              </span>
              <h3 className="text-sm md:text-[15px] font-medium tracking-[0.16em] uppercase text-slate-900">
                Operational Signal Architecture
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <motion.div
                className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                animate={{ opacity: [0.45, 1, 0.45], scale: [0.95, 1.2, 0.95] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <div className="rounded-full border border-slate-200 bg-stone-50 px-3 py-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-600">
                  Blueprint v3.1
                </span>
              </div>
            </div>
          </div>

          {/* Diagram */}
          <div className="relative overflow-hidden rounded-[22px] border border-stone-200 bg-[#FCFCFA] px-4 py-5 md:px-5 md:py-6">
            {/* Manual lane label */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-stone-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-400">
                  Reactive Process
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-300">
                Manual Leakage
              </span>
            </div>

            <svg
              viewBox="0 0 820 430"
              className="h-[360px] w-full md:h-[420px]"
              role="img"
              aria-label="Animated comparison between manual care home operations and Effito infrastructure"
            >
              <defs>
                <linearGradient id="manualFade" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#d6d3d1" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>

                <linearGradient id="effitoRail" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="55%" stopColor="#111827" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>

                <linearGradient id="effitoGlow" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(15,23,42,0)" />
                  <stop offset="30%" stopColor="rgba(15,23,42,0.16)" />
                  <stop offset="70%" stopColor="rgba(15,23,42,0.16)" />
                  <stop offset="100%" stopColor="rgba(15,23,42,0)" />
                </linearGradient>

                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="smallGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Mid divider */}
              <line x1="35" y1="220" x2="785" y2="220" stroke="#ece7e1" strokeWidth="1.5" />

              {/* Manual top lane */}
              <text x="108" y="122" fontSize="11" letterSpacing="2.8" fill="#b0aca6">
                MISSED CALL
              </text>
              <text x="330" y="198" fontSize="11" letterSpacing="2.8" fill="#b0aca6">
                MANUAL ERROR
              </text>
              <text x="505" y="124" fontSize="11" letterSpacing="2.8" fill="#b0aca6">
                LOST LEAD
              </text>

              <motion.path
                d={manualPath}
                fill="none"
                stroke="url(#manualFade)"
                strokeWidth="3"
                strokeDasharray="7 9"
                initial={{ pathLength: 0, opacity: 0.5 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
              />

              {/* drifting manual signal */}
              <motion.circle
                r="5"
                fill="#a8a29e"
                filter="url(#smallGlow)"
                animate={{ offsetDistance: ['0%', '100%'] }}
                transition={pulseTransition}
                style={{
                  offsetPath: `path("${manualPath}")`,
                  offsetRotate: '0deg',
                }}
              />

              {/* leakage pulses */}
              {[
                { x: 195, y: 144, delay: 0.4 },
                { x: 390, y: 176, delay: 1.1 },
                { x: 598, y: 140, delay: 1.7 },
              ].map((item, i) => (
                <g key={i}>
                  <motion.circle
                    cx={item.x}
                    cy={item.y}
                    r="4"
                    fill="#d6d3d1"
                    animate={{ opacity: [0.15, 0.55, 0.15], scale: [1, 1.9, 2.3] }}
                    transition={{ duration: 2.3, repeat: Infinity, delay: item.delay }}
                  />
                  <motion.circle
                    cx={item.x}
                    cy={item.y}
                    r="2.5"
                    fill="#b9b4ae"
                    animate={{ opacity: [0.35, 0.85, 0.35] }}
                    transition={{ duration: 2.3, repeat: Infinity, delay: item.delay }}
                  />
                </g>
              ))}

              {/* Effito lower lane heading */}
              <circle cx="70" cy="266" r="5" fill="#0f172a" />
              <text x="88" y="271" fontSize="14" letterSpacing="4.2" fill="#0f172a" fontWeight="700">
                EFFITO™ INFRASTRUCTURE
              </text>

              <text x="272" y="243" fontSize="11" letterSpacing="3" fill="#d6d3d1">
                SYSTEM UPGRADE
              </text>

              {/* Engine badge */}
              <g>
                <rect
                  x="650"
                  y="246"
                  width="118"
                  height="28"
                  rx="14"
                  fill="#f5f5f4"
                  stroke="#e7e5e4"
                />
                <text x="668" y="264" fontSize="10" letterSpacing="1.8" fill="#475569" fontWeight="700">
                  OPTIMIZED ENGINE
                </text>
              </g>

              {/* Rail glow */}
              <motion.rect
                x="95"
                y="318"
                width="650"
                height="34"
                rx="17"
                fill="url(#effitoGlow)"
                animate={{ opacity: [0.32, 0.62, 0.32] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />

              {/* Base rail */}
              <line
                x1="95"
                y1="335"
                x2="745"
                y2="335"
                stroke="url(#effitoRail)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <circle cx="95" cy="335" r="7" fill="#0f172a" />
              <circle cx="745" cy="335" r="7" fill="#0f172a" />

              {/* Active checkpoints */}
              {[
                { cx: 195, label: 'INSTANT TRIAGE', delay: 0.2 },
                { cx: 370, label: 'AUTO-QUALIFY', delay: 0.55 },
                { cx: 555, label: 'CAPTURE LOCK', delay: 0.9 },
              ].map((node, i) => (
                <g key={i}>
                  <motion.circle
                    cx={node.cx}
                    cy="335"
                    r="8"
                    fill="#0f172a"
                    animate={{ scale: [1, 1.18, 1], opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: node.delay }}
                  />
                  <motion.circle
                    cx={node.cx}
                    cy="335"
                    r="17"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.25, 1.55] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: node.delay }}
                  />
                  <text
                    x={node.cx - 42}
                    y="320"
                    fontSize="10"
                    letterSpacing="2.2"
                    fill="#475569"
                    fontWeight="700"
                  >
                    {node.label}
                  </text>
                </g>
              ))}

              {/* moving premium pulses */}
              {[0, 0.95, 1.85].map((delay, i) => (
                <motion.circle
                  key={i}
                  r="6"
                  fill="#0f172a"
                  filter="url(#softGlow)"
                  animate={{ offsetDistance: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay }}
                  style={{
                    offsetPath: `path("${effitoPath}")`,
                    offsetRotate: '0deg',
                  }}
                />
              ))}

              {/* Scan beam */}
              <motion.rect
                x="85"
                y="306"
                width="96"
                height="58"
                rx="16"
                fill="rgba(15,23,42,0.06)"
                animate={{ x: [85, 650, 85] }}
                transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Module row */}
              <g transform="translate(0 372)">
                <line x1="35" y1="0" x2="785" y2="0" stroke="#ece7e1" strokeWidth="1.5" />
                {[
                  { x: 150, title: 'MODULE 1', label: 'Growth' },
                  { x: 410, title: 'MODULE 2', label: 'Talent' },
                  { x: 655, title: 'MODULE 3', label: 'Intelligence' },
                ].map((mod, i) => (
                  <g key={i}>
                    {i !== 0 && <line x1={mod.x - 115} y1="0" x2={mod.x - 115} y2="82" stroke="#ece7e1" strokeWidth="1.5" />}
                    <text
                      x={mod.x - 34}
                      y="28"
                      fontSize="11"
                      letterSpacing="2.4"
                      fill="#a8a29e"
                      fontWeight="700"
                    >
                      {mod.title}
                    </text>
                    <motion.text
                      x={mod.x - 28}
                      y="58"
                      fontSize="20"
                      fill="#111827"
                      animate={{ opacity: [0.78, 1, 0.78] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    >
                      {mod.label}
                    </motion.text>
                  </g>
                ))}
              </g>
            </svg>
          </div>

          {/* Footer note */}
          <div className="mt-4 flex items-center justify-between px-1">
            <span className="text-[11px] font-light tracking-[0.18em] uppercase text-stone-400">
              Installed infrastructure, not another dashboard
            </span>
            <span className="text-[11px] font-mono text-slate-400">Live orchestration layer</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Performance: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Performance Metrics | Effito Operational Excellence</title>
        <meta
          name="description"
          content="See how Effito reduces inquiry response times to under 60 seconds, eliminates lead decay, and recovers 30 hours of admin time weekly for care homes."
        />
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-8 py-20 md:py-40 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            {/* Left Column - Text */}
            <div className="lg:col-span-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8 md:mb-12 block"
              >
                System Performance Monitor
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-[7rem] font-serif text-slate-900 mb-10 md:mb-16 tracking-tighter leading-[1.05] md:leading-[0.9]"
              >
                Quantifying <br className="hidden md:block" />
                <span className="italic">Certainty.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-600 leading-[1.6] font-light max-w-3xl"
              >
                Performance is not a projection. It is the direct output of your infrastructure. We replace the
                volatility of manual processes with engineered consistency.
              </motion.p>
            </div>

            {/* Right Column - New Premium Animation */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <PremiumInfrastructureAnimation />
            </div>
          </div>
        </section>

        {/* Output Matrix Section */}
        <section className="py-24 md:py-40 px-6 md:px-8 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start mb-20">
              {/* Left - Title Block */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-6">
                  Dashboards №1: Response Velocity
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
                  Eliminating Operational <span className="italic">Friction.</span>
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
                  In the modern care market, the "Response Gap" is where profit goes to die. Manual legacy systems
                  allow enquiries to drift for hours, resulting in an 85% loss of high intent private leads.
                </p>

                {/* Stats Cards */}
                <div className="space-y-6">
                  <div className="bg-stone-50 p-6 md:p-8 rounded-xl border border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-3">
                      Response Speed
                    </span>
                    <div className="text-5xl md:text-6xl font-serif text-slate-900 mb-2 tracking-tight">
                      30 Seconds
                    </div>
                    <span className="text-sm text-slate-500 font-light">Effito Average</span>
                  </div>

                  <div className="bg-stone-50 p-6 md:p-8 rounded-xl border border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-3">
                      Lead Retention
                    </span>
                    <div className="text-5xl md:text-6xl font-serif text-emerald-900 mb-2 tracking-tight">+620%</div>
                    <span className="text-sm text-slate-500 font-light">Vs. Manual Handling</span>
                  </div>
                </div>
              </div>

              {/* Right - Visual Matrix */}
              <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-stone-200 shadow-xl">
                <div className="mb-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-6">
                    ● Output Matrix: Lead Capture Efficiency
                  </span>
                </div>

                {/* Legacy Infrastructure Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-slate-900">
                      Legacy
                      <br />
                      (Manual)
                    </span>
                    <span className="text-xs text-slate-400">15% conversion</span>
                  </div>
                  <div className="h-12 bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '15%' }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-stone-300 flex items-center justify-end pr-3"
                    >
                      <span className="text-xs font-mono text-slate-700">15%</span>
                    </motion.div>
                  </div>
                </div>

                {/* Effito Infrastructure Bar */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-slate-900">
                      Effito
                      <br />
                      (Infrastructure)
                    </span>
                    <span className="text-xs text-emerald-700">98% conversion</span>
                  </div>
                  <div className="h-12 bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-slate-900 flex items-center justify-end pr-3"
                    >
                      <span className="text-xs font-mono text-white">98%</span>
                    </motion.div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-6 font-light italic">
                  Based on typical 40-bed home receiving 20 monthly enquiries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stabilization Curve Section */}
        <section className="py-24 md:py-40 px-6 md:px-8 bg-[#FAF9F6]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-6">
                Dashboards №2: Bed Fill Optimization
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
                The Stabilization <span className="italic">Curve.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
              {/* Graph */}
              <div className="lg:col-span-8">
                <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-lg">
                  <p className="text-sm text-slate-600 mb-8 font-light">
                    Manual homes suffer from "Capacity Volatility" — a cycle of move ins followed by sudden vacancies
                    and slow refills. Effito creates a continuous intake pressure that maintains peak occupancy.
                  </p>

                  <div className="relative h-[400px] md:h-[500px]">
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      <line x1="60" y1="50" x2="60" y2="350" stroke="#e5e7eb" strokeWidth="2" />
                      <line x1="60" y1="350" x2="750" y2="350" stroke="#e5e7eb" strokeWidth="2" />

                      <text x="30" y="60" fontSize="12" fill="#94a3b8">
                        100%
                      </text>
                      <text x="35" y="140" fontSize="12" fill="#94a3b8">
                        95%
                      </text>
                      <text x="35" y="220" fontSize="12" fill="#94a3b8">
                        90%
                      </text>
                      <text x="35" y="300" fontSize="12" fill="#94a3b8">
                        85%
                      </text>
                      <text x="35" y="355" fontSize="12" fill="#94a3b8">
                        80%
                      </text>

                      <text x="80" y="375" fontSize="12" fill="#94a3b8">
                        M 1
                      </text>
                      <text x="220" y="375" fontSize="12" fill="#94a3b8">
                        M 3
                      </text>
                      <text x="360" y="375" fontSize="12" fill="#94a3b8">
                        M 6
                      </text>
                      <text x="500" y="375" fontSize="12" fill="#94a3b8">
                        M 9
                      </text>
                      <text x="640" y="375" fontSize="12" fill="#94a3b8">
                        M 12
                      </text>

                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        viewport={{ once: true }}
                        d="M 80,280 Q 150,260 220,270 T 360,250 T 500,270 T 640,260 T 720,250"
                        stroke="#cbd5e1"
                        strokeWidth="3"
                        strokeDasharray="8,8"
                        fill="none"
                      />

                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        viewport={{ once: true }}
                        d="M 80,280 Q 220,200 360,120 T 640,70 L 720,60"
                        stroke="#0f172a"
                        strokeWidth="4"
                        fill="none"
                      />

                      <line x1="600" y1="30" x2="640" y2="30" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8,8" />
                      <text x="650" y="35" fontSize="14" fill="#64748b">
                        Manual Volatility
                      </text>

                      <line x1="600" y1="50" x2="640" y2="50" stroke="#0f172a" strokeWidth="4" />
                      <text x="650" y="55" fontSize="14" fill="#0f172a">
                        Effito Trajectory
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right - Explanation Cards */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                    <span className="text-white text-sm">●</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 mb-3">Institutional Flow</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    By treating the intake process as a high speed pipeline, we remove the reliance on the
                    "availability" of a human manager to secure a booking.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                    <span className="text-white text-sm">●</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 mb-3">Agency Elimination</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    The speed of the recruitment engine captures top tier talent before they drift to agencies,
                    slashing your monthly markup expenditure by up to 85%.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                    <span className="text-white text-sm">●</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 mb-3">Operational Peace</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Automating 96% of routine staff communications allows your clinical team to focus purely on care
                    standards and CQC compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 md:py-48 px-6 md:px-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 tracking-tight leading-tight">
              Certainty is not a forecast. <br className="hidden md:block" />
              It is <span className="italic">infrastructure.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 mb-14 font-light leading-[1.7] max-w-2xl mx-auto">
              These metrics are not aspirational targets. They are the measured, repeatable output of systematic
              infrastructure working exactly as designed.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-slate-900 text-white px-14 py-7 text-[11px] uppercase tracking-[0.45em] font-bold shadow-2xl hover:bg-slate-800 transition-all duration-300"
            >
              Book Strategy Call
            </motion.a>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Performance;
