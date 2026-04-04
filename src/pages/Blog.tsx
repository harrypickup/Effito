import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  issue: string;
  featured?: boolean;
  tag?: string;
}

// ─── Blog Data ────────────────────────────────────────────────────────────────
const articles: Article[] = [
  {
    slug: 'why-care-homes-lose-residents-slow-enquiry-response',
    category: 'Occupancy',
    title: 'Why Care Homes Lose Residents Before They Even Call Back',
    excerpt:
      'The average care home takes 6–24 hours to respond to an enquiry. By then, the family has already toured three competitors. Here is the operational fix.',
    readTime: '6 min',
    date: 'March 2025',
    issue: '001',
    featured: true,
    tag: 'Most Read',
  },
  {
    slug: 'agency-nursing-costs-how-to-eliminate-them',
    category: 'Recruitment',
    title: 'Agency Nursing Fees Are Destroying Your Margin — Here Is How to Stop It',
    excerpt:
      'UK care homes spent over £2.5 billion on agency staff in 2024. The homes breaking this cycle share one thing in common: a permanent, automated talent pipeline.',
    readTime: '8 min',
    date: 'March 2025',
    issue: '002',
    featured: true,
    tag: "Editor's Pick",
  },
  {
    slug: 'care-home-automation-guide-2025',
    category: 'Operations',
    title: 'The Complete Guide to Care Home Operations in 2025',
    excerpt:
      'From enquiry handling to staff onboarding — a structured breakdown of every process care home operators can streamline today without adding headcount.',
    readTime: '12 min',
    date: 'February 2025',
    issue: '003',
    featured: true,
  },
  {
    slug: 'cqc-compliance-automation-staff-policies',
    category: 'Compliance',
    title: 'How Instant Policy Access Keeps Your CQC Rating Intact',
    excerpt:
      'When staff can access the right SOP in under 10 seconds — without interrupting the manager — compliance incidents drop significantly.',
    readTime: '5 min',
    date: 'February 2025',
    issue: '004',
  },
  {
    slug: 'care-home-occupancy-optimisation',
    category: 'Occupancy',
    title: 'The Occupancy Optimisation Playbook for Independent Care Homes',
    excerpt:
      'Full occupancy is not luck — it is a system. This playbook outlines the exact infrastructure independent operators use to maintain 97%+ bed fill consistently.',
    readTime: '9 min',
    date: 'January 2025',
    issue: '005',
  },
  {
    slug: 'staff-retention-care-homes-2025',
    category: 'Retention',
    title: 'Why Your Best Care Staff Are Leaving — And How to Keep Them',
    excerpt:
      'Turnover in residential care averages 34% annually. The cost is catastrophic. The solution is not pay rises — it is removing the friction that burns people out.',
    readTime: '7 min',
    date: 'January 2025',
    issue: '006',
  },
  {
    slug: 'enquiry-response-time-care-home-benchmark',
    category: 'Occupancy',
    title: 'Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring',
    excerpt:
      'Speed-to-respond is now the single biggest determinant of bed conversion. We analysed 400+ enquiries to build the definitive UK benchmark.',
    readTime: '6 min',
    date: 'December 2024',
    issue: '007',
  },
  {
    slug: 'care-home-recruitment-pipeline-build',
    category: 'Recruitment',
    title: 'Build a Recruitment Pipeline That Runs Without You',
    excerpt:
      'A permanent talent pipeline means you never call an agency in a crisis again. Here is exactly how to architect one — and what most operators get wrong.',
    readTime: '10 min',
    date: 'December 2024',
    issue: '008',
  },
  {
    slug: 'operational-admin-time-care-home-directors',
    category: 'Operations',
    title: '30 Hours a Week: The Hidden Admin Tax on Care Home Directors',
    excerpt:
      'Most senior managers spend 70% of their time on tasks that could be delegated or systematised. This is what that time looks like — and what happens when you get it back.',
    readTime: '5 min',
    date: 'November 2024',
    issue: '009',
  },
];

const categories = ['All', 'Occupancy', 'Recruitment', 'Retention', 'Operations', 'Compliance'];

const categoryAccents: Record<string, string> = {
  Occupancy: '#059669',
  Recruitment: '#2563eb',
  Retention: '#d97706',
  Operations: '#64748b',
  Compliance: '#e11d48',
};

