import React from 'react';
import { motion } from 'motion/react';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { Scissors, Star } from 'lucide-react';

const galleryItems = [
  {
    before: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000",
    title: "Teddy Bear Cut",
    breed: "Cockapoo",
    description: "Classic scissoring for a soft, rounded finish."
  },
  {
    before: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=1000",
    title: "Hand Scissored Finish",
    breed: "Bichon Frise",
    description: "Expertly shaped to breed standard."
  }
];

export const Gallery = () => {
  return (
    <div className="pt-32 pb-24 bg-surface-container-low min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-brand-forest/10 rounded-2xl text-brand-forest mb-4"
          >
            <Scissors className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif font-bold text-on-surface"
          >
            Artistry in <span className="text-brand-forest italic">Motion</span>
          </motion.h1>
          <p className="text-xl text-on-surface-variant font-light">
            Interactive before and after showcases of our professional scissoring and grooming transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {galleryItems.map((item, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}
              >
                <BeforeAfterSlider 
                  beforeImg={item.before} 
                  afterImg={item.after} 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`space-y-6 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1 lg:text-right flex flex-col items-end"}`}
              >
                <div className="flex gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-4xl font-serif font-bold text-on-surface">{item.title}</h3>
                <p className="text-brand-forest font-bold uppercase tracking-widest text-sm">{item.breed}</p>
                <p className="text-lg text-on-surface-variant font-light max-w-md">
                  {item.description}
                </p>
                <div className="pt-4">
                  <span className="inline-flex px-4 py-2 border border-brand-olive/30 rounded-full text-xs font-bold uppercase tracking-widest text-brand-forest bg-brand-olive/5">
                    Premium Grooming
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center space-y-8 p-20 bg-brand-forest rounded-[4rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="text-4xl lg:text-6xl font-serif font-bold relative z-10">Want to See Your Dog Here?</h2>
          <p className="text-xl font-light opacity-90 max-w-2xl mx-auto relative z-10">
            Book a session today and experience the difference of City & Guilds standard grooming in Staines-upon-Thames.
          </p>
          <div className="flex justify-center gap-4 relative z-10 pt-4">
            <button className="bg-white text-brand-forest px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-olive hover:text-white transition-all shadow-xl">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
