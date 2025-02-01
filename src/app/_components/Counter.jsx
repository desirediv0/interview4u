"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { FaClock, FaUserCheck, FaChartLine } from 'react-icons/fa'
import CountUp from 'react-countup'
import Wrapper from './Wrapper'

export default function Counter() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const Data = [
        {
            title: "reduction in time-to-hire",
            value: 97,
            gradient: "from-[#103080] to-blue-600",
            icon: <FaClock className="text-4xl" />
        },
        {
            title: "increase in number of offers",
            value: 45,
            gradient: "from-blue-600 to-[#103080]",
            icon: <FaUserCheck className="text-4xl" />
        },
        {
            title: "of companies reduced their mis-hires",
            value: 95,
            gradient: "from-[#103080] to-blue-600",
            icon: <FaChartLine className="text-4xl" />
        },
    ]

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white ">
            <Wrapper>
                {/* Heading Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-blue-50 rounded-full"
                    >
                        <span className="text-[#103080] font-semibold tracking-wider uppercase text-sm">
                            Our Impact
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Driving <span className="text-[#103080]">Success</span> Through Numbers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Measurable results that speak for themselves
                    </p>
                </motion.div>

                {/* Counter Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative group"
                        >
                            <motion.div 
                                className="relative overflow-hidden rounded-3xl bg-white shadow-lg"
                                whileHover={{ 
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                <motion.div 
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                                    initial={{ opacity: 0.05 }}
                                    whileHover={{ opacity: 0.15 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="relative p-8">
                                    <div className="flex flex-col items-center text-center gap-6">
                                        <motion.div
                                            whileHover={{ 
                                                scale: 1.1, 
                                                rotate: 360,
                                                transition: { duration: 0.5 }
                                            }}
                                            className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} 
                                                text-white shadow-lg`}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        
                                        <div className="flex items-baseline gap-1">
                                            {isInView && (
                                                <CountUp
                                                    start={0}
                                                    end={item.value}
                                                    duration={2.5}
                                                    className="text-6xl font-bold bg-gradient-to-r 
                                                        from-[#103080] to-blue-600 bg-clip-text 
                                                        text-transparent"
                                                />
                                            )}
                                            <span className="text-4xl font-bold text-blue-600">%</span>
                                        </div>
                                        
                                        <p className="text-lg font-medium text-gray-700 
                                            group-hover:text-[#103080] transition-colors">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}