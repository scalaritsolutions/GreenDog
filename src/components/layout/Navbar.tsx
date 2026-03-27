import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scissors, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'The Salon', path: '/about' },
  { name: 'My Pet', path: '/dashboard' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-forest p-1.5 rounded-lg transition-transform group-hover:rotate-12">
            <Scissors className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-brand-forest">
            Green Dog
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-olive",
                location.pathname === link.path ? "text-brand-forest font-bold" : "text-on-surface-variant"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="h-0.5 bg-brand-olive mt-0.5"
                />
              )}
            </Link>
          ))}
          <Link to="/contact" className="button-premium py-2 px-6 text-sm">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-outline-variant/10 px-6 py-8 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-serif transition-colors",
                location.pathname === link.path ? "text-brand-forest font-bold" : "text-on-surface-variant"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="button-premium w-full block text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
};
