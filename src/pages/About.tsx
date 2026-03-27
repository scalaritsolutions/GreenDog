import React from 'react';
import { motion } from 'motion/react';
import { Scissors, ShieldCheck, Heart, Leaf } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-on-surface">
              Meet <span className="text-brand-forest italic">Fiona</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed">
              With a City & Guilds Level 3 Qualification and a lifelong passion for animal welfare, Fiona founded Green Dog Grooming to provide a stress-free, botanical alternative to high-volume salons.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <ShieldCheck className="w-10 h-10 text-brand-forest" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Certified</h4>
                <p className="text-sm text-on-surface-variant">City & Guilds Level 3 qualified and fully insured.</p>
              </div>
              <div className="space-y-2">
                <Leaf className="w-10 h-10 text-brand-forest" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Organic</h4>
                <p className="text-sm text-on-surface-variant">Only 100% botanical and vegan products used.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="https://images.unsplash.com/photo-1544717305-27a734ef1974?auto=format&fit=crop&q=80&w=1000" 
                alt="Fiona - Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-olive p-10 rounded-[3rem] text-white shadow-2xl hidden md:block">
              <Scissors className="w-8 h-8 mb-4 rotate-12" />
              <p className="text-2xl font-serif italic">"Grooming with soul."</p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-brand-forest/5 rounded-[4rem] p-12 lg:p-24 border border-outline-variant/10 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold">The Green Dog Philosophy</h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              We believe grooming is an essential part of a dog's health, not just an aesthetic luxury. That's why we've built our salon around three core pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "1-to-1 Care",
                desc: "No double-booking. Your dog has our full attention from start to finish."
              },
              {
                icon: <Scissors className="w-8 h-8" />,
                title: "Precision Cut",
                desc: "Specialists in hand-scissoring and breed-specific styling for the perfect silhouette."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "No Cages",
                desc: "A completely cage-free environment to ensure a calm, stress-free visit."
              }
            ].map((pillar, i) => (
              <div key={i} className="space-y-4 bg-white p-10 rounded-[2.5rem] shadow-sm border border-outline-variant/5">
                <div className="w-16 h-16 bg-brand-forest/10 rounded-2xl flex items-center justify-center text-brand-forest mx-auto">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold">{pillar.title}</h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Section */}
        <section className="mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 flex gap-4">
              <div className="flex-1 space-y-4">
                <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] shadow-lg w-full h-80 object-cover" />
                <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] shadow-lg w-full h-48 object-cover" />
              </div>
              <div className="flex-1 pt-12 space-y-4">
                <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] shadow-lg w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1544717305-27a734ef1974?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] shadow-lg w-full h-80 object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-5xl font-serif font-bold">Our Staines Atelier</h2>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg">
                Located at 15 Richmond Road, our boutique salon is designed to feel like a spa, not a clinical environment. With natural light, aromatherapy diffusers, and plenty of space to roam, your dog will feel right at home.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-brand-olive/10 rounded-2xl border border-brand-olive/20">
                  <p className="font-bold text-brand-forest">Aromatherapy</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Diffused Lavender</p>
                </div>
                <div className="p-6 bg-brand-forest/10 rounded-2xl border border-brand-forest/20">
                  <p className="font-bold text-brand-forest">Natural Light</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Floor-to-ceiling</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
