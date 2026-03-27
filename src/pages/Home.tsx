import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Scissors, Droplets, ArrowRight } from 'lucide-react';
import { BookingStepper } from '../components/booking/BookingStepper';

const TrustBar = () => (
  <div className="bg-brand-forest/5 border-y border-outline-variant/10 py-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 lg:justify-between items-center">
      {[
        { icon: <Star className="text-yellow-500 fill-yellow-500" />, text: "4.9-Star Google Rating" },
        { icon: <ShieldCheck className="text-brand-forest" />, text: "City & Guilds Qualified" },
        { icon: <Scissors className="text-brand-forest" />, text: "Expert Hand Scissoring" },
        { icon: <Droplets className="text-brand-forest" />, text: "Organic Botanical Products" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-outline-variant/5"
        >
          {item.icon}
          <span className="font-bold text-sm tracking-tight text-on-surface-variant uppercase">{item.text}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-forest/5 -skew-x-12 translate-x-1/4 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full border border-brand-olive/20">
              <span className="w-2 h-2 bg-brand-forest rounded-full animate-pulse" />
              <span className="text-xs font-bold text-brand-forest uppercase tracking-widest">Staines' Finest Groomer</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-serif font-bold leading-[1.05] text-on-surface">
              Botanical Pet <br />
              <span className="text-brand-olive italic">Wellness</span>
            </h1>
            
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-light">
              Elevating the grooming experience with organic extracts, a cage-free environment, and expert City & Guilds precision.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="button-premium text-lg px-10 py-5">
                Book Appointment
              </Link>
              <Link to="/services" className="px-8 py-5 rounded-full font-bold text-lg hover:bg-surface-container-high transition-all flex items-center gap-2 group">
                Explores Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-olive/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-forest/10 rounded-full blur-3xl -z-10" />
            
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white transform hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Groomed Dog" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-outline-variant/10 hidden md:block">
              <p className="text-xs font-bold text-brand-forest uppercase tracking-widest mb-1">Our Promise</p>
              <p className="text-2xl font-serif font-bold text-on-surface leading-tight">100% Cage-Free <br />Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      <TrustBar />

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <BookingStepper />
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Ready for a <br />
              <span className="text-brand-forest italic">Transformation?</span>
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Our intelligent booking engine helps you choose the perfect treatment for your dog. From toy breeds to giant gentry, we provide tailored care that respects their unique coat and temperament.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Personalized 1-to-1 attention",
                "Natural coat-specific shampooing",
                "Calming lavender aromatherapy",
                "City & Guilds Level 3 Grooming"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-brand-forest">
                  <div className="w-6 h-6 bg-brand-olive/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
);
