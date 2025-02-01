"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiHome } from 'react-icons/hi'
import { FaChevronRight } from 'react-icons/fa'
import Wrapper from './Wrapper'

const WaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
        <svg viewBox="0 0 1200 300" className="absolute w-full h-full">
            <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 0 100 Q 300 150 600 100 Q 900 50 1200 100 L 1200 300 L 0 300 Z"
                className="fill-blue-500/10"
            />
            <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                d="M 0 150 Q 300 200 600 150 Q 900 100 1200 150 L 1200 300 L 0 300 Z"
                className="fill-blue-600/10"
            />
        </svg>
    </div>
)

const Particles = () => (
    <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                }}
                className="particle absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/30"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                }}
            />
        ))}
    </div>
)

export default function Breadcrum({ page }) {
    return (
        <div className='relative overflow-hidden min-h-[200px] md:min-h-[250px]'>
            {/* Layered Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#103080] via-blue-600 to-[#103080]" />
                <WaveBackground />
                <Particles />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>

            <Wrapper>
                <div className='relative py-16 md:py-20'>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='flex flex-col md:flex-row justify-between items-center gap-6'
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='relative group'
                        >
                            <motion.h1 
                                className='text-4xl md:text-5xl font-bold'
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className='relative z-10 bg-gradient-to-r from-white via-blue-100 to-white 
                                    bg-clip-text text-transparent drop-shadow-lg'>
                                    {page}
                                </span>
                            </motion.h1>
                            <motion.div 
                                className='absolute -inset-x-6 -inset-y-4 bg-white/5 rounded-lg -z-10 
                                    backdrop-blur-md group-hover:bg-white/10 transition-colors duration-300'
                            />
                        </motion.div>

                        <motion.nav
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='flex items-center gap-3 px-6 py-3 rounded-full 
                                bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md 
                                border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'
                        >
                            <Link href='/' className='group'>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='text-white/90 group-hover:text-white transition-colors'
                                >
                                    <HiHome className="text-2xl" />
                                </motion.div>
                            </Link>
                            <FaChevronRight className="text-white/50 text-sm" />
                            <motion.span 
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "auto", opacity: 1 }}
                                className='text-white/90 font-medium'
                            >
                                {page}
                            </motion.span>
                        </motion.nav>
                    </motion.div>
                </div>
            </Wrapper>
        </div>
    )
}