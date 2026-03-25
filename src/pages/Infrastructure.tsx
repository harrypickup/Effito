import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const InfrastructureHeroAnimation: React.FC = () => {
  const manualSteps = [
    { title: 'Enquiry Arrives', note: 'Inbox / voicemail / form' },
    { title: 'Manager Picks Up', note: 'Delayed by availability' },
    { title: 'Manual Follow-Up', note: 'Inconsistent handoff' },
    { title: 'Lead Decays', note: 'Intent leaks away' },
  ];

  const effitoSteps = [
    { title: 'Instant Triage', note: 'Immediate intake' },
    { title: 'Auto Qualification', note: 'Rules + routing' },
    { title: 'Capture Lock', note: 'No lead drift' },
    { title: 'Booked Process', note: 'Structured next step' },
  ];

  const moduleCards = [
    { eyebrow: 'Module 1', title: 'Growth', stat: '< 30s', meta: 'Average first response' },
    { eyebrow: 'Module 2', title: 'Talent', stat: '96%', meta: 'Routine comms automated' },
    { eyebrow: 'Module 3', title: 'Intelligence', stat: '98%', meta: 'Pipeline continuity' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[760px] overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_34%)]" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />

      <motion.div
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        animate={{ x: ['0%', '430%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 p-4 sm:p-5 md:p-6">
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.38em] text-stone-400">
              Infrastructure Blueprint
            </span>
            <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-medium uppercase tracking-[0.14em] text-slate-900">
              Operational Flow Architecture
            </h3>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5">
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-emerald-500"
              animate={{ opacity: [0.45, 1, 0.45], scale: [0.95, 1.15, 0.95] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-600">
              Live System
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {/* Manual Lane */}
          <div className="rounded-[24px] border border-stone-200 bg-[#FCFBF9] p-4 sm:p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-400">
                  Old Way / Reactive Process
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-stone-300">
                Fragmented
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
              {manualSteps.map((step, i) => (
                <div key={step.title} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    className="relative h-full rounded-2xl border border-stone-200 bg-white px-4 py-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone-400">
                        Step {i + 1}
                      </span>
                      <motion.span
                        className="inline-block h-2.5 w-2.5 rounded-full bg-stone-300"
                        animate={{ opacity: [0.3, 0.9, 0.3] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
                      />
                    </div>

                    <h4 className="mb-2 text-base font-medium text-slate-900">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-500">{step.note}</p>

                    {i === 1 && (
                      <motion.div
                        className="mt-4 inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-700"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      >
                        Waits for human
                      </motion.div>
                    )}

                    {i === 3 && (
                      <motion.div
                        className="mt-4 inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-rose-700"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      >
                        Revenue leakage
                      </motion.div>
                    )}
                  </motion.div>

                  {i < manualSteps.length - 1 && (
                    <div className="pointer-events-none absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 md:block">
                      <motion.div
                        className="flex items-center gap-1"
                        animate={{ opacity: [0.35, 0.9, 0.35] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <span className="h-[2px] w-6 bg-stone-300" />
                        <span className="h-2 w-2 rounded-full bg-stone-300" />
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-slate-500">
                  Slow response, inconsistent follow-up, and preventable lead loss.
                </span>
                <span className="text-sm font-medium text-slate-900">Manual flow creates volatility.</span>
              </div>
            </div>
          </div>

          {/* Effito Lane */}
          <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-4 text-white sm:p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [0.55, 1, 0.55], scale: [0.95, 1.15, 0.95] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-300">
                  Effito Infrastructure
                </span>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                Optimized Engine
              </span>
            </div>

            <div className="relative mb-5 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <motion.div
                className="absolute left-0 top-3 bottom-3 w-24 rounded-2xl bg-white/[0.05]"
                animate={{ x: ['-10%', '520%'] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative mb-5 hidden md:block">
                <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-white/15" />
                <div className="relative grid grid-cols-4 gap-4">
                  {effitoSteps.map((step, i) => (
                    <div key={step.title} className="relative">
                      <div className="mb-5 flex justify-center">
                        <motion.div
                          className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white"
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 2.1, repeat: Infinity, delay: i * 0.25 }}
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-950" />
                        </motion.div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                          Step {i + 1}
                        </div>
                        <h4 className="mb-2 text-base font-medium text-white">{step.title}</h4>
                        <p className="text-sm leading-relaxed text-slate-300">{step.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                    style={{ left: 0 }}
                    animate={{ x: ['0%', '690%'] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: i * 0.9 }}
                  />
                ))}
              </div>

              {/* Mobile version */}
              <div className="space-y-3 md:hidden">
                {effitoSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-white/[0.08] to-transparent"
                      animate={{ x: ['-20%', '450%'] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'linear', delay: i * 0.25 }}
                    />
                    <div className="relative flex items-start gap-3">
                      <motion.div
                        className="mt-1 h-3.5 w-3.5 rounded-full bg-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <div>
                        <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                          Step {i + 1}
                        </div>
                        <h4 className="mb-1 text-base font-medium text-white">{step.title}</h4>
                        <p className="text-sm text-slate-300">{step.note}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {moduleCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                >
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    {card.eyebrow}
                  </div>
                  <div className="mb-1 text-lg font-medium text-white">{card.title}</div>
                  <div className="mb-1 text-3xl font-serif tracking-tight text-white">{card.stat}</div>
                  <div className="text-sm text-slate-300">{card.meta}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-slate-200">
                  Structured intake pressure replaces drift with engineered continuity.
                </span>
                <span className="text-sm font-medium text-emerald-300">Infrastructure creates certainty.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400">
            Installed infrastructure, not another dashboard
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-slate-400">
            Orchestration layer
          </span>
        </div>
      </div>
    </motion.div>
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

      <div className="min-h-screen bg-[#FAF9F6]">
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto border-b border-stone-200 px-6 py-16 md:px-8 md:py-40">
          <div className="grid grid-cols-1 items-center gap-12 md:gap-20 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 md:mb-12 md:text-[11px]"
              >
                System Performance Monitor
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 text-[3rem] leading-[0.95] tracking-tighter text-slate-900 sm:text-[4rem] md:mb-16 md:text-[7rem] md:leading-[0.9] font-serif"
              >
                Quantifying <br className="hidden md:block" />
                <span className="italic">Certainty.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl text-lg leading-[1.6] text-slate-600 sm:text-xl md:text-2xl font-light"
              >
                Performance is not a projection. It is the direct output of your infrastructure. We replace the
                volatility of manual processes with engineered consistency.
              </motion.p>
            </div>

            <div className="flex items-center justify-center lg:col-span-6">
              <InfrastructureHeroAnimation />
            </div>
          </div>
        </section>

        {/* Output Matrix Section */}
        <section className="bg-white px-6 py-24 md:px-8 md:py-40">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 grid grid-cols-1 items-start gap-16 md:gap-24 lg:grid-cols-2">
              <div>
                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
                  Dashboards №1: Response Velocity
                </span>
                <h2 className="mb-8 text-4xl leading-tight tracking-tight text-slate-900 md:text-6xl font-serif">
                  Eliminating Operational <span className="italic">Friction.</span>
                </h2>
                <p className="mb-12 text-lg font-light leading-relaxed text-slate-600">
                  In the modern care market, the &quot;Response Gap&quot; is where profit goes to die. Manual legacy
                  systems allow enquiries to drift for hours, resulting in an 85% loss of high intent private leads.
                </p>

                <div className="space-y-6">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-8">
                    <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400">
                      Response Speed
                    </span>
                    <div className="mb-2 text-5xl tracking-tight text-slate-900 md:text-6xl font-serif">
                      30 Seconds
                    </div>
                    <span className="text-sm font-light text-slate-500">Effito Average</span>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-8">
                    <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400">
                      Lead Retention
                    </span>
                    <div className="mb-2 text-5xl tracking-tight text-emerald-900 md:text-6xl font-serif">+620%</div>
                    <span className="text-sm font-light text-slate-500">Vs. Manual Handling</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-xl md:p-10">
                <div className="mb-8">
                  <span className="mb-6 block text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400">
                    ● Output Matrix: Lead Capture Efficiency
                  </span>
                </div>

                <div className="mb-8">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">
                      Legacy
                      <br />
                      (Manual)
                    </span>
                    <span className="text-xs text-slate-400">15% conversion</span>
                  </div>
                  <div className="h-12 overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '15%' }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex h-full items-center justify-end bg-stone-300 pr-3"
                    >
                      <span className="text-xs font-mono text-slate-700">15%</span>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">
                      Effito
                      <br />
                      (Infrastructure)
                    </span>
                    <span className="text-xs text-emerald-700">98% conversion</span>
                  </div>
                  <div className="h-12 overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex h-full items-center justify-end bg-slate-900 pr-3"
                    >
                      <span className="text-xs font-mono text-white">98%</span>
                    </motion.div>
                  </div>
                </div>

                <p className="mt-6 text-xs font-light italic text-slate-500">
                  Based on typical 40-bed home receiving 20 monthly enquiries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stabilization Curve Section */}
        <section className="bg-[#FAF9F6] px-6 py-24 md:px-8 md:py-40">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20">
              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
                Dashboards №2: Bed Fill Optimization
              </span>
              <h2 className="mb-8 text-4xl leading-tight tracking-tight text-slate-900 md:text-6xl font-serif">
                The Stabilization <span className="italic">Curve.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-lg md:p-12">
                  <p className="mb-8 text-sm font-light text-slate-600">
                    Manual homes suffer from &quot;Capacity Volatility&quot; — a cycle of move ins followed by sudden
                    vacancies and slow refills. Effito creates a continuous intake pressure that maintains peak
                    occupancy.
                  </p>

                  <div className="relative h-[400px] md:h-[500px]">
                    <svg viewBox="0 0 800 400" className="h-full w-full">
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

              <div className="space-y-8 lg:col-span-4">
                <div className="rounded-xl border border-stone-200 bg-white p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
                    <span className="text-sm text-white">●</span>
                  </div>
                  <h3 className="mb-3 text-xl text-slate-900 font-serif">Institutional Flow</h3>
                  <p className="text-sm font-light leading-relaxed text-slate-600">
                    By treating the intake process as a high speed pipeline, we remove the reliance on the
                    &quot;availability&quot; of a human manager to secure a booking.
                  </p>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
                    <span className="text-sm text-white">●</span>
                  </div>
                  <h3 className="mb-3 text-xl text-slate-900 font-serif">Agency Elimination</h3>
                  <p className="text-sm font-light leading-relaxed text-slate-600">
                    The speed of the recruitment engine captures top tier talent before they drift to agencies,
                    slashing your monthly markup expenditure by up to 85%.
                  </p>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
                    <span className="text-sm text-white">●</span>
                  </div>
                  <h3 className="mb-3 text-xl text-slate-900 font-serif">Operational Peace</h3>
                  <p className="text-sm font-light leading-relaxed text-slate-600">
                    Automating 96% of routine staff communications allows your clinical team to focus purely on care
                    standards and CQC compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="max-w-4xl mx-auto px-6 py-32 text-center md:px-8 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-10 text-4xl leading-tight tracking-tight text-slate-900 md:text-6xl font-serif">
              Certainty is not a forecast. <br className="hidden md:block" />
              It is <span className="italic">infrastructure.</span>
            </h2>
            <p className="mx-auto mb-14 max-w-2xl text-lg font-light leading-[1.7] text-slate-500 md:text-xl">
              These metrics are not aspirational targets. They are the measured, repeatable output of systematic
              infrastructure working exactly as designed.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-slate-900 px-14 py-7 text-[11px] font-bold uppercase tracking-[0.45em] text-white shadow-2xl transition-all duration-300 hover:bg-slate-800"
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
