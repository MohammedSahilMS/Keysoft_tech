import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Joe",
      position: "CEO",
      company: "TechCorp Solutions",
      image: "/path/to/image1.jpg",
      quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
      rating: 5
    },
    {
        name: "John Joe",
        position: "CEO",
        company: "TechCorp Solutions",
        image: "/path/to/image1.jpg",
        quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
        rating: 5
      },
      {
        name: "John Joe",
        position: "CEO",
        company: "TechCorp Solutions",
        image: "/path/to/image1.jpg",
        quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
        rating: 5
      },
      {
        name: "John Joe",
        position: "CEO",
        company: "TechCorp Solutions",
        image: "/path/to/image1.jpg",
        quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
        rating: 5
      },
      {
        name: "John Joe",
        position: "CEO",
        company: "TechCorp Solutions",
        image: "/path/to/image1.jpg",
        quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
        rating: 5
      },
      {
        name: "John Joe",
        position: "CEO",
        company: "TechCorp Solutions",
        image: "/path/to/image1.jpg",
        quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
        rating: 5
      },
      {
        name: "John Joe",
        position: "CEO",
        company: "TechCorp Solutions",
        image: "/path/to/image1.jpg",
        quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
        rating: 5
      },
      {
        name: "John Joe",
        position: "CEO",
        company: "TechCorp Solutions",
        image: "/path/to/image1.jpg",
        quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit est sit tenetur odit dolore explicabo eius sapiente, a ea quisquam earum repellat obcaecati incidunt delectus iusto. Doloremque, cupiditate eius!",
        rating: 5
      },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Get previous, current, and next testimonials for the carousel
  const getCurrentTestimonials = () => {
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    return {
      prev: testimonials[prev],
      current: testimonials[currentIndex],
      next: testimonials[next]
    };
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
                <span className="text-white/80 text-sm font-medium">Client Testimonials</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
            >
              Success Stories
            </motion.h1>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Testimonials Slider Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative flex items-center">
              {/* Previous Testimonial (Dimmed) */}
              <motion.div
                key={`prev-${currentIndex}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.3, x: 0 }}
                className="hidden md:block w-1/3 transform scale-90 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <p className="text-sm text-gray-400 italic mb-4">
                  "{getCurrentTestimonials().prev.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={getCurrentTestimonials().prev.image}
                    alt={getCurrentTestimonials().prev.name}
                    className="w-10 h-10 rounded-full object-cover border border-primary/30"
                  />
                  <div className="ml-3">
                    <h4 className="text-white/70 text-sm font-medium">
                      {getCurrentTestimonials().prev.name}
                    </h4>
                    <p className="text-primary/70 text-xs">
                      {getCurrentTestimonials().prev.position}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Current Testimonial */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-2/3 backdrop-blur-sm bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 z-20"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary to-secondary1 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-double-quotes-l text-2xl text-white"></i>
                  </div>

                  <div className="text-center">
                    <p className="text-xl md:text-2xl text-gray-300 italic mb-8">
                      "{getCurrentTestimonials().current.quote}"
                    </p>

                    <div className="flex items-center justify-center mb-6">
                      <img
                        src={getCurrentTestimonials().current.image}
                        alt={getCurrentTestimonials().current.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="ml-4 text-left">
                        <h4 className="text-white font-semibold text-lg">
                          {getCurrentTestimonials().current.name}
                        </h4>
                        <p className="text-primary">
                          {getCurrentTestimonials().current.position}
                        </p>
                        <p className="text-gray-400">
                          {getCurrentTestimonials().current.company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(getCurrentTestimonials().current.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-primary"></i>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next Testimonial (Dimmed) */}
              <motion.div
                key={`next-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.3, x: 0 }}
                className="hidden md:block w-1/3 transform scale-90 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <p className="text-sm text-gray-400 italic mb-4">
                  "{getCurrentTestimonials().next.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={getCurrentTestimonials().next.image}
                    alt={getCurrentTestimonials().next.name}
                    className="w-10 h-10 rounded-full object-cover border border-primary/30"
                  />
                  <div className="ml-3">
                    <h4 className="text-white/70 text-sm font-medium">
                      {getCurrentTestimonials().next.name}
                    </h4>
                    <p className="text-primary/70 text-xs">
                      {getCurrentTestimonials().next.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 transition-colors flex items-center justify-center group"
              >
                <i className="ri-arrow-left-line text-white group-hover:text-primary transition-colors"></i>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 transition-colors flex items-center justify-center group"
              >
                <i className="ri-arrow-right-line text-white group-hover:text-primary transition-colors"></i>
              </button>
            </div>

            {/* Testimonial Counter */}
            <div className="text-center mt-4 text-gray-400">
              <span className="text-primary">{currentIndex + 1}</span>
              <span> / {testimonials.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-primary text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;