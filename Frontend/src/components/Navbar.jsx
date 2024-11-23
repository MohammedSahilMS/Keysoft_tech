import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact Us" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center p-4'>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex items-center space-x-2'
        >
          {/* You can add your logo image here */}
          <div className='w-10 h-10 bg-gradient-to-br from-primary to-secondary1 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-xl'>K</span>
          </div>
          <h1 className='text-2xl font-bold text-white'>
            Keysoft
            <span className='text-primary'>Tech</span>
          </h1>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-1'>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }`}
            >
              {link.label}
              <motion.span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left rounded-full
                  ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0'}
                  group-hover:scale-x-100 transition-transform duration-300`}
              />
            </Link>
          ))}
          {/* CTA Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='ml-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary1 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300'
          >
            Get Started
          </motion.button> */}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className='md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-6 relative">
            <span 
              className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              } top-3`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
              }`}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-black/95 backdrop-blur-lg'
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='container mx-auto py-4 px-4 space-y-2'
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary/20 text-primary'
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className='pt-2'
              >
                {/* <button className='w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary1 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300'>
                  Get Started
                </button> */}
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;