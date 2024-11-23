import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' },
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Animated Lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              style={{
                top: `${25 + i * 25}%`,
                animation: `slide-right ${8 + i * 2}s linear infinite`,
                opacity: 0.5,
              }}
            ></div>
          ))}
        </div>

        {/* Glowing Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary1/20 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white/80 text-sm font-medium">Get in Touch</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <i className="ri-map-pin-line text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-gray-400">Kakkanad, Kerala</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <i className="ri-mail-line text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">contact@keysofttechnologies.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <i className="ri-phone-line text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+91 9876543210</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="  mt-8">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "ri-facebook-fill", label: "Facebook" },
                    { icon: "ri-twitter-fill", label: "Twitter" },
                    { icon: "ri-linkedin-fill", label: "LinkedIn" },
                    // { icon: "ri-github-fill", label: "GitHub" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors group"
                    >
                      <i className={`${social.icon} text-2xl text-primary group-hover:text-white transition-colors`}></i>
                      <span className="text-xs text-gray-400 mt-2 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary1 text-white rounded-lg px-6 py-3 font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status.info.msg && (
                  <div
                    className={`mt-4 p-4 rounded-lg backdrop-blur-sm ${
                      status.info.error 
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                        : 'bg-green-500/10 text-green-400 border border-green-500/20'
                    }`}
                  >
                    {status.info.msg}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 overflow-hidden"
          >
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d YOUR_COORDINATES"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;