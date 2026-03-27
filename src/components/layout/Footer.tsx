import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-highest pt-24 pb-12 px-6 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-brand-forest" />
              <span className="text-2xl font-serif font-bold text-brand-forest">Green Dog</span>
            </Link>
            <p className="text-on-surface-variant max-w-sm text-lg leading-relaxed">
              Staines-upon-Thames based salon specializing in botanical pet wellness. City & Guilds Level 3 Qualified with a passion for organic care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:text-brand-forest transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:text-brand-forest transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Gallery', 'The Salon', 'Contact', 'Internal Portal'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'The Salon' ? '/about' : item === 'Internal Portal' ? '/internal' : `/${item.toLowerCase()}`}
                    className="text-on-surface-variant hover:text-brand-forest transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-on-surface-variant">
                <MapPin className="w-5 h-5 text-brand-forest shrink-0 mt-1" />
                <span>15 Richmond Road, Staines-upon-Thames, TW18 2AA</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Phone className="w-5 h-5 text-brand-forest shrink-0" />
                <span>07734 103 541</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Mail className="w-5 h-5 text-brand-forest shrink-0" />
                <span>hello@greendog-grooming.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} Green Dog Grooming. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-brand-forest">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-forest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
