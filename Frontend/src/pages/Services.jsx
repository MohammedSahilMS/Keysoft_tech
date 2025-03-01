import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiFileTextLine, RiCodeSLine, RiCloseLine } from 'react-icons/ri';
import { FaStethoscope, FaFileInvoiceDollar, FaKeyboard, FaUserMd, FaBolt, FaShieldAlt, FaRegClock } from 'react-icons/fa';
import { MdMedicalServices, MdBusinessCenter, MdGavel } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900/90 backdrop-filter border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <RiCloseLine className="text-2xl" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary1 rounded-xl flex items-center justify-center">
            {service.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">{service.fullDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {service.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
            >
              {feature}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Medical Transcription",
      icon: <RiFileTextLine className="text-2xl" />,
      description: "Professional medical transcription services converting dictated recordings into accurate medical documents.",
      fullDescription: "Medical transcription is the typing of documents from dictated recordings by health professionals. Basically, any type of medical treatment, procedure, diagnostic test, etc. must be documented into a patient's permanent medical record. In order for this to be done in a legible, accurate fashion, health professionals dictate this specific information either into a digital or analog recorder and/or through the use of a phone dictation system. Transcriptionists then transcribe this information into a typed document, which is then forwarded to the dictator for review and signature. These documents then become part of a patient's permanent medical record. These documents can be discharge summaries, history and physicals, admission summaries, operative reports, expiration reports, office visits, diagnostic studies, consultations, referral letters, etc.",
      features: ["Discharge Summaries", "History & Physicals", "Operative Reports", "Diagnostic Studies", "Consultations"]
    },
    {
      title: "Medical Coding",
      icon: <MdMedicalServices className="text-2xl" />,
      description: "Expert translation of medical procedures and diagnoses into standardized codes.",
      fullDescription: "Medical coding, at it's most basic, is a little like translation. It's the coder's job to take something that's written one way (a doctor's diagnosis, for example, or a prescription for a certain medication) and translate it as accurately as possible into a numeric or alphanumeric code. For every injury, diagnosis, and medical procedure, there is a corresponding code. There are thousands and thousands of codes for medical procedures, outpatient procedures, and diagnoses. These codes act as the universal language between doctors, hospitals, insurance companies, insurance clearinghouses, government agencies, and other health-specific organizations.",
      features: ["ICD Coding", "CPT Coding", "Diagnosis Coding", "Procedure Coding", "Compliance"]
    },
    {
      title: "Medical Billing",
      icon: <FaFileInvoiceDollar className="text-2xl" />,
      description: "Comprehensive medical billing services ensuring proper reimbursement for healthcare providers.",
      fullDescription: "On one level, medical billing is as simple as it sounds: medical billers take the information from the medical coder and make a bill for the insurance company, called a claim. The medical biller takes the codes, which show what kind of visit this is, what symptoms the patient shows, what the doctor's diagnosis is, and what the doctor prescribes, and creates a claim out of these using a form or a type of software. The biller then sends this claim to the insurance company, which evaluates and returns it. The biller then evaluates this returned claim and figures out how much of the bill the patient owes, after the insurance is taken out.",
      features: ["Claims Processing", "Insurance Verification", "Payment Posting", "Collections", "Reporting"]
    },
    {
      title: "Business Transcription",
      icon: <MdBusinessCenter className="text-2xl" />,
      description: "High-quality transcription services for all business documentation needs.",
      fullDescription: "Transcription for Everyone, we know what makes or breaks a business. Our team is made up of professionals with training and expertise in our field. We strictly use only university educated editors and typists who provide unmatched excellence. We beat our competition with a proven 99.997% accuracy rating each and every time. We offer a number of pricing plans to you, allowing you to know ahead of time that your deadlines will be met and that costs are within your budget. We pride ourselves on using the most advanced technologies to increase productivity and provide high quality at a cost of 40% less than what you are used to paying.",
      features: ["Meetings", "Conferences", "Interviews", "Board Meetings", "Speeches"]
    },
    {
      title: "Legal Transcription",
      icon: <MdGavel className="text-2xl" />,
      description: "On-demand legal transcription services with maximum accuracy and confidentiality.",
      fullDescription: "As we offer an on-demand legal transcription service, we are available for any amount of typing at any time with no minimum charge or monthly fee, which suits our legal clients and their ever-changing workload. Weekend typing support is also available, avoiding the difficulties incurred from scheduling an on-site weekend typist in the chambers. We provide a simple, cost-effective and reliable service which allows clients to run their offices with maximum efficiency. We work with all manner of legal and business professionals, including: Solicitors, Attorneys, Barristers, Management consultants, Insurance firms",
      features: ["Court Proceedings", "Depositions", "Legal Documents", "Client Meetings", "Case Notes"]
    },
    {
      title: "Data Entry",
      icon: <FaKeyboard className="text-2xl" />,
      description: "Comprehensive data entry services for efficient document processing and management.",
      fullDescription: "Spiraling data volume is a common issue in any growing firm. Data processing delays impact customer satisfaction, which further leads to higher customer attrition and have a negative long-term effect on revenues and growth. Plus, the overall data entry costs increase significantly. The handling cost of documents comes to about 6% to 15% of all the revenues of a company. About 85% of all archived documents never leave the filed documents. At Phoenix Cybertech, our services include document scanning and a combination of key-from-image and advanced data capture and recognition technologies such as OCR (Optical Character Recognition) and ICR (Intelligent Character Recognition).",
      features: ["Volume Data Entry", "PDF Conversion", "Scanning & OCR", "Catalog Conversion", "Data Analysis"]
    },
    {
      title: "Medical Scribes",
      icon: <FaUserMd className="text-2xl" />,
      description: "Professional medical scribe services for emergency departments and clinics.",
      fullDescription: "Phoenix Cybertech provides scribe services for emergency departments, inpatient settings, and outpatient clinics. Whether you're looking to establish a new scribe program, enhance an existing one, or transition to a new vendor, we will work with you to customize our services to meet your organization's unique needs. Our superior scribe training and certification programs, which include rigorous and continuing education, ensure that our scribes are well-trained for any location and situation. Elite staff members, under supervision of our Compliance Director, stay up to date with current medical legislation and ongoing changes in the medical industry.",
      features: ["EMR Documentation", "Patient Encounters", "Clinical Support", "Real-time Charting", "ICD-10 Compliance"]
    },
    {
      title: "Medical Claim Process",
      icon: <FaStethoscope className="text-2xl" />,
      description: "Streamlined medical claims processing to maximize revenue and minimize rejections.",
      fullDescription: "Outsourcing your medical claims requirements frees you of the hassles involved and lets you shift your attention to patient care. Phoenix Cybertech acts as your medical claims processor and can help you increase your revenue by handling all the activities involved in medical claims processing. We are HIPAA compliant and our claims processing and submission services fits easily into any medical billing software. Insurance companies have a dubious distinction of rejecting most, if not all, medical claims. Medical claims processing is important for healthcare BPO providers in getting paid for the services provided.",
      features: ["Claims Submission", "EOB Processing", "Follow-up", "Denial Management", "Status Tracking"]
    },
    {
      title: "Software Development",
      icon: <RiCodeSLine className="text-2xl" />,
      description: "Custom software development solutions for digital transformation.",
      fullDescription: "We don't just build software. We invent software. When you engage our software development services you are investing in more than just a software system. You are investing in a digital transformation of your business and the way you engage with your customers. Our clients come to us, and stay with us, because we have the knowledge and experience to create a software system that will provide enduring competitive advantage. To us, creating software is an art, not a thousand lines of code. To you, the system is a valuable asset that will propel your business ahead of your competitors.",
      features: ["Custom Applications", "System Modernization", "Digital Transformation", "Agile Development", "Technical Support"]
    }
  ];

  const features = [
    {
      icon: <FaRegClock className="text-2xl text-white" />,
      title: "FAST",
      description: "On receipt of audio recording and stipulated payment, our clock starts ticking and customers can remain assured of accurate transcript output within 24 to 48 hours"
    },
    {
      icon: <FaBolt className="text-2xl text-white" />,
      title: "COST EFFECTIVE",
      description: "Phoenix Cybertech offers the most cost effective solution to meet all your transcription needs and multi-stage review process ensures 98% accuracy throughout the job"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "SECURE & CONFIDENTIAL",
      description: "All Phoenix Cybertech systems and protocols meet or exceed HIPAA compliance standards at every step of the medical transcription process"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Original Hero Section */}
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
              <div className="px-6 py-2 rounded-full border border-white/10 bg-white/10">
                <span className="text-white/90 text-sm font-medium">Our Expertise</span>
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

      {/* Company Introduction Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/95 to-gray-900"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary1">
              WE ARE PHOENIX CYBERTECH
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Phoenix Cybertech has been at the helm of providing quality transcription and is one of the few companies which has been stable and steadily growing in the transcription industry over the past decade. Phoenix has become the only answer to the questions of quality work and effective turnaround time (TAT).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-20">
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
                className="group h-full"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative backdrop-filter bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col min-h-[320px]">
                  {/* Icon */}
                  <div className="absolute -top-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary1 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 mt-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>
                  </div>

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

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>

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