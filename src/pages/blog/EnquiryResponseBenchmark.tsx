import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const relatedArticles = [
  {
    slug: 'why-care-homes-lose-residents-slow-enquiry-response',
    category: 'Occupancy',
    title: 'Why Care Homes Lose Residents Before They Even Call Back',
    readTime: '6 min read',
    date: 'March 2025',
  },
  {
    slug: 'care-home-occupancy-optimisation',
    category: 'Occupancy',
    title: 'The Occupancy Optimisation Playbook for Independent Care Homes',
    readTime: '9 min read',
    date: 'January 2025',
  },
  {
    slug: 'care-home-automation-guide-2025',
    category: 'Operations',
    title: 'What Care Home Automation Actually Looks Like in 2025',
    readTime: '12 min read',
    date: 'February 2025',
  },
];

const EnquiryResponseBenchmark: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring | Effito Blog</title>
        <meta
          name="description"
          content="How long does your care home take to respond to an enquiry? Whatever you think the answer is, the data suggests it is probably longer. Here is the benchmark every UK care home owner needs to know about — and what the fastest homes are doing differently."
        />
        <meta
          name="keywords"
          content="care home enquiry response time, care home KPI, care home lead response, care home conversion rate, residential care enquiry benchmark, care home response speed, care home admissions process UK, care home bed conversion"
        />
        <link rel="canonical" href="https://www.effito.com/blog/enquiry-response-time-care-home-benchmark" />
        <meta property="og:title" content="Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring" />
        <meta property="og:description" content="Whatever you think your response time is, the data suggests it is longer. Here is the benchmark that changes how you think about admissions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.effito.com/blog/enquiry-response-time-care-home-benchmark" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring" />
        <meta name="twitter:description" content="Speed-to-respond is now the single biggest determinant of bed conversion. Here is the benchmark every care home owner needs to know." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring",
            "description": "How long does your care home take to respond to an enquiry? Whatever you think the answer is, the data suggests it is probably longer. Here is the benchmark every UK care home owner needs to know.",
            "datePublished": "2024-12-10",
            "dateModified": "2024-12-10",
            "author": {
              "@type": "Person",
              "name": "Harry Pickup",
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
              "@id": "https://www.effito.com/blog/enquiry-response-time-care-home-benchmark"
            },
            "keywords": "care home enquiry response time, care home KPI, care home admissions, bed conversion rate UK",
            "articleSection": "Occupancy"
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
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-300">Occupancy</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-200 pb-12 md:pb-20">

            <div className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-sm">
                  Occupancy
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.05] mb-8"
              >
                Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
              >
                Ask most care home owners how quickly they respond to enquiries and they will give you a confident answer. Ask their enquiries what they think and you would get a very different story. Here is the data that settles the debate.
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
                  <span className="text-sm font-light text-slate-600">December 2024</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Reading Time</span>
                  <span className="text-sm font-light text-slate-600">6 minutes</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Written by</span>
                  <span className="text-sm font-light text-slate-600">Harry Pickup</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Topic</span>
                  <span className="text-sm font-light text-slate-600">Occupancy & Admissions</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-slate-900 text-white px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
                >
                  Benchmark Your Home
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
                  We ask this question to almost every care home owner we meet. How quickly do you respond to enquiries?
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The answers are always confident. "Same day." "Within a couple of hours." "We're pretty good with that." One owner told us proudly that his manager was "on it within the hour, usually." He genuinely believed this. He had never measured it. But he believed it, which is a completely human thing to do about something that feels important but is painful to audit properly.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The data tells a different story. Consistently. Across homes of all sizes, in all regions, with managers of all experience levels. The gap between how quickly care home owners think they respond and how quickly they actually respond is, in many cases, a matter of days.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  This is not a criticism. It is a structural problem that almost nobody in the sector has solved yet. And understanding why the gap exists is the first step to closing it.
                </p>

                {/* ── Section 2 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What the Benchmark Actually Says
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  TrustedCare, which processes over 50,000 care enquiries a year across dozens of UK operators, produces some of the most reliable data in the sector on how enquiries actually behave. Here is what it shows.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Families who are looking for care contact an average of 3.5 homes at the same time. They are not doing this sequentially. They are sending multiple enquiries simultaneously, like throwing several lines in the water at once and seeing which fish bites first. The home that responds first, with a proper conversation rather than an acknowledgement email, wins the majority of tours.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  A 24-hour delay in responding can halve your conversion chances. Not reduce them slightly. Halve them. By the time you call back the next morning, the family has already had a warm, structured conversation with someone else, heard a voice that felt reassuring, and mentally started picturing that home as the right one. You are now an also-ran trying to compete with a memory.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The conversion data across the sector reinforces this. Average enquiry-to-admission conversion sits at 24.7% across 34 operators and nearly 28,000 records. The homes performing above this benchmark consistently share one characteristic above all others. They are faster. Not necessarily wealthier, better located, or newer. Just faster.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Speed is not a nice-to-have. It is the single biggest lever in your admissions process that most owners have never pulled.
                </p>

                {/* Pull quote */}
                <div className="border-l-4 border-emerald-500 pl-8 py-2 mb-14">
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight italic leading-[1.3]">
                    "A 24-hour delay in responding can halve your conversion chances. By the time you call the next morning, you are competing with a memory."
                  </p>
                </div>

                {/* ── Section 3 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Three Windows Most Homes Miss Completely
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Enquiry volume in care is not evenly distributed across the day or the week. There are patterns, and understanding them reveals exactly why so many enquiries go cold before anyone picks up the phone.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-6">
                  <strong className="font-semibold text-slate-900">The morning peak.</strong> Enquiries spike between 10am and noon. This is the window when families, having spent an evening researching and a night sleeping on it, pick up the phone with intention. It is also, with near-perfect inconvenience, the same window when your staff are occupied with medication rounds and your manager is either on the floor or buried in the morning handover. Nobody is free to answer. The phone rings out. The family tries the next number on their list.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-6">
                  <strong className="font-semibold text-slate-900">The evening surge.</strong> Around 24% of all care enquiries arrive outside standard working hours. The families making these enquiries are often at a different stage of urgency than the daytime callers. A grown child who has spent the day at work and the evening caring for an ageing parent, finally sitting down at 8pm to do the thing they have been putting off for months. These enquiries have emotional weight behind them. They deserve an immediate response. They get an empty inbox until morning.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  <strong className="font-semibold text-slate-900">The Sunday night special.</strong> Care professionals know this one well. Sunday evenings produce a distinct spike in enquiry volume. Families spend the weekend visiting an elderly relative, see something that worries them, and by Sunday night they are looking for options. The urgency is real, the decision window is narrow, and every care home they contact is closed. The one that responds on Monday morning is already late to a conversation that should have happened 14 hours ago.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Three distinct windows. Three moments when families are most ready to engage. Three moments where the average care home is functionally invisible.
                </p>

                {/* Stat callout */}
                <div className="bg-slate-900 p-8 md:p-10 mb-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { stat: '52%', label: 'of care home telephone enquiries go completely unanswered. Not slow. Just gone.' },
                      { stat: '10x', label: 'more likely to convert a lead if you respond within 5 minutes versus 10 minutes, per sales response research across industries' },
                      { stat: '4%', label: 'of enquiries older than 10 weeks ever convert to a placement. The window closes fast.' },
                    ].map((item, i) => (
                      <div key={i} className={`${i > 0 ? 'md:border-l md:border-slate-800 md:pl-8' : ''}`}>
                        <div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2">{item.stat}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs font-light mt-6 pt-6 border-t border-slate-800">Sources: Paperclip care call-answering service; TrustedCare Enquiry to Placement Study; TrustedCare 2023 Market Review</p>
                </div>

                {/* ── Section 4 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Why Owners Underestimate Their Response Time
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The owner who told us his manager responds within the hour is not lying. He has just never watched the full picture. He has seen his manager pick up an enquiry quickly on a calm Tuesday morning. He has not seen the same enquiry land at 10:47am on a Thursday during a medication incident, sit unread until 2pm, and then get a call attempt to a number that goes to voicemail. No message left. No follow-up the next day. The family never heard from them at all.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is what makes enquiry response time such a deceptive metric. It feels manageable because the cases where it works are visible. The cases where it fails are invisible. The family who never got a callback is not on any report. They are just not a resident.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  There is also a very human tendency to remember the enquiries that converted and forget the ones that did not. If you responded well to three enquiries last week and converted two of them, that feels like a 67% conversion rate and a great week. What you may not have counted is the four enquiries from the same week that never got a response at all, because they arrived at inconvenient moments and slipped through the gaps. Your actual conversion rate for the week was not 67%. It was 29%. But you will never know that unless you measure the whole pipeline.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Measuring only the enquiries you caught is like a footballer counting only the shots that went in and concluding he never misses.
                </p>

                {/* Pull quote 2 */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "Measuring only the enquiries you caught is like a footballer counting only the shots that went in and concluding he never misses."
                  </p>
                </div>

                {/* ── Section 5 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What Good Actually Looks Like
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Best-in-class care homes achieve a tour booking rate of over 40% from qualifying enquiries on the initial call. This is not achieved through particularly gifted sales technique or unusually persuasive managers. It is achieved through speed and structure.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Speed because the call happens while the family is still at their peak of engagement, still in the emotional moment that prompted them to reach out, still open to committing to a visit. Structure because the conversation gathers the right information quickly — care needs, funding situation, urgency, preferred timing — and uses that to book a tour rather than ending with "we'll be in touch."
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The homes hitting 40% tour booking are not necessarily the ones with the best managers. They are the ones where the process does not depend entirely on whether the right person happens to be free at the right moment. The process runs regardless. A family enquiring on a Sunday evening gets a structured, knowledgeable call within 60 seconds. Not from a script-reading call centre agent who knows nothing about the home. From a system that knows the home's current availability, the manager's calendar, and the right questions to ask.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The tour is in the diary before the family has made a cup of tea. That is the standard. Most homes are nowhere near it.
                </p>

                {/* ── Section 6: The self-funder angle ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Self-Funder Angle That Changes Everything
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is the detail that tends to sharpen minds in a room full of care home owners. Eighteen percent of private self-funding residents move in within the first week of making their initial enquiry. Not within a month. Within a week. They have already decided. They are not deliberating. They need someone to catch them at the exact right moment and say: yes, we have availability, come in on Thursday.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Private self-funders are the highest-value residents in the building. They typically pay significantly more per week than local authority placements. For a home looking to improve its financial position, converting one additional self-funder per quarter is meaningful money. Missing one because nobody answered the phone on a Sunday evening is a painful opportunity cost.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  These families are not waiting around. They move at the speed of their own urgency, which is considerable. The only question is whether your home is fast enough to be in the conversation when they decide.
                </p>

                {/* Benchmark breakdown box */}
                <div className="space-y-0 border border-stone-200 mb-14">
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">The enquiry response benchmark — where does your home sit?</span>
                  </div>
                  {[
                    {
                      num: 'A',
                      title: 'Under 60 seconds',
                      body: 'Best in class. Families are still at their highest point of intent. Tour booking rates above 40% are achievable at this speed. Very few homes operate here consistently.',
                      highlight: true,
                    },
                    {
                      num: 'B',
                      title: 'Under 1 hour',
                      body: 'Competitive. You will win the race against most manual systems. Conversion rates are meaningfully above average. Requires dedicated resource or automation to sustain.',
                      highlight: false,
                    },
                    {
                      num: 'C',
                      title: '1 to 6 hours',
                      body: 'Below average. Families who enquired in the morning have had several other conversations by now. You are entering a crowded field with a cold start.',
                      highlight: false,
                    },
                    {
                      num: 'D',
                      title: '6 to 24 hours',
                      body: 'Where most care homes actually operate, regardless of what they believe. Conversion rates drop sharply in this window. Families have mentally moved on even if they have not formally committed elsewhere.',
                      highlight: false,
                    },
                    {
                      num: 'E',
                      title: 'Never',
                      body: 'An estimated 52% of telephone enquiries to care homes go completely unanswered. If this is happening in your home, it is not a performance issue. It is a systems issue. And it is fixable.',
                      highlight: false,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex gap-6 p-6 border-b border-stone-200 last:border-0 group transition-colors ${item.highlight ? 'bg-emerald-50 hover:bg-emerald-100' : 'hover:bg-stone-50'}`}
                    >
                      <span className={`text-[10px] font-mono shrink-0 mt-1 font-bold ${item.highlight ? 'text-emerald-600' : 'text-stone-300 group-hover:text-slate-400'} transition-colors`}>{item.num}</span>
                      <div>
                        <h4 className={`font-semibold text-sm uppercase tracking-wide mb-2 ${item.highlight ? 'text-emerald-800' : 'text-slate-900'}`}>{item.title}</h4>
                        <p className={`text-sm font-light leading-relaxed ${item.highlight ? 'text-emerald-700' : 'text-slate-500'}`}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Closing ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Uncomfortable Truth About Measurement
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Most care homes do not measure their enquiry response time. At all. There is no log of when enquiries arrived, when they were first contacted, how many attempts were made, or what happened to the ones that did not convert. The admissions process is largely undocumented, which means it cannot be improved because nobody knows which part of it is broken.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is not incompetence. It is the inevitable result of asking an already overstretched manager to handle admissions alongside every other responsibility they carry. Documentation and measurement require time and systems. Most care home managers have neither in surplus.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The homes operating at the top of the benchmark table have solved this by removing the measurement burden from the human entirely. Every enquiry is logged automatically from the moment it arrives. Every response is timestamped. Every outcome is recorded. The manager can see, at any point, exactly what is in the pipeline, when it arrived, and what happened next. Not because the manager built a spreadsheet. Because the system built it for them.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  You cannot manage what you do not measure. And right now, most care homes are flying their admissions process completely blind.
                </p>

                {/* Closing CTA */}
                <div className="bg-slate-900 p-8 md:p-12 mt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-5">Next Step</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-5">
                    Find out where your home actually sits on the benchmark.
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-lg">
                    We review your current enquiry process, identify where the gaps are, and show you in plain numbers what closing them is worth. It takes one call and the findings are usually eye-opening.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-[#FAF9F6] text-slate-900 px-8 py-4 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all"
                  >
                    Book a Strategy Call
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
                  <p className="text-sm text-slate-900 font-semibold mb-1">Harry Pickup</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                    Co-founder at Effito. Harry spends his time helping care home owners understand where their enquiry pipelines are leaking and what it costs them in real revenue terms.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center border border-slate-900 text-slate-900 px-5 py-3.5 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Speak to Harry
                  </Link>
                </div>

                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Key Takeaways</span>
                  <ul className="space-y-4">
                    {[
                      'A 24-hour delay in responding can halve your enquiry conversion rate',
                      '52% of care home telephone enquiries go completely unanswered',
                      'Families contact 3.5 homes simultaneously — whoever responds first wins the tour',
                      '24% of enquiries arrive out of hours, when most homes are invisible',
                      '18% of private self-funders move in within the first week of enquiry',
                      'Most care homes have no measurement of their actual response time',
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
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
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-600 shrink-0 mt-1">
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

export default EnquiryResponseBenchmark;
