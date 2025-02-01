"use client"
import { motion } from "framer-motion"
import Wrapper from "./Wrapper"
import TechShowcase from "./Tech"

export default function Skills() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#103080] via-blue-800 to-blue-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Larger, More Visible Blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/30 rounded-full mix-blend-overlay filter blur-[100px] animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full mix-blend-overlay filter blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-pink-400/20 rounded-full mix-blend-overlay filter blur-[120px] animate-blob animation-delay-4000" />

        {/* Floating Particles */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50" />
      </div>

      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-white space-y-8 text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm 
                            border border-white/20 shadow-lg shadow-blue-500/20"
          >
            <span className="text-white font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          </motion.div>

                  <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-white via-blue-200 to-white relative z-10
                filter drop-shadow-lg"
        >
            <motion.span
                className="inline-block"
                initial={{ opacity: 1 }} 
                
                transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    duration: 0.3 
                }}
            >
                Unparalleled
            </motion.span>{" "}
            <motion.span
                className="inline-block"
                initial={{ opacity: 1 }} 
                
                transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    duration: 0.3 
                }}
            >
                Topic Coverage
            </motion.span>
        </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light
                            leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We&apos;ve got every technical skill specialization,{" "}
            <span className="font-medium text-white">customized just for you</span>
          </motion.p>

          {/* Decorative Elements */}
          <div
            className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r 
                        from-blue-500/20 to-transparent blur-3xl rounded-full"
          />
          <div
            className="absolute top-1/3 right-0 w-40 h-40 bg-gradient-to-l 
                        from-purple-500/20 to-transparent blur-3xl rounded-full"
          />
        </motion.div>

        {/* Tech Showcase with Enhanced Container */}
        <div
          className="relative backdrop-blur-sm rounded-3xl p-1 
                    bg-gradient-to-b from-white/10 to-white/5"
        >
          <TechShowcase />
        </div>
      </Wrapper>
    </div>
  )
}

