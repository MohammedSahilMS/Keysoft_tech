import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'ri-facebook-fill', url: '#' },
    { name: 'Twitter', icon: 'ri-twitter-fill', url: '#' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: '#' },
    { name: 'Instagram', icon: 'ri-instagram-line', url: '#' },
    
  ];

  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Careers', 'Contact Us', 'Blog'] },
    { title: 'Services', links: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Gradient Border Top */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary1 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Keysoft<span className="text-primary">Tech</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions. Your trusted partner in digital transformation.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-secondary1 flex items-center justify-center group transition-all duration-300"
                >
                  <i className={`${social.icon} text-gray-400 group-hover:text-white text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link 
                      to="#" 
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Keysoft Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary1/10 rounded-full blur-[100px]"></div>
    </footer>
  );
};

export default Footer;