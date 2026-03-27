import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Scissors, Heart, ArrowRight, Download } from 'lucide-react';

const groomingHistory = [
  { date: "Oct 12, 2025", service: "Full Groom", groomer: "Fiona", notes: "Coat in great condition. Slightly nervous during nail clipping." },
  { date: "Aug 05, 2025", service: "Wash & Brush", groomer: "Fiona", notes: "Used lavender spritz. Very calm session." },
  { date: "Jun 15, 2025", service: "Full Groom", groomer: "Fiona", notes: "Summer cut. Skin looking healthy." }
];

export const PetDashboard = () => {
  return (
    <div className="pt-32 pb-24 bg-surface-container-low min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[3.5rem] shadow-2xl border border-outline-variant/10 overflow-hidden">
          {/* Header */}
          <div className="bg-brand-forest p-12 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=200" alt="Buddy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-4xl font-serif font-bold">Buddy's Wellness</h1>
                  <p className="text-white/80 font-light italic">Yorkshire Terrier • 4 years old</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Next Visit</p>
                <p className="text-xl font-bold">Dec 15, 2025</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 space-y-12">
            {/* Health Report */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-forest" />
                <h2 className="text-2xl font-serif font-bold">Groomer's Health Report</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Skin Condition", status: "Healthy", color: "text-brand-forest" },
                  { label: "Coat Health", status: "Excellent", color: "text-brand-forest" },
                  { label: "Joint Mobility", status: "Good", color: "text-brand-olive" }
                ].map((item, i) => (
                  <div key={i} className="bg-surface-container p-6 rounded-[2rem] border border-outline-variant/5">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">{item.label}</p>
                    <p className={`text-xl font-bold ${item.color}`}>{item.status}</p>
                  </div>
                ))}
              </div>
              <div className="bg-brand-forest/5 p-6 rounded-[2rem] border border-brand-forest/10">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  <span className="font-bold text-brand-forest">Fiona's Note:</span> "Buddy's coat is responding well to the organic oatmeal wash. No redness observed this time. Recommended: Continue with the botanical spritz every week."
                </p>
              </div>
            </div>

            {/* History */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-brand-forest" />
                <h2 className="text-2xl font-serif font-bold">Grooming History</h2>
              </div>
              <div className="space-y-4">
                {groomingHistory.map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-[2rem] hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/10">
                    <div className="bg-brand-forest/10 p-4 rounded-2xl text-brand-forest shrink-0 h-fit">
                      <Scissors className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg">{item.service}</h4>
                        <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{item.date}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row gap-4">
              <button className="flex-1 button-premium flex items-center justify-center gap-2">
                Book Next Session <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex-1 py-4 px-8 rounded-full bg-surface-container-high font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors">
                <Download className="w-5 h-5" /> Download PDF Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
