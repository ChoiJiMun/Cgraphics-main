
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Works', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-xl font-bold tracking-tighter uppercase italic serif">
          Alex Carter <span className="text-gray-400 font-normal">/ Journal</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-xs uppercase tracking-widest font-medium hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-black text-white px-6 py-2 text-xs uppercase tracking-widest font-medium hover:bg-gray-800 transition-all">
            Get in Touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-6 items-center shadow-xl animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg uppercase tracking-widest font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="bg-black text-white w-full py-4 text-xs uppercase tracking-widest font-medium">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
