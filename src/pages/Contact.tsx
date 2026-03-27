import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Scissors, Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-serif font-bold text-on-surface"
              >
                Let’s <span className="text-brand-forest italic">Talk</span> Pet
              </motion.h1>
              <p className="text-xl text-on-surface-variant font-light leading-relaxed">
                Whether you’re booking a first puppy session or a maintenance bath, we treat every dog as if they were our own.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-brand-forest/10 p-5 rounded-[1.5rem] text-brand-forest shrink-0">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Our Atelier</h4>
                  <p className="text-on-surface-variant">15 Richmond Road, Staines-upon-Thames, TW18 2AA</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-brand-forest/10 p-5 rounded-[1.5rem] text-brand-forest shrink-0">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-on-surface-variant">07734 103 541</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-brand-forest/10 p-5 rounded-[1.5rem] text-brand-forest shrink-0">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Email</h4>
                  <p className="text-on-surface-variant">hello@greendog-grooming.co.uk</p>
                </div>
              </div>
            </div>

            <div className="h-80 w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-forest p-4 rounded-full shadow-2xl animate-bounce">
                  <Scissors className="text-white w-8 h-8" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 bg-white px-4 py-2 rounded-xl shadow-lg border border-outline-variant/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-forest">15 Richmond Road</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-outline-variant/10"
          >
            <h3 className="text-3xl font-serif font-bold mb-8">Service Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-surface-container-low p-4 rounded-2xl outline-none border border-outline-variant/10 focus:border-brand-olive transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Dog's Breed</label>
                  <input type="text" className="w-full bg-surface-container-low p-4 rounded-2xl outline-none border border-outline-variant/10 focus:border-brand-olive transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-surface-container-low p-4 rounded-2xl outline-none border border-outline-variant/10 focus:border-brand-olive transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Service of Interest</label>
                <select className="w-full bg-surface-container-low p-4 rounded-2xl outline-none border border-outline-variant/10 focus:border-brand-olive transition-colors">
                  <option>Full Groom</option>
                  <option>Wash & Brush Up</option>
                  <option>Puppy Introduction</option>
                  <option>Teeth Cleaning</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Special Requirements</label>
                <textarea rows={4} className="w-full bg-surface-container-low p-4 rounded-2xl outline-none border border-outline-variant/10 focus:border-brand-olive transition-colors" placeholder="Nervous dog, skin allergies, etc."></textarea>
              </div>
              <button type="submit" className="button-premium w-full py-5 text-xl">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
