import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// ─── Colour tokens ────────────────────────────────────────────────────────────
const C = {
  bg: '#FFFFFF',
  grid: '#F0EDE8',
  dim: '#C8C4BC',
  mid: '#94918C',
  ink: '#1E1E2A',
  accent: '#0f172a',
  danger: '#DC2626',
  emerald: '#059669',
};

// ─── GrowthNode ───────────────────────────────────────────────────────────────
const GrowthNode: React.FC = () => (
  <div className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-slate-400" />
  </div>
);

// ─── InfrastructureArch ───────────────────────────────────────────────────────
const InfrastructureArch: React.FC = () => {
  const manualPath = 'M 64 126 C 120 126, 150 126, 206 126 C 250 126, 290 126, 338 126';
  const effitoPath = 'M 400 270 C 470 270, 520 270, 590 270 C 640 270, 670 270, 708 270';

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 740 480"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto' }}
        role="img"
        aria-label="Diagram comparing manual care home operations with Effito infrastructure"
      >
        <defs>
          <pattern id="archGrid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke={C.grid} strokeWidth="0.6" />
          </pattern>

          <linearGradient id="fadeManual" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D6D3D1" />
            <stop offset="100%" stopColor="#C8C4BC" />
          </linearGradient>

          <linearGradient id="fadeEffito" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="effitoFrameClip">
            <rect x="390" y="62" width="320" height="300" rx="2" />
          </clipPath>
        </defs>

        <rect width="740" height="480" fill={C.bg} />
        <rect width="740" height="480" fill="url(#archGrid)" />

        {/* Top labels */}
        <text
          x="28"
          y="28"
          fontSize="9"
          fill={C.mid}
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="3"
          fontWeight="700"
        >
          REACTIVE PROCESS
        </text>

        <text
          x="706"
          y="28"
          fontSize="9"
          fill={C.emerald}
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="2.5"
          fontWeight="700"
          textAnchor="end"
        >
          OPTIMIZED ENGINE
        </text>

        {/* Manual / old way */}
        <g>
          <text
            x="64"
            y="86"
            fontSize="8"
            fill={C.mid}
            fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="2.5"
            fontWeight="700"
          >
            OLD WAY
          </text>

          <motion.path
            d={manualPath}
            fill="none"
            stroke="url(#fadeManual)"
            strokeWidth="2.2"
            strokeDasharray="7 7"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />

          {/* moving weak signal */}
          <motion.circle
            r="4"
            fill="#B9B4AE"
            opacity="0.9"
            filter="url(#softGlow)"
            animate={{ offsetDistance: ['0%', '100%'] }}
            transition={{ duration: 4.6, ease: 'linear', repeat: Infinity }}
            style={{
              offsetPath: `path("${manualPath}")`,
              offsetRotate: '0deg',
            }}
          />

          {/* nodes */}
          {[
            { x: 64, label: 'Enquiry' },
            { x: 154, label: 'Inbox' },
            { x: 246, label: 'Manager' },
            { x: 338, label: 'Lost lead' },
          ].map((node, i) => (
            <g key={node.label}>
              <circle cx={node.x} cy={126} r="8" fill={C.bg} stroke={C.dim} strokeWidth="1.5" />
              <circle cx={node.x} cy={126} r="2.5" fill={i === 3 ? C.danger : C.dim} />
              <text
                x={node.x}
                y={154}
                fontSize="10"
                fill={i === 3 ? C.danger : C.mid}
                textAnchor="middle"
                fontFamily="'Helvetica Neue', sans-serif"
              >
                {node.label}
              </text>
            </g>
          ))}

          {/* issue labels */}
          <text
            x="154"
            y="108"
            fontSize="9"
            fill={C.mid}
            textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif"
          >
            unread
          </text>
          <text
            x="246"
            y="108"
            fontSize="9"
            fill={C.danger}
            textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif"
          >
            4–24 hrs
          </text>
          <text
            x="338"
            y="108"
            fontSize="9"
            fill={C.danger}
            textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif"
          >
            leakage
          </text>

          {/* small manual volatility line */}
          <motion.path
            d="M 64 188 Q 120 200 174 188 T 286 188 T 338 188"
            fill="none"
            stroke={C.dim}
            strokeWidth="1.4"
            strokeDasharray="3 5"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.3 }}
          />
          <text
            x="200"
            y="212"
            fontSize="9"
            fill={C.mid}
            textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="2"
          >
            MANUAL VOLATILITY
          </text>
        </g>

        {/* Divider */}
        <g>
          <line x1="370" y1="48" x2="370" y2="430" stroke={C.grid} strokeWidth="1.4" />
          <text
            x="370"
            y="240"
            fontSize="9"
            fill={C.mid}
            textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="3"
            fontWeight="700"
            transform="rotate(-90 370 240)"
          >
            SYSTEM UPGRADE
          </text>
        </g>

        {/* Effito side */}
        <g>
          <circle cx="402" cy="28" r="4" fill={C.accent} />
          <text
            x="414"
            y="31"
            fontSize="9"
            fill={C.accent}
            fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="3"
            fontWeight="700"
          >
            EFFITO™ INFRASTRUCTURE
          </text>

          {/* outer frame */}
          <rect x="390" y="62" width="320" height="300" fill="none" stroke={C.accent} strokeWidth="1.5" />
          <line x1="390" y1="94" x2="710" y2="94" stroke={C.accent} strokeWidth="1.5" />

          {/* top rail glow sweep */}
          <g clipPath="url(#effitoFrameClip)">
            <motion.rect
              x="390"
              y="94"
              width="72"
              height="268"
              fill="rgba(15,23,42,0.045)"
              animate={{ x: [390, 638, 390] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>

          <text
            x="414"
            y="84"
            fontSize="8"
            fill={C.mid}
            fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="2.5"
            fontWeight="700"
          >
            CONTROLLED FLOW
          </text>

          {/* main rail */}
          <line x1="400" y1="270" x2="708" y2="270" stroke="url(#fadeEffito)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="400" cy="270" r="7" fill={C.accent} />
          <circle cx="708" cy="270" r="7" fill={C.accent} />

          {/* moving signals */}
          {[0, 1.2, 2.4].map((delay, i) => (
            <motion.circle
              key={i}
              r="5"
              fill={C.emerald}
              filter="url(#softGlow)"
              animate={{ offsetDistance: ['0%', '100%'] }}
              transition={{ duration: 3.6, ease: 'linear', repeat: Infinity, delay }}
              style={{
                offsetPath: `path("${effitoPath}")`,
                offsetRotate: '0deg',
              }}
            />
          ))}

          {/* checkpoints */}
          {[
            { x: 456, title: 'Instant triage', sub: 'Growth' },
            { x: 554, title: 'Auto qualify', sub: 'Talent' },
            { x: 652, title: 'Capture lock', sub: 'Intelligence' },
          ].map((node, i) => (
            <g key={node.title}>
              <motion.circle
                cx={node.x}
                cy={270}
                r="8"
                fill={C.accent}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
              />
              <motion.circle
                cx={node.x}
                cy={270}
                r="18"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1"
                animate={{ opacity: [0, 0.45, 0], scale: [0.75, 1.15, 1.45] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
              />
              <text
                x={node.x}
                y={246}
                fontSize="10"
                fill={C.accent}
                textAnchor="middle"
                fontFamily="'Helvetica Neue', sans-serif"
                fontWeight="700"
              >
                {node.title}
              </text>
              <text
                x={node.x}
                y={330}
                fontSize="9"
                fill={C.mid}
                textAnchor="middle"
                fontFamily="'Helvetica Neue', sans-serif"
                letterSpacing="1.5"
              >
                {node.sub}
              </text>
            </g>
          ))}

          {/* modules strip */}
          <line x1="390" y1="362" x2="710" y2="362" stroke={C.accent} strokeWidth="1.5" />
          <line x1="496" y1="362" x2="496" y2="414" stroke={C.grid} strokeWidth="1.2" />
          <line x1="602" y1="362" x2="602" y2="414" stroke={C.grid} strokeWidth="1.2" />

          {[
            { x: 443, title: 'MODULE 1', label: 'Growth' },
            { x: 549, title: 'MODULE 2', label: 'Talent' },
            { x: 655, title: 'MODULE 3', label: 'Intelligence' },
          ].map((m) => (
            <g key={m.title}>
              <text
                x={m.x}
                y={385}
                fontSize="8"
                fill={C.mid}
                textAnchor="middle"
                fontFamily="'Helvetica Neue', sans-serif"
                letterSpacing="2"
                fontWeight="700"
              >
                {m.title}
              </text>
              <text
                x={m.x}
                y={406}
                fontSize="15"
                fill={C.ink}
                textAnchor="middle"
                fontFamily="Georgia, serif"
              >
                {m.label}
              </text>
            </g>
          ))}

          {/* footer metrics strip */}
          <rect x="390" y="424" width="320" height="42" fill={C.accent} />
          <line x1="497" y1="430" x2="497" y2="460" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="603" y1="430" x2="603" y2="460" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

          {[
            { x: 443, v: '30s', label: 'RESPONSE' },
            { x: 550, v: '98%', label: 'CONVERSION' },
            { x: 656, v: '−85%', label: 'AGENCY COST' },
          ].map((m) => (
            <g key={m.label}>
              <text
                x={m.x}
                y={442}
                fontSize="15"
                fill="white"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontStyle="italic"
              >
                {m.v}
              </text>
              <text
                x={m.x}
                y={458}
                fontSize="7"
                fill="rgba(255,255,255,0.62)"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', sans-serif"
                letterSpacing="2"
                fontWeight="700"
              >
                {m.label}
              </text>
            </g>
          ))}
        </g>

        {/* legend */}
        <g>
          <line x1="28" y1="432" x2="58" y2="432" stroke={C.dim} strokeWidth="1.5" strokeDasharray="6 5" />
          <text x="66" y="436" fontSize="8.5" fill={C.mid} fontFamily="'Helvetica Neue', sans-serif">
            Manual process
          </text>

          <line x1="28" y1="452" x2="58" y2="452" stroke={C.accent} strokeWidth="2" />
          <circle cx="43" cy="452" r="3" fill={C.emerald} />
          <text
            x="66"
            y="456"
            fontSize="8.5"
            fill={C.accent}
            fontFamily="'Helvetica Neue', sans-serif"
            fontWeight="700"
          >
            Effito trajectory
          </text>
        </g>
      </svg>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Infrastructure Page
// ─────────────────────────────────────────────────────────────────────────────
const Infrastructure: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Infrastructure | Effito Care Home Automation Systems</title>
        <meta
          name="description"
          content="Discover Effito's three pillar infrastructure: occupancy automation, recruitment engine, and staff oracle. Purpose built for residential care operations."
        />
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Hero / Introduction Section */}
        <section className="px-6 md:px-8 py-16 md:py-32 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-6 md:mb-8 block">
                The Architecture
              </span>
              <h1 className="text-4xl md:text-[7rem] font-serif text-slate-900 mb-8 md:mb-10 leading-[1.1] tracking-tighter">
                A Permanent <br className="hidden md:block" />
                Operational <span className="italic">Upgrade.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-16 leading-relaxed font-light">
                Effito is not software you &quot;use.&quot; It is an infrastructure we install. A collection of resilient
                systems that manage the growth and human capital of your care home automatically.
              </p>
              <div className="space-y-10 md:space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Autonomous Engagement',
                    body: 'Enquiries are handled within seconds with professional accuracy, ensuring your home is always the first to respond.',
                  },
                  {
                    step: '02',
                    title: 'Resilient Workflows',
                    body: 'Processes that do not rely on staff availability. Your growth infrastructure is always active, 24/7.',
                  },
                  {
                    step: '03',
                    title: 'Institutional Quality',
                    body: 'Consistency across every interaction, reflecting the high standards of care you provide internally.',
                  },
                ].map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={i}
                    className="flex gap-6 md:gap-10"
                  >
                    <span className="text-sm font-bold text-slate-300 font-mono mt-1">{item.step}</span>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 md:mb-3 uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:sticky lg:top-32">
              <div className="relative p-1 bg-white border border-stone-200 rounded-sm shadow-sm group">
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-slate-900 text-white text-[9px] md:text-[10px] px-2 md:px-3 py-1 uppercase tracking-widest font-bold z-10">
                  Blueprint v3.1
                </div>
                <div className="overflow-x-auto">
                  <div className="min-w-[500px] md:min-w-0">
                    <InfrastructureArch />
                  </div>
                </div>
                <div className="mt-6 md:mt-8 grid grid-cols-3 gap-px bg-stone-200">
                  {['Growth', 'Talent', 'Intelligence'].map((label, i) => (
                    <div key={i} className="bg-white p-4 md:p-6 text-center">
                      <span className="block text-[8px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">
                        Module {i + 1}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-slate-900">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 01: Occupancy Engine */}
        <section className="relative overflow-hidden bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">
                  System Component 01
                </span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">
                  The Occupancy <br className="hidden md:block" />
                  <span className="italic">Engine.</span>
                </h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                An institutional grade sales infrastructure that converts interest into occupancy without human
                intervention.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-stone-50 border border-stone-200 p-6 md:p-8 rounded-sm">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-2 h-2 bg-stone-300 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">
                      Current State: The Leaky Bucket
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-4 md:mb-6">Passive Intake Failure</h3>
                  <div className="space-y-5 md:space-y-6">
                    {[
                      { label: 'The Capture', text: 'Generic info@ email inbox check. Delayed and unmonitored.' },
                      {
                        label: 'The Process',
                        text: 'Manager checks when spare moments allow - often 4 to 24hrs later.',
                      },
                      {
                        label: 'The Follow up',
                        text: 'Manual phone call. One or two attempts, then lead is abandoned.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="border-b border-stone-200 pb-4 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
                          {item.label}
                        </span>
                        <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-stone-200">
                    <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">
                      Economic Impact
                    </span>
                    <p className="text-xs md:text-sm text-slate-400 italic font-light">
                      &quot;Losing one private pay resident due to a slow response costs the home £75,000 to £100,000 in
                      annual lost fees.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="mb-12 md:mb-20">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 md:mb-8 leading-tight">
                    From a digital &quot;Black Hole&quot; <br className="hidden md:block" />
                    to a <span className="italic">High Speed Pipeline.</span>
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                    We don&apos;t sell AI chatbots. We install instant response infrastructure. When a family reaches
                    out, silence is replaced by an empathy driven, professional capture system that secures the &quot;Speed
                    to Trust.&quot;
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                  {[
                    {
                      title: 'Instant Capture',
                      detail:
                        'Our systems monitor your website and Carehome.co.uk enquiries in real-time. The moment a family reaches out, the engine activates to ensure your home is the first to respond, 24/7.',
                    },
                    {
                      title: '30s AI Voice Call',
                      detail:
                        'Within 30 seconds of an enquiry, our system initiates a professional call to the family. This immediate touchpoint validates their needs and gathers essential details, ensuring your home is established as the primary solution.',
                    },
                    {
                      title: 'Elite Qualification',
                      detail:
                        'Strategic questioning regarding budget, timeline, and urgency. Identifying high intent private pay leads instantly.',
                    },
                    {
                      title: 'Calendar Integration',
                      detail:
                        'The system synchronizes with your team&apos;s real-time availability to secure tours and meetings directly into your master calendar, ensuring no opportunity is missed.',
                    },
                    {
                      title: 'Multi Channel Nurture',
                      detail:
                        'Automatic text and email follow ups with digital brochures and testimonials keep the family warm for 14 days.',
                    },
                    {
                      title: 'GHL CRM Sync',
                      detail:
                        'Full transcriptions of every conversation are logged. The manager walks into the tour knowing exactly what the family needs.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors">
                      <div className="mb-4 md:mb-6">
                        <GrowthNode />
                      </div>
                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-3 md:mb-4">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 02: Recruitment Engine */}
        <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">
                  System Component 02
                </span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">
                  The Recruitment <br className="hidden md:block" />
                  <span className="italic">Engine.</span>
                </h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                An aggressive, automated direct hire infrastructure designed to reduce agency dependency and stabilize
                your workforce.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-sm shadow-sm">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-2 h-2 bg-red-400/50 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">
                      Current State: The Vacancy Crisis
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-4 md:mb-6">
                    Fragmented Manual Process
                  </h3>
                  <div className="space-y-5 md:space-y-6">
                    {[
                      { label: 'The Post', text: 'Standard Indeed ad placement. Passive waiting for CVs.' },
                      {
                        label: 'The Delay',
                        text: 'CVs sit in inboxes for 3 to 5 days while managers cover clinical shifts.',
                      },
                      {
                        label: 'The Ghosting',
                        text: 'Good candidates are hired by faster competitors before you call.',
                      },
                      {
                        label: 'Compliance Gap',
                        text: 'DBS and Right to Work checks take weeks of manual email tag.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="border-b border-stone-100 pb-4 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                          {item.label}
                        </span>
                        <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-stone-200">
                    <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">
                      Economic impact
                    </span>
                    <div className="space-y-3">
                      <p className="text-xs md:text-sm text-slate-500 font-light">
                        <strong className="text-slate-900">Speed is Survival:</strong> Carer shelf life on Indeed is
                        &lt; 24 hours.
                      </p>
                      <p className="text-xs md:text-sm text-slate-500 font-light">
                        <strong className="text-slate-900">Agency Markups:</strong> Each vacant role costs £150 to
                        £300 extra daily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="mb-12 md:mb-20">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 md:mb-8 leading-tight">
                    Stop paying the 40% <br className="hidden md:block" />
                    <span className="italic">&quot;Impatience Tax&quot;</span> to agencies.
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                    By engaging every applicant within 60 seconds, we build your private staff bank, ensuring you
                    secure the best talent before an agency even sees the application.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                  {[
                    {
                      title: 'The Indeed Magnet',
                      detail:
                        'Real time sync with Indeed and LinkedIn. The second a Carer applies, the engine intercepts the data instantly.',
                    },
                    {
                      title: 'Instant Candidate Engagement',
                      detail:
                        'Our voice engine contacts every applicant within 2 minutes of their submission. By eliminating manual delays, the system secures top tier talent before they are engaged by competing homes or agencies.',
                    },
                    {
                      title: 'Compliance Triage',
                      detail:
                        'Secure your workforce without the manual sift. Our engine confirms mandatory deal breakers: Certification levels, RTW and shift availability before a manager ever spends time reviewing a CV.',
                    },
                    {
                      title: 'Candidate Scoring',
                      detail:
                        'Every screening call is scored against role requirements automatically. No more sifting through applications.',
                    },
                    {
                      title: 'Manager Dashboard',
                      detail:
                        'Every applicant, their score and their full screening transcript in one place. You decide who moves forward.',
                    },
                    {
                      title: 'Direct Hire Velocity',
                      detail:
                        'By operating in seconds rather than days, you “buy” staff for the cost of an ad rather than a £5,000 agency fee.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors">
                      <div className="mb-4 md:mb-6">
                        <GrowthNode />
                      </div>
                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-3 md:mb-4">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 03: Staff Oracle */}
        <section className="relative overflow-hidden bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">
                  System Component 03
                </span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">
                  The Staff <br className="hidden md:block" />
                  <span className="italic">Oracle.</span>
                </h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                A private, automated support layer that protects your workforce stability and prevents the manager
                level bottleneck.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-stone-50 border border-stone-200 p-6 md:p-8 rounded-sm">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-2 h-2 bg-stone-300 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">
                      Current State: The Support Vacuum
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-4 md:mb-6">
                    Manager Dependent Friction
                  </h3>
                  <div className="space-y-5 md:space-y-6">
                    {[
                      {
                        label: 'The Manual',
                        text: '200 page paper handbooks provided at induction but never referenced again.',
                      },
                      {
                        label: 'The Interruption',
                        text: 'Carers leave the floor to find a manager for routine policy FAQs, wasting 20 mins.',
                      },
                      {
                        label: 'The Silent Exit',
                        text: "Stressed staff don't complain; they ghost or resign when it's already too late.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="border-b border-stone-200 pb-4 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                          {item.label}
                        </span>
                        <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-stone-200">
                    <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">
                      The Churn Cost
                    </span>
                    <p className="text-xs md:text-sm text-slate-400 italic font-light">
                      &quot;Losing a single experienced carer costs £6,000. For a mid sized home, turnover at 30%
                      creates a silent £90,000 annual loss.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="mb-12 md:mb-20">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 md:mb-8 leading-tight">
                    Protect your <span className="italic">Managers</span> from administrative saturation.
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                    Replace manual policy lookups with systemic intelligence. The Oracle provides your workforce with
                    instant, compliant answers to routine questions, allowing your leadership to stay focused on high
                    level care.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                  {[
                    {
                      title: 'Digital Knowledge Core',
                      detail:
                        'Your 200 page handbook, CQC policies and SOPs are indexed into a high precision database for instant, compliant recall.',
                    },
                    {
                      title: 'WhatsApp Oracle Interface',
                      detail:
                        'Carers text the system directly for help with reporting, maintenance or procedures without leaving the floor.',
                    },
                    {
                      title: '3s Compliant Support',
                      detail:
                        'Eliminate guesswork on the floor. The system provides immediate, policy backed guidance for any staff query, ensuring every action taken is compliant with your latest SOPs and safety protocols.',
                    },
                    {
                      title: 'Manager Escalation Logic',
                      detail:
                        "If the Oracle doesn't know, it pings the manager directly to update the core, turning one question into a system wide upgrade.",
                    },
                    {
                      title: 'Moral Sentiment Tracking',
                      detail:
                        "The system identifies clusters of questions (e.g., 'payroll' or 'exhaustion') and alerts owners to potential morale issues.",
                    },
                    {
                      title: 'Retention Infrastructure',
                      detail:
                        'Eliminates the First 90 Day Friction. Staff feel supported and capable from day one, reducing silent churn significantly.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors">
                      <div className="mb-4 md:mb-6">
                        <GrowthNode />
                      </div>
                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-3 md:mb-4">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-slate-900 text-white py-20 md:py-32 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center tracking-tight">Built for Stability.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h4 className="text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] text-slate-500 mb-4 md:mb-6">
                  Structural Integrity
                </h4>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  Unlike marketing funnels that leak, Effito is built with closed loop logic. Every input (an enquiry,
                  an applicant, a staff query) has a predefined, automated outcome path.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] text-slate-500 mb-4 md:mb-6">
                  Bespoke Tailoring
                </h4>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  We don&apos;t use templates. We map your home&apos;s unique pricing, room availability, and care philosophy
                  into the system&apos;s logic core.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Infrastructure;