// ─── Hero Feature (largest article) ──────────────────────────────────────────
const HeroArticle: React.FC<{ article: Article }> = ({ article }) => (
  <Link to={`/blog/${article.slug}`} className="group block">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px]">
      {/* Left — dark panel */}
      <div className="bg-slate-900 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Large issue number watermark */}
        <span
          className="absolute -bottom-6 -left-4 text-[160px] md:text-[220px] font-serif text-white opacity-[0.04] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          {article.issue}
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: categoryAccents[article.category] ?? '#64748b' }}
            />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">
              {article.category}
            </span>
            {article.tag && (
              <>
                <span className="text-slate-700">·</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  {article.tag}
                </span>
              </>
            )}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.1] mb-8 group-hover:opacity-80 transition-opacity">
            {article.title}
          </h2>

          <p className="text-slate-400 text-base font-light leading-relaxed max-w-md">
            {article.excerpt}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between mt-10 pt-8 border-t border-slate-800">
          <div className="flex items-center gap-5">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{article.date}</span>
            <span className="text-slate-700">·</span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{article.readTime} read</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white group-hover:translate-x-1.5 transition-transform duration-300 inline-block">
            Read →
          </span>
        </div>
      </div>

      {/* Right — warm panel with large number */}
      <div className="bg-[#FAF9F6] p-10 md:p-16 flex flex-col justify-center items-center relative overflow-hidden border border-stone-200 border-l-0">
        <span
          className="text-[200px] md:text-[280px] font-serif text-slate-900 opacity-[0.06] leading-none select-none pointer-events-none absolute"
          aria-hidden="true"
        >
          {article.issue}
        </span>
        <div className="relative z-10 text-center">
          <div
            className="w-px mx-auto mb-6 transition-all duration-700 group-hover:h-24"
            style={{
              height: '48px',
              backgroundColor: categoryAccents[article.category] ?? '#1E1E2A',
            }}
          />
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 block">
            No. {article.issue}
          </span>
        </div>
      </div>
    </div>
  </Link>
);

// ─── Secondary Feature Card ───────────────────────────────────────────────────
const SecondaryCard: React.FC<{ article: Article; index: number }> = ({ article, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link to={`/blog/${article.slug}`} className="group block h-full bg-[#FAF9F6] border border-stone-200 hover:border-stone-400 transition-all duration-300 p-8 md:p-10 relative overflow-hidden">
      {/* Coloured left border accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: categoryAccents[article.category] ?? '#1E1E2A' }}
      />

      <div className="flex items-start justify-between gap-4 mb-6">
        <span
          className="text-[9px] font-bold uppercase tracking-[0.4em] flex items-center gap-2"
          style={{ color: categoryAccents[article.category] ?? '#64748b' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: categoryAccents[article.category] ?? '#64748b' }}
          />
          {article.category}
        </span>
        <span className="text-[10px] font-mono text-stone-300 shrink-0">No. {article.issue}</span>
      </div>

      <h3 className="text-lg md:text-xl font-serif text-slate-900 tracking-tight leading-[1.2] mb-4 group-hover:text-slate-600 transition-colors">
        {article.title}
      </h3>

      <p className="text-sm text-slate-500 font-light leading-relaxed mb-8 line-clamp-2">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{article.readTime} read</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-900 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
      </div>
    </Link>
  </motion.div>
);

// ─── Archive Row ──────────────────────────────────────────────────────────────
const ArchiveRow: React.FC<{ article: Article; index: number }> = ({ article, index }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    viewport={{ once: true }}
    className="group"
  >
    <Link
      to={`/blog/${article.slug}`}
      className="flex items-center gap-6 md:gap-10 py-6 border-b border-stone-200 hover:bg-stone-50 transition-colors px-2 -mx-2"
    >
      {/* Issue number */}
      <span className="text-[11px] font-mono text-stone-300 shrink-0 w-8 tabular-nums">{article.issue}</span>

      {/* Category dot */}
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: categoryAccents[article.category] ?? '#64748b' }}
      />

      {/* Title */}
      <h3 className="flex-1 text-sm md:text-base font-serif text-slate-800 tracking-tight leading-tight group-hover:text-slate-500 transition-colors">
        {article.title}
      </h3>

      {/* Meta */}
      <div className="hidden md:flex items-center gap-6 shrink-0">
        <span
          className="text-[9px] font-bold uppercase tracking-[0.35em]"
          style={{ color: categoryAccents[article.category] ?? '#64748b' }}
        >
          {article.category}
        </span>
        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest w-16 text-right">{article.readTime}</span>
      </div>

      <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-200 shrink-0">→</span>
    </Link>
  </motion.div>
);

