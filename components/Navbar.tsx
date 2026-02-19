import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'CONCEPT', href: '#concept' },
    { name: 'ITEM', href: '#products' },
    { name: 'NEWS', href: '#news' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-yasai-dark/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <span className="font-display font-bold text-3xl tracking-tighter text-white group-hover:text-yasai-orange transition-colors">
              YASAI<span className="text-yasai-orange">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-gray-300 hover:text-yasai-orange transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black hover:bg-yasai-orange hover:text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2">
              <ShoppingBag size={16} />
              今すぐ購入
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yasai-orange p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-yasai-dark border-b border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-xl font-display font-bold text-white hover:text-yasai-orange uppercase"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 w-full bg-yasai-orange text-black px-6 py-4 rounded-full font-bold text-lg">
              今すぐ購入
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;