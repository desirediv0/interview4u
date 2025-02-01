"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaUsers, FaLaptopCode, FaHandshake } from 'react-icons/fa'
import Wrapper from './Wrapper'

const stats = [
    { 
        icon: <FaUsers className="text-3xl" />,
        count: "500+",
        label: "Clients" 
    },
    { 
        icon: <FaLaptopCode className="text-3xl" />,
        count: "1000+",
        label: "Interviews" 
    },
    { 
        icon: <FaHandshake className="text-3xl" />,
        count: "98%",
        label: "Success Rate" 
    }
]

export default function Mission() {
    return (
        <div className='relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden'>
            
            <Wrapper>
                <div className='relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#103080] to-blue-500 
                            rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="relative">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image 
                                    alt='mission image' 
                                    width={600} 
                                    height={400} 
                                    src="/mssn.webp"
                                    className='w-full h-full object-cover'
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='space-y-8'
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-2 bg-blue-50 rounded-full"
                            >
                                <span className="text-[#103080] font-semibold tracking-wider uppercase text-sm">
                                    Our Mission
                                </span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold">
                                Transforming Tech
                                <span className="bg-gradient-to-r from-[#103080] to-blue-600 
                                    bg-clip-text text-transparent"> Hiring</span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                We are dedicated to revolutionizing the technical hiring process by providing 
                                expert-led interviews and comprehensive assessments. Our mission is to help 
                                companies find the perfect tech talent while ensuring a fair and efficient 
                                evaluation process.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="text-center space-y-2"
                                >
                                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br 
                                        from-[#103080] to-blue-500 flex items-center justify-center text-white">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Wrapper>
        </div>
    )
}