// ─── Blog V2 Page ─────────────────────────────────────────────────────────────
const BlogV2: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const heroArticle = articles[0];
  const secondaryArticles = articles.filter((a) => a.featured && a.slug !== heroArticle.slug);
  const archiveArticles =
    activeCategory === 'All'
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Insights for Care Home Owners & Operators | Effito Blog</title>
        <meta
          name="description"
          content="Practical insights for UK care home owners and operators on occupancy, recruitment, staff retention, CQC compliance, and running a more efficient care home. Published by Effito."
        />
        <meta
          name="keywords"
          content="care home owners, care home operators, care home management UK, residential care home insights, care home occupancy, care home recruitment, staff retention care homes, CQC compliance"
        />
        <link rel="canonical" href="https://www.effito.com/blog" />
        <meta property="og:title" content="Insights for Care Home Owners & Operators | Effito" />
        <meta property="og:description" content="Practical insights for UK care home owners and operators on occupancy, recruitment, staff retention, and CQC compliance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.effito.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights for Care Home Owners & Operators | Effito" />
        <meta name="twitter:description" content="Practical insights for UK care home owners and operators." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Effito Blog",
            "description": "Insights for care home owners and operators on occupancy, recruitment, staff retention, and efficient operations.",
            "url": "https://www.effito.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Effito",
              "url": "https://www.effito.com"
            }
          }
        `}</script>
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">

        {/* ── Masthead ── */}
        <section className="px-6 md:px-8 pt-14 md:pt-20 pb-10 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b-2 border-slate-900"
          >
            <div>
              {/* SEO h1 */}
              <h1 className="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-3">
                Insights for Care Home Owners &amp; Operators
              </h1>
              {/* Display name */}
              <p className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-none">
                The Effito <span className="italic">Review</span>
              </p>
            </div>

            <div className="flex items-end gap-8 md:gap-12 pb-1">
              <div className="text-right">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-stone-400 block mb-1">Articles</span>
                <span className="text-2xl font-serif text-slate-900">009</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-stone-400 block mb-1">Topics</span>
                <span className="text-2xl font-serif text-slate-900">Five</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-stone-400 block mb-1">For</span>
                <span className="text-2xl font-serif text-slate-900">Owners</span>
              </div>
            </div>
          </motion.div>

          {/* Category nav strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-0 pt-0 overflow-x-auto"
          >
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-200 border-r border-stone-200 last:border-r-0 ${
                  activeCategory === cat
                    ? 'text-slate-900'
                    : 'text-stone-400 hover:text-slate-700'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="categoryUnderline"
                    className="h-[2px] bg-slate-900 mt-2 -mb-[1px]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </section>

        {/* ── Hero Article ── */}
        <section className="px-6 md:px-8 pb-0 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroArticle article={heroArticle} />
          </motion.div>
        </section>

        {/* ── Secondary Features ── */}
        <section className="px-6 md:px-8 py-0 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-b border-stone-200">
            {secondaryArticles.map((article, i) => (
              <div key={article.slug} className={i === 1 ? 'border-l border-stone-200' : ''}>
                <SecondaryCard article={article} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Archive ── */}
        <section className="px-6 md:px-8 pt-16 md:pt-24 pb-24 md:pb-40 max-w-[1400px] mx-auto">

          <div className="flex items-center gap-6 mb-10 border-b border-stone-200 pb-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400">
              {activeCategory === 'All' ? 'Full Archive' : activeCategory}
            </span>
            <span className="text-[9px] font-mono text-stone-300">
              — {activeCategory === 'All'
                  ? articles.filter(a => !a.featured).length
                  : articles.filter(a => a.category === activeCategory).length} articles
            </span>
          </div>

          {archiveArticles.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-stone-400 font-light text-sm">No articles in this category yet.</p>
            </div>
          ) : (
            <div>
              {archiveArticles.map((article, i) => (
                <ArchiveRow key={article.slug} article={article} index={i} />
              ))}
            </div>
          )}
        </section>

        {/* ── Divider stat bar ── */}
        <section className="border-t border-b border-stone-200 bg-slate-900 py-10 px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { value: '< 30s', label: 'Enquiry Response' },
              { value: '85%', label: 'Agency Cost Reduction' },
              { value: '30hrs', label: 'Weekly Time Recovered' },
              { value: '97%+', label: 'Bed Occupancy Target' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`px-6 md:px-10 py-6 md:py-8 text-center ${i > 0 ? 'border-l border-slate-800' : ''}`}
              >
                <div className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-1">{stat.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 md:px-8 py-24 md:py-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-8">
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 block mb-8">
                From the pages to the practice
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">
                Every article points<br />
                to one <span className="italic">conclusion.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <p className="text-slate-500 font-light text-base leading-relaxed mb-4">
                Manual operations cost care homes residents, revenue, and the best staff. We install the systems that end that — permanently.
              </p>
              <Link
                to="/contact"
                className="w-full text-center inline-block bg-slate-900 text-white px-10 py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all shadow-xl"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/performance"
                className="w-full text-center inline-block border border-stone-300 text-stone-500 px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-semibold hover:border-slate-400 hover:text-slate-700 transition-all"
              >
                View Performance Data
              </Link>
            </div>
          </div>

          {/* Bottom topic index */}
          <div className="mt-20 pt-12 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { heading: 'Occupancy', links: ['Enquiry Response', 'Bed Fill Optimisation', 'Tour Booking Systems'] },
              { heading: 'Recruitment', links: ['Agency Fee Elimination', 'Automated Screening', 'Talent Pipeline Build'] },
              { heading: 'Retention', links: ['Staff Burnout Prevention', 'SOP Access Systems', 'Onboarding Automation'] },
              { heading: 'Operations', links: ['CQC Compliance', 'Admin Time Recovery', 'Performance Dashboards'] },
            ].map((col, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: Object.values(categoryAccents)[i] }}
                  />
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">{col.heading}</span>
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-xs text-slate-500 font-light hover:text-slate-800 cursor-pointer transition-colors leading-relaxed block">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default BlogV2;
