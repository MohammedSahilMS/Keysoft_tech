import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Binoy",
      position: "CEO & Founder",
      image: "/path/",
      description: "Description",
    },
    {
      name: "Antony Ben",
      position: "CTO",
      image: "/path",
      description: "Descrption",
    },
    {
      name: "John Doe",
      position: "Head of Innovation",
      image: "/path/to/innovation-head-image.jpg",
      description: "Descrption",
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section - Dark Theme */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Lines */}
          <div className="absolute inset-0 opacity-20">
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

          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Enhanced Glowing Effects */}
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
                <span className="text-white/80 text-sm font-medium">Established 2024</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Building the future of technology with innovation and excellence
            </motion.p>
          </div>
        </div>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </motion.section>

      {/* Team Section - Softened Light Theme */}
      <section className="relative py-20">
        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/95 to-gray-900"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Glowing Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary1/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate experts driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>
                  <div className="p-6 relative">
                    {/* Icon Container */}
                    {/* <div className="absolute -top-8 right-6 w-16 h-16  flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-all duration-300">
                      <i className={`${member.icon} text-2xl text-white`}></i>
                    </div> */}
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-primary/90 mb-2">{member.position}</p>
                    <p className="text-gray-400">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Theme */}
      <section className="relative py-20">
        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

        {/* Stats content remains the same but with adjusted colors for continuity */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2", label: "Years Experience", icon: "ri-time-line" },
              { number: "20", label: "Team Members", icon: "ri-team-line" },
              { number: "10", label: "Projects Completed", icon: "ri-task-line" },
              { number: "4", label: "Countries Served", icon: "ri-global-line" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;