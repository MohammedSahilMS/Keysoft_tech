import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className='fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-50'>
      <div className='relative'>
        {/* Main Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Outer Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center"
          >
            {/* Middle Circle */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center"
            >
              {/* Inner Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center"
              >
                {/* Company Logo or Initial */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-primary to-secondary1 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-2xl">K</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Dots */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-2, 2, -2],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>

        {/* Glowing Effects */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary1/20 rounded-full blur-3xl"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white/70 text-sm font-medium tracking-wider"
        >
          LOADING
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;