"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';

const Cta = () => {
  return (
    <section className="relative bg-[#103080] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-400/10 to-transparent transform rotate-45" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-purple-400/10 to-transparent transform -rotate-45" />
      </div>

      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
          style={{
            left: `${30 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
        >
          <div className={`w-24 h-24 rounded-${i === 1 ? 'full' : 'xl'} border-2 border-white/10 
            backdrop-blur-sm rotate-45 bg-gradient-to-br from-white/5 to-white/10`} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm"
            >
              <span className="text-white/90 font-medium">Ready to Get Started?</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Transform Your
              <div className="relative inline-block ml-4">
                <span className="relative z-10 bg-gradient-to-r from-blue-200 to-white 
                  bg-clip-text text-transparent">
                  Hiring Process
                </span>
                <div className="absolute inset-x-0 bottom-0 h-3 bg-blue-400/20 -skew-x-12" />
              </div>
            </h2>

            <p className="text-xl text-white/80 max-w-xl">
              Join leading companies who trust our expert interviewers to find their next 
              tech superstar. Start your journey today.
            </p>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 
              rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500" />
            
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="space-y-6">
                <div className="flex flex-col gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-white rounded-xl font-semibold text-[#103080] 
                        shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 
                        transition-all duration-300 relative overflow-hidden group"
                    >
                      
                      <span className="relative flex items-center justify-center gap-2">
                        Schedule a Demo
                        <MdKeyboardArrowRight size={24} />
                      </span>
                    </motion.button>
                  </Link>

                  <Link href="/service">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-transparent rounded-xl font-semibold text-white 
                        border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Services
                        <MdKeyboardArrowRight size={24} />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;