import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Droplets, Baby, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Full Groom",
    price: "From £50",
    description: "Our signature head-to-paw treatment for ultimate style and hygiene.",
    features: ["Styling to breed standard or pet cut", "Double cleansing organic bath", "Ear cleaning & nail trimming", "Calming botanical spritz"],
    icon: <Scissors className="w-8 h-8" />,
    color: "bg-brand-forest"
  },
  {
    title: "Wash & Brush Up",
    price: "From £35",
    description: "Keep your pet fresh and tangle-free between full grooming sessions.",
    features: ["Deep conditioning bath", "Hand drying & full brush out", "Hygiene area trim", "Face and paw tidying"],
    icon: <Droplets className="w-8 h-8" />,
    color: "bg-brand-olive"
  },
  {
    title: "Puppy Intro",
    price: "From £20",
    description: "Supporting young pups with positive reinforcement grooming.",
    features: ["Gentle introduction to water", "Soft brush and trim session", "Ear and eye cleaning", "Lots of treats and praise"],
    icon: <Baby className="w-8 h-8" />,
    color: "bg-on-surface-variant"
  }
];

export const Services = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif font-bold text-on-surface"
          >
            Artisan <span className="text-brand-forest italic">Treatments</span>
          </motion.h1>
          <p className="text-xl text-on-surface-variant font-light">
            Every treatment is tailored to your dog’s specific coat type, skin condition, and lifestyle. We only use premium, organic products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] p-10 border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all group flex flex-col"
            >
              <div className={`${service.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold mb-2 text-on-surface">{service.title}</h3>
              <p className="text-brand-forest font-bold text-xl mb-6">{service.price}</p>
              <p className="text-on-surface-variant font-light mb-8 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-medium text-on-surface">
                    <CheckCircle2 className="w-4 h-4 text-brand-olive shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="button-premium w-full py-5 text-lg">
                Book {service.title}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-forest/5 rounded-[3.5rem] border border-outline-variant/10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-on-surface">Why Our Products Matter</h2>
            <p className="text-on-surface-variant font-light leading-relaxed">
              We exclusively use <span className="font-bold text-brand-forest uppercase tracking-widest text-xs">Botanical & Organic</span> grooming products that are free from harsh chemicals, sulphates, and synthetic perfumes. These are safer for your dog's skin and the environment.
            </p>
            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5 text-center flex-1">
                <p className="text-2xl font-bold text-brand-forest">0%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Sulphates</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5 text-center flex-1">
                <p className="text-2xl font-bold text-brand-forest">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Vegan</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5 text-center flex-1">
                <p className="text-2xl font-bold text-brand-forest">Cruelty</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Free</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl lg:rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1000" 
              alt="Natural Products" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
