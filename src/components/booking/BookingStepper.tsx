import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, Scissors, Droplets, Baby } from 'lucide-react';
import { cn } from '../../lib/utils';

const BREED_SIZES = [
  { label: 'Small (e.g. Yorkie, Toy Poodle)', multiplier: 1 },
  { label: 'Medium (e.g. Cocker Spaniel, Beagle)', multiplier: 1.3 },
  { label: 'Large (e.g. Golden Retriever, Lab)', multiplier: 1.6 },
  { label: 'Giant (e.g. Saint Bernard, Newfie)', multiplier: 2.2 }
];

const SERVICES = [
  { id: 'full-groom', name: 'Full Groom', basePrice: 50, icon: <Scissors /> },
  { id: 'wash-brush', name: 'Wash & Brush Up', basePrice: 35, icon: <Droplets /> },
  { id: 'puppy-intro', name: 'Puppy Introduction', basePrice: 25, icon: <Baby /> }
];

export const BookingStepper = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    dogName: '',
    breedSize: BREED_SIZES[0].label,
    service: SERVICES[0].id,
    date: '',
    time: ''
  });

  const currentSize = BREED_SIZES.find(s => s.label === formData.breedSize);
  const currentService = SERVICES.find(s => s.id === formData.service);
  const estimatedPrice = Math.round((currentService?.basePrice || 0) * (currentSize?.multiplier || 1));

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const steps = [
    { title: 'Pet Info' },
    { title: 'Service' },
    { title: 'Schedule' }
  ];

  return (
    <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-outline-variant/10">
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-high -z-0" />
        <div 
          className="absolute top-5 left-0 h-0.5 bg-brand-forest transition-all duration-500 -z-0" 
          style={{ width: `${(step - 1) * 50}%` }}
        />
        
        {steps.map((s, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center gap-2">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 border-4",
              step > i + 1 ? "bg-brand-forest border-brand-forest text-white" : 
              step === i + 1 ? "bg-white border-brand-forest text-brand-forest" : 
              "bg-white border-surface-container-high text-on-surface-variant"
            )}>
              {step > i + 1 ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
            </div>
            <span className={cn(
              "text-xs font-bold uppercase tracking-widest",
              step >= i + 1 ? "text-brand-forest" : "text-on-surface-variant"
            )}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold">Tell us about your dog</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2">Dog's Name</label>
                  <input 
                    type="text" 
                    value={formData.dogName}
                    onChange={e => setFormData({...formData, dogName: e.target.value})}
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 focus:ring-2 focus:ring-brand-olive/20 outline-none transition-all"
                    placeholder="e.g. Buddy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2">Breed Size</label>
                  <div className="grid grid-cols-1 gap-2">
                    {BREED_SIZES.map(s => (
                      <button
                        key={s.label}
                        onClick={() => setFormData({...formData, breedSize: s.label})}
                        className={cn(
                          "p-4 rounded-xl text-left border-2 transition-all",
                          formData.breedSize === s.label ? "border-brand-forest bg-brand-forest/5" : "border-outline-variant/10 hover:border-brand-olive/30"
                        )}
                      >
                        <span className="font-medium">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold">Choose a Service</h3>
              <div className="grid grid-cols-1 gap-4">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setFormData({...formData, service: s.id})}
                    className={cn(
                      "p-6 rounded-2xl border-2 transition-all text-left flex justify-between items-center group",
                      formData.service === s.id ? "border-brand-forest bg-brand-forest/5" : "border-outline-variant/20 hover:border-brand-forest/30"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-3 rounded-xl transition-colors",
                        formData.service === s.id ? "bg-brand-forest text-white" : "bg-surface-container-high text-brand-forest group-hover:bg-brand-forest/10"
                      )}>
                        {s.icon}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{s.name}</p>
                        <p className="text-sm text-on-surface-variant">From £{s.basePrice}</p>
                      </div>
                    </div>
                    {formData.service === s.id && <CheckCircle2 className="text-brand-forest" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold">Preferred Time</h3>
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="date" 
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-olive/20"
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
                <select 
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-olive/20"
                  onChange={e => setFormData({...formData, time: e.target.value})}
                >
                  <option>Morning (9am - 12pm)</option>
                  <option>Afternoon (1pm - 5pm)</option>
                </select>
              </div>
              <div className="bg-brand-forest/5 p-8 rounded-3xl border border-brand-forest/10 text-center">
                <p className="text-xs font-bold text-brand-forest uppercase tracking-widest mb-2">Estimated Investment</p>
                <p className="text-5xl font-serif font-bold text-brand-forest">£{estimatedPrice}</p>
                <p className="text-xs text-on-surface-variant mt-4 italic">*Final price confirmed after physical health assessment.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-12">
        {step > 1 && (
          <button onClick={prevStep} className="flex-1 py-4 rounded-2xl border border-outline-variant/20 font-bold flex items-center justify-center gap-2 hover:bg-surface transition-colors">
            <ChevronLeft className="w-5 h-5" /> Back
          </button>
        )}
        <button 
          onClick={step === 3 ? () => alert('Thank you! Fiona will contact you shortly.') : nextStep}
          className="flex-[2] button-premium"
        >
          {step === 3 ? 'Send Inquiry' : 'Continue'} <ChevronRight className="w-5 h-5 inline ml-1" />
        </button>
      </div>
    </div>
  );
};
