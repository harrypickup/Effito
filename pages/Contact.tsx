
import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <section className="px-6 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Get Started</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 tracking-tight">Book a Strategy Call.</h1>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            This is a non obligation strategic discussion about your current infrastructure and how Effito can stabilize your operations.
          </p>

          <div className="mb-12 p-6 bg-stone-50 border border-stone-200 rounded-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">Direct Line</span>
            <a href="tel:01615244023" className="text-2xl font-semibold text-slate-900 hover:opacity-70 transition-opacity">
              0161 524 4023
            </a>
          </div>
          
          <div className="space-y-6 text-sm text-slate-500">
            <div className="flex gap-4 items-center">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span>Limited to 3 new installations per month.</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span>Focused on long term operational health.</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span>Fixed, transparent investment model.</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-2 md:p-4 rounded-xl border border-stone-200 shadow-lg min-h-[600px] overflow-hidden">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/BvkBGQnTXwD06WQTZbJh" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="BvkBGQnTXwD06WQTZbJh_1773148818067"
            title="Booking Widget"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
