"use client"

import { motion } from 'framer-motion'
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
    }
}

export default function AboutUs({ page = "" }) {
        const features = [
        {
            icon: <FaUsers className="text-4xl" />,
            title: "Expert Team",
            description: "Seasoned professionals with decade-long industry experience"
        },
        { 
            icon: <FaLightbulb className="text-4xl" />,
            title: "Innovative Approach",
            description: "Modern assessment methods for better candidate evaluation"
        },
        {
            icon: <FaHandshake className="text-4xl" />,
            title: "Trusted Partners",
            description: "Strong relationships with leading tech companies"
        },
        {
            icon: <FaChartLine className="text-4xl" />,
            title: "Comprehensive Solutions",
            description: "Complete recruitment solutions with data-driven insights",
        }
    ]

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-16">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <section className="space-y-8">
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
                                <span className="text-[#103080] font-semibold tracking-wider uppercase text-sm">
                                    About Us
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Transform Your 
                                <span className="text-[#103080]"> Hiring </span> 
                                Process
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We specialize in conducting technical interviews that help companies 
                                find the perfect talent. Our expert interviewers ensure thorough 
                                assessment of candidates' skills and cultural fit.
                            </p>

                            {page === 'home' && (
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link href="/about">
                                        <button className="bg-[#103080] hover:bg-[#1a2f65] text-white 
                                            px-10 py-4 rounded-full font-medium transition-all 
                                            shadow-lg hover:shadow-xl">
                                            Learn More
                                        </button>
                                    </Link>
                                </motion.div>
                            )}
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div 
                                variants={containerVariants}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8"
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            y: -8,
                                            scale: 1.02,
                                            transition: { type: "spring", stiffness: 400 }
                                        }}
                                        className="group relative p-8 bg-gradient-to-br from-white to-blue-50/50
                                            rounded-3xl shadow-lg hover:shadow-2xl backdrop-blur-sm
                                            border border-white/20 transition-all duration-300"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full bg-white/5 
                                            rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform" 
                                        />
                                        
                                        <motion.div 
                                            className="relative z-10 flex flex-col items-start"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="p-4 bg-gradient-to-br from-[#103080] to-blue-600 
                                                rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <motion.div
                                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                                    transition={{ duration: 0.5 }}
                                                    className="text-white text-3xl"
                                                >
                                                    {feature.icon}
                                                </motion.div>
                                            </div>
                            
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 
                                                group-hover:text-[#103080] transition-colors">
                                                {feature.title}
                                            </h3>
                            
                                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>

                        
                        </div>
                    </section>

                                      <motion.div
                        variants={itemVariants}
                        className="relative hidden lg:block h-[700px]"
                    >
                        {/* Background decorative elements */}
                        <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform rotate-2" />
                        
                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent 
                            to-blue-600/20 rounded-3xl z-10" />
                        
                        {/* Main image */}
                        <Image
                            alt="About Interview4u"
                            width={500}
                            height={700}
                            src="/abs.jpg"
                            className="rounded-3xl shadow-2xl relative z-[5] object-cover w-full h-[700px]"
                            priority
                        />
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 
                            rounded-full opacity-20 blur-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 
                            rounded-full opacity-20 blur-2xl" />
                        
                        {/* Glass effect overlay */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] 
                            rounded-3xl z-[6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}