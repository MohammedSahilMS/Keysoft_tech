import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: "ri-code-box-line",
      description: "Custom web solutions built with cutting-edge technologies",
      features: ["React", "Node.js", "Cloud Integration", "Responsive Design"]
    },
    {
      title: "Mobile Development",
      icon: "ri-smartphone-line",
      description: "Native and cross-platform mobile applications",
      features: ["iOS", "Android", "React Native", "Flutter"]
    },
    {
      title: "Cloud Solutions",
      icon: "ri-cloud-line",
      description: "Scalable and secure cloud infrastructure",
      features: ["AWS", "Azure", "DevOps", "Microservices"]
    },
    {
      title: "AI & Machine Learning",
      icon: "ri-brain-line",
      description: "Intelligent solutions for complex problems",
      features: ["Deep Learning", "NLP", "Computer Vision", "Data Analytics"]
    },
    {
      title: "Cybersecurity",
      icon: "ri-shield-keyhole-line",
      description: "Comprehensive security solutions",
      features: ["Penetration Testing", "Security Audits", "Compliance", "Training"]
    },
    {
      title: "Digital Transformation",
      icon: "ri-rocket-line",
      description: "End-to-end digital transformation services",
      features: ["Strategy", "Implementation", "Integration", "Support"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
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
                <span className="text-white/80 text-sm font-medium">Our Expertise</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Comprehensive technology solutions for your business needs
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <section className="relative py-20">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/95 to-gray-900"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="absolute -top-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary1 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-all duration-300">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary1 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;