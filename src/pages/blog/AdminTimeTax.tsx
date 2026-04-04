import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const relatedArticles = [
  {
    slug: 'care-home-automation-guide-2025',
    category: 'Operations',
    title: 'What Care Home Automation Actually Looks Like in 2026',
    readTime: '12 min read',
    date: 'April 2026',
  },
  {
    slug: 'staff-retention-care-homes-2025',
    category: 'Retention',
    title: 'Why Your Best Care Staff Are Leaving and How to Keep Them',
    readTime: '7 min read',
    date: 'February 2026',
  },
  {
    slug: 'care-home-recruitment-pipeline-build',
    category: 'Recruitment',
    title: 'Build a Recruitment Pipeline That Runs Without You',
    readTime: '10 min read',
    date: 'January 2026',
  },
];

const AdminTimeTax: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>30 Hours a Week: The Hidden Admin Tax on Care Home Managers | Effito Blog</title>
        <meta
          name="description"
          content="The most qualified, most experienced, hardest to replace person in your care home is spending most of their week on admin. Here is what that actually costs — and what happens when you give that time back."
        />
        <meta
          name="keywords"
          content="care home manager admin time, care home operations efficiency, care home management time wasted, care home manager workload UK, care home admin burden, residential care manager time, care home director productivity"
        />
        <link rel="canonical" href="https://www.effito.com/blog/operational-admin-time-care-home-directors" />
        <meta property="og:title" content="30 Hours a Week: The Hidden Admin Tax on Care Home Managers" />
        <meta property="og:description" content="The most qualified person in your care home is spending most of their week on admin. Here is what that costs — and what changes when you fix it." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.effito.com/blog/operational-admin-time-care-home-directors" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="30 Hours a Week: The Hidden Admin Tax on Care Home Managers" />
        <meta name="twitter:description" content="Your care home manager is spending 30+ hours a week on tasks a system could handle. Here is what that really costs you." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "30 Hours a Week: The Hidden Admin Tax on Care Home Managers",
            "description": "The most qualified, most experienced, hardest to replace person in your care home is spending most of their week on admin. Here is what that actually costs and what happens when you give that time back.",
            "datePublished": "2026-01-15",
            "dateModified": "2026-01-15",
            "author": {
              "@type": "Person",
              "name": "Reece Hubbard",
              "worksFor": {
                "@type": "Organization",
                "name": "Effito",
                "url": "https://www.effito.com"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Effito",
              "url": "https://www.effito.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.effito.com/blog/operational-admin-time-care-home-directors"
            },
            "keywords": "care home manager admin time, care home operations, care home management efficiency UK, care home director workload",
            "articleSection": "Operations"
          }
        `}</script>
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">

        {/* ── Article Header ── */}
        <section className="px-6 md:px-8 pt-14 md:pt-20 pb-0 max-w-[1400px] mx-auto">

          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-12 md:mb-16"
            aria-label="Breadcrumb"
          >
            <Link to="/blog" className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-400 hover:text-slate-900 transition-colors">
              Blog
            </Link>
            <span className="text-stone-300 text-[10px]">/</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-300">Operations</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-200 pb-12 md:pb-20">

            <div className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-sm">
                  Operations
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.05] mb-8"
              >
                30 Hours a Week: The Hidden Admin Tax on Care Home Managers
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
              >
                Your care home manager is the most qualified, most experienced, hardest to replace person in the building. And right now, a significant chunk of their week is being quietly eaten by tasks that have nothing to do with why you hired them.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 lg:pl-16 flex flex-col justify-between pt-10 lg:pt-0"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Published</span>
                  <span className="text-sm font-light text-slate-600">January 2026</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Reading Time</span>
                  <span className="text-sm font-light text-slate-600">5 minutes</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Written by</span>
                  <span className="text-sm font-light text-slate-600">Reece Hubbard</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Topic</span>
                  <span className="text-sm font-light text-slate-600">Operations & Management</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-slate-900 text-white px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
                >
                  Reclaim Your Time
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <section className="px-6 md:px-8 py-14 md:py-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200"
            >
              <div>

                {/* ── Opening ── */}
                <p className="text-lg md:text-xl text-slate-700 leading-[1.8] font-light mb-8">
                  I want you to think about why you hired your care home manager.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Not the job description. Not the person specification. Why, actually, does this role exist? What is it that only a highly experienced, registered, deeply knowledgeable care professional can do, that nobody and nothing else in the building can?
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  They provide clinical leadership. They maintain care standards. They build trust with residents and families. They make the difficult judgment calls that keep your home safe, your staff supported, and your CQC rating where it needs to be. They are, in the truest sense, the person your entire operation depends on.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Now I want you to think about what they actually spent their time on yesterday.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Because if your home runs like most homes across the UK, there is a significant gap between those two things. And that gap is costing you far more than you realise.
                </p>

                {/* Pull quote */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight italic leading-[1.3]">
                    "Think about why you hired your care home manager. Now think about what they actually spent their time on yesterday. There is a gap. And it is costing you."
                  </p>
                </div>

                {/* ── Section 2 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Numbers That Should Alarm You
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  A survey of 222 NHS and social care managers, conducted by the Florence app in 2023, found that 20% of managers were spending seven to eight hours a day on purely administrative tasks. Not care. Not clinical work. Not leadership. Admin.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Seven to eight hours. In a standard working day.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The same research found that rota scheduling alone accounts for 43% of total admin time. Nearly half of everything your manager spends on administrative work goes on deciding who works which shift. And beyond the rota, a further significant block goes on recruitment admin, enquiry handling, staff queries, and the endless paperwork that accumulates in a regulated environment.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is the line that tends to stop people in the room when I share it. In that same survey, 45% of managers said the admin burden was directly impacting the quality of care they could provide.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Not their job satisfaction. Not their work-life balance. The quality of care. The thing the whole operation exists to deliver. Nearly half of all care managers in that survey were telling researchers that the weight of admin was getting in the way of the care itself.
                </p>

                {/* Stat callout */}
                <div className="bg-slate-900 p-8 md:p-10 mb-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { stat: '45%', label: 'of care managers say admin burden is directly impacting the quality of care they provide' },
                      { stat: '43%', label: 'of all manager admin time goes on rota scheduling alone — before recruitment, enquiries, or staff queries' },
                      { stat: '30hrs', label: 'of senior management time recovered per week when operational systems handle the admin layer' },
                    ].map((item, i) => (
                      <div key={i} className={`${i > 0 ? 'md:border-l md:border-slate-800 md:pl-8' : ''}`}>
                        <div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2">{item.stat}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs font-light mt-6 pt-6 border-t border-slate-800">Source: Florence app survey, 222 NHS and social care managers, Sep 2023 (Nursing in Practice)</p>
                </div>

                {/* ── Section 3 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  A Day in the Life of a Manager Who Should Not Be Doing Any of This
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Let me paint a picture. Not an exaggerated one. A realistic, ordinary Tuesday in a typical independent care home.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The manager arrives and immediately opens three enquiry emails that came in after 5pm the previous day. One is from a family asking about availability for a residential placement. Another is a job application from someone who might be promising. The third is a supplier chasing an invoice. She responds to the first two, flags the third to the admin person, and notes that the enquiry response has already taken 40 minutes because she has to look up the current bed availability, draft something meaningful, and remember to add the right next steps.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  By 10am she is pulled onto the floor because two carers have called in sick and the morning medication round needs covering. The rota now has two gaps tomorrow as well. She spends 35 minutes calling around to find cover, texts three people, hears back from one, and resigns herself to calling the agency for the second gap.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  After lunch she has four staff questions waiting. One is about the home's procedure for dealing with a specific medication interaction. One is a new starter asking about shift patterns. One is a long-serving carer asking for clarification on the holiday accrual policy. One is from a night staff member from last night who left a note asking about a resident's personal care preference documentation.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  She handles all four. It takes an hour because the answers require finding the right documents, checking the right records, and giving each person a proper response. All four questions had answers that already existed somewhere in the home's documentation. She was the search engine.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  By 3pm she has not yet started the compliance report that is due this week, has not had the one-to-one with the senior carer she has been trying to arrange for two weeks, and has not returned a call from a family asking for an update on their mother's care plan.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  She leaves at 6:30pm. She is good at her job. She cares deeply about the home. She is also exhausted in a way that has nothing to do with care, and everything to do with administration.
                </p>

                {/* Pull quote 2 */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "She was the search engine for four policy questions. All four answers already existed somewhere in the home's documentation. She just had to find them. For an hour."
                  </p>
                </div>

                {/* ── Section 4 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What This Is Actually Costing Your Home
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  There is a financial way to look at this. If your manager costs the business £45,000 a year in salary, that works out to roughly £22 per hour. If they spend 30 hours a week on administrative tasks that could be handled by a system, that is £660 a week in senior management time being spent on things that do not require senior management.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Over 52 weeks, that is £34,320 worth of the most expensive, most qualified person in your building doing work that a well-built operational system could handle at a fraction of the cost.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  But the financial cost is almost a distraction from the deeper problem.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The real cost is everything your manager is not doing while they are doing admin. The family call that did not happen. The one-to-one that got pushed back again. The new starter who needed fifteen minutes with the manager in their first week to feel seen and settled, and did not get it. The early warning sign in a resident's care notes that would have been spotted on a leisurely walk through the home but was missed because the manager spent the afternoon in their office fielding questions that should never have reached them.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The cost of an overburdened manager is not just the salary you are misallocating. It is the invisible cost of everything the home is not getting because their attention is elsewhere.
                </p>

                {/* Cost breakdown box */}
                <div className="space-y-0 border border-stone-200 mb-14">
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">Where 30 hours of weekly management time actually goes</span>
                  </div>
                  {[
                    {
                      num: '01',
                      title: 'Rota scheduling and cover chasing',
                      body: 'The single biggest consumer of manager admin time. Calling around to fill gaps. Texting agency contacts. Rebuilding rotas that shift when someone calls in sick at 7am. It never ends because the underlying system never improves.',
                    },
                    {
                      num: '02',
                      title: 'Enquiry handling and tour coordination',
                      body: 'Responding to families, calling back missed enquiries, coordinating visit times, briefing the team before a tour arrives. All of it valuable. None of it requiring the manager to be the one doing it.',
                    },
                    {
                      num: '03',
                      title: 'Recruitment admin from first application to offer',
                      body: 'Reading applications, scheduling screening calls, conducting them, chasing references, booking interview slots. The average is 17.7 hours of admin per hire. This sits on the manager\'s plate in most homes.',
                    },
                    {
                      num: '04',
                      title: 'Routine staff policy and procedure questions',
                      body: 'What is the medication refusal protocol? What do I do in this situation? Where is the form for that? Questions with answers that already exist in documentation, routed to the manager because there is nowhere else to go.',
                    },
                    {
                      num: '05',
                      title: 'Compliance paperwork and documentation',
                      body: 'Recording, filing, chasing, updating. The regulatory burden in care is real and significant. But a large proportion of it is data entry and documentation that does not require clinical judgment.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 border-b border-stone-200 last:border-0 group hover:bg-stone-50 transition-colors">
                      <span className="text-[10px] font-mono text-stone-300 shrink-0 mt-1 group-hover:text-slate-400 transition-colors">{item.num}</span>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-light leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Section 5 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Manager Is Not the Problem
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is important and I want to be direct about it.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  If you are an owner reading this and thinking about your manager's workload, please do not walk away from this article thinking the solution is to find a more efficient manager or to ask them to manage their time better. That is not the problem and it is not the solution.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The manager in the story above is not failing. She is doing an enormous amount of genuinely necessary work in the only way the systems around her allow her to do it. The enquiries land in her inbox because there is no other system to catch them. The staff questions reach her because there is no other way for staff to get answers. The rota scheduling sits with her because nobody built anything to help.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  She is not inefficient. She is under-supported. And the difference matters enormously because those two diagnoses lead to completely different solutions.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Asking an under-supported manager to be more efficient is like giving someone a smaller bucket and telling them to bail faster. The boat still has a hole in it. What they need is someone to fix the hole.
                </p>

                {/* Pull quote 3 */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "Asking an under-supported manager to be more efficient is like giving someone a smaller bucket and telling them to bail faster. The boat still has a hole in it."
                  </p>
                </div>

                {/* ── Section 6 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What Happens When You Give the Time Back
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The homes that have removed the administrative layer from their manager's day describe a change that goes well beyond productivity metrics. Something shifts in the culture of the place.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The manager is present. Not physically present in the sense of being in the building, which they always were. Present in the way that matters. Walking the floor. Noticing things. Having actual conversations with staff rather than hurried exchanges between tasks. Sitting with a family for thirty minutes without one eye on the clock. Thinking about next month rather than just surviving this week.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Staff feel the difference. Residents feel the difference. Families feel the difference during visits. And it shows up, over time, in the metrics that matter. CQC ratings. Occupancy levels. Staff turnover. The numbers move because the person most responsible for all of them finally has the space to actually lead.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  One manager we worked with described it simply. She said that before, she used to think about the home only when she was in it. Now she thinks about it in a different way entirely. More strategically. More clearly. She said she actually enjoys the job again.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  That is not a small thing. A manager who enjoys their job is a manager who stays. And a manager who stays is, frankly, one of the most valuable operational assets a care home can have.
                </p>

                {/* ── Section 7: If you are a manager reading this ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  If You Are a Manager Reading This
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  I want to say something directly to you.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The exhaustion you feel at the end of the week is not a sign that you are not cut out for this. You are cut out for it. You are probably very good at it. The exhaustion is a sign that the systems around you are not good enough for what you are being asked to do.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  You became a manager because you are good with people. Because you understand care. Because you can hold a complex, pressured, emotionally demanding environment together. That is rare. That is genuinely rare. And it deserves to be the thing you spend your time on, not inbox management.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The question worth asking your owner, or worth asking yourself if you are the owner, is this. What would this home look like if its most important person had 30 hours a week back?
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The answer to that question is not abstract. It is specific. It is the family call you have been meaning to make. The team meeting that actually happened. The new starter who felt genuinely welcomed. The resident who got an extra twenty minutes because you were not rushing to the office. The early warning you caught because you had time to notice it.
                </p>

                {/* ── Closing ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Question Nobody Is Asking
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Most care home owners spend a lot of time thinking about how to get more from their building. More residents. Better occupancy. Higher fees. More private self-funders. These are all legitimate pursuits.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Very few spend equivalent time asking how to get more from the single most important person in the operation. Not more output. More of the right output. More of the things that only they can do.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Fixing the admin layer is not a technology project. It is not an IT upgrade. It is an investment in your manager. In their capacity to do the job you are paying for them to do. In the version of your care home that exists when your best person is focused on the work that matters.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  That version is better. Measurably, demonstrably better. And the gap between where you are and where you could be is not as large as you might think.
                </p>

                {/* Closing CTA */}
                <div className="bg-slate-900 p-8 md:p-12 mt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-5">Let's Talk</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-5">
                    What would your home look like with 30 hours back?
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-lg">
                    Book a call with me. We will look at where your manager's time is actually going, what it would take to reclaim it, and what that changes for your home. No pitch. Just an honest conversation about what is possible.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-[#FAF9F6] text-slate-900 px-8 py-4 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all"
                  >
                    Book a Call with Reece
                  </Link>
                </div>

              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:block lg:col-span-4 lg:pl-16"
            >
              <div className="sticky top-28 space-y-10">

                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">About the Author</span>
                  <p className="text-sm text-slate-900 font-semibold mb-1">Reece Hubbard</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                    Co-founder at Effito. Reece works directly with care home owners and managers to identify the operational weight sitting on the wrong shoulders — and build the infrastructure to move it.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center border border-slate-900 text-slate-900 px-5 py-3.5 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Speak to Reece
                  </Link>
                </div>

                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Key Takeaways</span>
                  <ul className="space-y-4">
                    {[
                      '20% of care managers spend 7 to 8 hours a day on purely administrative tasks',
                      '45% say admin burden is directly impacting the quality of care they provide',
                      'Rota scheduling alone accounts for 43% of all manager admin time',
                      'At £22/hr, 30 hours of weekly admin represents £34,000+ in senior time annually',
                      'The problem is not the manager. It is the absence of systems to support them',
                      'Managers with 30 hours back lead differently. The whole home changes.',
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <span className="text-slate-400 font-bold shrink-0 mt-0.5">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Related Reading</span>
                  <div className="space-y-0">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className="group flex gap-4 py-5 border-b border-stone-200 last:border-0 hover:bg-stone-50 -mx-2 px-2 transition-colors"
                      >
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 shrink-0 mt-1">
                          {article.category}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-sm font-serif text-slate-800 leading-snug group-hover:text-slate-500 transition-colors">
                            {article.title}
                          </h4>
                          <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-1.5 block">{article.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </motion.aside>

          </div>
        </section>

        {/* ── Back to Blog ── */}
        <section className="px-6 md:px-8 py-16 border-t border-stone-200 max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              to="/blog"
              className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-stone-400 hover:text-slate-900 transition-colors"
            >
              <span>←</span> Back to All Articles
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-slate-900 text-white px-8 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
            >
              Book a Strategy Call
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default AdminTimeTax;
