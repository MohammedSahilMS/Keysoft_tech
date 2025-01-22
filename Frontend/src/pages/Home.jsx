import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaBolt, FaShieldAlt, FaFileInvoiceDollar } from 'react-icons/fa';
import { RiFileTextLine, RiCodeSLine } from 'react-icons/ri';
import { MdMedicalServices, MdBusinessCenter, MdGavel } from 'react-icons/md';
import { Link } from 'react-router-dom';


const features = [
  {
    icon: <FaRegClock className="text-2xl text-white" />,
    title: "FAST",
    description: "On receipt of audio recording and stipulated payment, our clock starts ticking and customers can remain assured of accurate transcript output within 24 to 48 hours",
  },
  {
    icon: <FaBolt className="text-2xl text-white" />,
    title: "COST EFFECTIVE",
    description: "Phoenix Cybertech offers the most cost effective solution to meet all your transcription needs and multi-stage review process ensures 98% accuracy throughout the job",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-white" />,
    title: "SECURE & CONFIDENTIAL",
    description: "All Phoenix Cybertech systems and protocols meet or exceed HIPAA compliance standards at every step of the medical transcription process",
  },
];

// Define the services array
const services = [
  {
    title: "Medical Transcription",
    icon: <RiFileTextLine className="text-2xl" />,
    description: "Professional medical transcription services converting dictated recordings into accurate medical documents.",
  },
  {
    title: "Medical Coding",
    icon: <MdMedicalServices className="text-2xl" />,
    description: "Expert translation of medical procedures and diagnoses into standardized codes.",
  },
  {
    title: "Medical Billing",
    icon: <FaFileInvoiceDollar className="text-2xl" />,
    description: "Comprehensive medical billing services ensuring proper reimbursement for healthcare providers.",
  },
  {
    title: "Business Transcription",
    icon: <MdBusinessCenter className="text-2xl" />,
    description: "High-quality transcription services for all business documentation needs.",
  },
  {
    title: "Legal Transcription",
    icon: <MdGavel className="text-2xl" />,
    description: "On-demand legal transcription services with maximum accuracy and confidentiality.",
  },
  {
    title: "Software Development",
    icon: <RiCodeSLine className="text-2xl" />,
    description: "Custom software development solutions for digital transformation.",
  },
];

// Define the FeatureCard component
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
  >
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary1 rounded-2xl flex items-center justify-center shadow-xl">
      {icon}
    </div>
    <div className="mt-8 text-center">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <Link 
        to="/about"
        className="inline-flex items-center text-primary hover:text-white transition-colors"
      >
        READ MORE
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </motion.div>
);

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="overflow-hidden">
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .service-container {
            position: relative;
            animation: rotate 20s linear infinite;
          }
          .service-item {
            position: absolute;
            transform-origin: center;
          }
          @keyframes orbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .orbit-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 0 auto;
          }
          .orbit {
            position: absolute;
            width: 100%;
            height: 100%;
            animation: orbit 20s linear infinite;
          }
          .planet {
            position: absolute;
            top: 50%;
            left: 50%;
            transform-origin: -150px center;
            transform: translate(-50%, -50%);
          }
          .planet-icon {
            transform: rotate(0deg);
          }
        `}
      </style>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen bg-gradient-to-br from-primary via-secondary1 to-black text-white"
      >
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto h-full flex flex-col items-center justify-center px-4 relative z-10">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl pb-3 font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary2">
              Welcome to KeySoft Technologies
            </h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-center max-w-2xl mx-auto text-gray-200"
            >
              Innovative Solutions for Tomorrow's Challenges
            </motion.p>
          </motion.div>
        </div>

        {/* News Ticker with Gradient Background */}
        <div className="absolute bottom-0 w-full bg-gradient-to-r from-black via-secondary1 to-primary py-3">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 text-lg font-medium">Latest News: KEYSOFT TECHNOLOGIES Started its services</span>
            <span className="mx-4 text-lg">|</span>
            <span className="mx-4 text-lg font-medium">More News</span>
            <span className="mx-4 text-lg">|</span>
            <span className="mx-4 text-lg font-medium">More NEws </span>
          </div>
        </div>
      </motion.section>

      {/* Services Preview Section with Glass Effect */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Our Core Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Software Development", 
                icon: "ri-code-box-line", 
                description: "Custom solutions tailored to your needs",
                features: ["Web Apps", "Mobile", "Enterprise"]
              },
              { 
                title: "Cloud Solutions", 
                icon: "ri-cloud-line", 
                description: "Scalable cloud infrastructure services",
                features: ["AWS", "Azure", "GCP"]
              },
              { 
                title: "AI Integration", 
                icon: "ri-brain-line", 
                description: "Smart automation and analytics",
                features: ["ML", "Data", "Analytics"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group"
              >
                <div className="p-8">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    {/* Background Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary to-secondary1 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    
                    {/* Icon Circle */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary1/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary1/20 transition-all duration-300">
                      <i className={`${service.icon} text-3xl text-white group-hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIndex) => (
                      <span 
                        key={fIndex}
                        className="px-3 py-1 bg-black/30 rounded-full text-sm text-gray-300 border border-white/10"
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

      {/* Parallax Section with Overlay */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
  <div className="absolute inset-0">
    {/* Matching gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary1/5 to-black/50"></div>
    
    {/* Subtle grid pattern */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, #DC2626 1px, transparent 1px),
          linear-gradient(to bottom, #DC2626 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    ></div>

    {/* Matching glow effects */}
    <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary1/10 rounded-full blur-[80px]"></div>
  </div>

  <div className="relative z-10 container mx-auto flex items-center justify-center min-h-[300px]">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center px-6 py-8 backdrop-blur-sm bg-black/20 rounded-xl max-w-2xl mx-4 border border-white/5"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary2 to-white">
        Transform Your Business
      </h2>
      <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary1 mx-auto mb-3 opacity-50"></div>
      <p className="text-xl text-gray-300">
        With cutting-edge technology solutions
      </p>
    </motion.div>
  </div>
</section>

      {/* Stats Section with Glass Effect */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Clients" },
              { number: "20+", label: "Projects" },
              { number: "5", label: "Countries" },
              { number: "99%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Feature Cards Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Why Choose Phoenix Cybertech Transcription Services!
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Modern Animation */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary1 rounded-xl flex items-center justify-center mb-2">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
