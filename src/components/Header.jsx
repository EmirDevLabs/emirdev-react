import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X as TwitterX, Instagram, Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Projects', 'Details', 'Highlights', 'Contact'];
  const socialIcons = [
    { icon: Instagram, href: 'https://instagram.com/em1r.dev' },
    { icon: Github, href: 'https://github.com/oxyvadev' },
    { icon: TwitterX, href: 'https://x.com/oxyvadev' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { opacity: 1, y: '0' },
  };

  return (
    <>
      {/* Desktop Header (Sidebar) */}
      <motion.header
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed top-0 left-0 h-full w-24 hidden lg:flex flex-col justify-between items-center py-8 bg-dark z-20"
      >
        <a href="#hero" className="w-10 h-10 bg-dark flex items-center justify-center font-bold text-light text-2xl cursor-pointer">
          E
        </a>
        <nav className="flex flex-col items-center gap-12">
          {navItems.map(item => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium tracking-widest uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              animate={{ color: activeSection === item.toLowerCase() ? '#F2F2F2' : '#808080' }}
              whileHover={{ color: '#F2F2F2' }}
              transition={{ duration: 0.15 }}
            >
              {activeSection === item.toLowerCase() && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 h-full w-1 bg-primary rounded-full"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.32, ease: 'easeInOut' }}
                />
              )}
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="flex flex-col gap-6">
          {socialIcons.map((social, index) => (
            <a key={index} href={social.href} className="text-gray-500 hover:text-light transition-colors duration-300">
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </motion.header>

      {/* Mobile Header */}
      <header className={`fixed top-0 left-0 w-full lg:hidden flex justify-between items-center px-6 py-4 z-30 transition-colors duration-300 ${isScrolled || isOpen ? 'bg-dark' : 'bg-transparent'}`}>
        <a href="#hero" className="w-9 h-9 bg-dark flex items-center justify-center font-bold text-light text-xl cursor-pointer">E</a>
        <button onClick={() => setIsOpen(!isOpen)} className="z-40">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
            className="fixed inset-0 bg-dark z-20 flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-semibold ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-gray-400'}`}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex gap-8 mt-12">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-light transition-colors duration-300">
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 