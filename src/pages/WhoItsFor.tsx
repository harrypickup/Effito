import React from 'react';

const WhoItsFor: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen animate-in fade-in duration-700">
      <section className="px-6 py-24 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-indigo-600 mb-4 block">Alignment</span>
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6 tracking-tight">Is Effito right for your home?</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            We partner with commercially minded operators who prioritize stability and professionalism.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Designed For - The "Yes" Column */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm transition-hover hover:shadow-md duration-300">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              Designed for
            </h2>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold">✓</span>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">Independent Homes & Small Groups</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Owners who need the infrastructure of a large corporate without the overhead.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold">✓</span>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">Growth Focused Operators</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Homes looking to increase occupancy and reduce agency reliance permanently.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold">✓</span>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-1">Quality Driven Directors</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Leaders who value professional, institutional-grade systems.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Not Designed For - The "No" Column */}
          <div className="bg-slate-50/50 p-8 md:p-12 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-400 mb-8 pb-4 border-b border-slate-200 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              Not designed for
            </h2>
            <ul className="space-y-8 text-slate-400">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-slate-200 text-xs font-bold">✕</span>
                <div>
                  <h3 className="font-semibold text-slate-500 text-lg mb-1">DIY Operators</h3>
                  <p className="text-sm leading-relaxed">Homes looking for cheap, manual tools to manage themselves.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-slate-200 text-xs font-bold">✕</span>
                <div>
                  <h3 className="font-semibold text-slate-500 text-lg mb-1">Short-Term Marketing Fixes</h3>
                  <p className="text-sm leading-relaxed">We provide infrastructure for the next decade, not leads for the next week.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-slate-200 text-xs font-bold">✕</span>
                <div>
                  <h3 className="font-semibold text-slate-500 text-lg mb-1">Budget-Only Solutions</h3>
                  <p className="text-sm leading-relaxed">Effito is a premium operational investment for serious businesses.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 text-center p-12 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <p className="text-slate-600 mb-6 italic font-serif">"The right tools aren't a cost—they are the foundation of a stable care business."</p>
          <div className="h-px bg-slate-100 w-16 mx-auto mb-6" />
          <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Effito Partnership Philosophy</p>
        </div>
      </section>
    </div>
  );
};

export default WhoItsFor;
