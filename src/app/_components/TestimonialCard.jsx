"use client"

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="relative bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 border border-white/20
                group overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr 
                from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10" />

            <div className="relative flex flex-col md:flex-row gap-8 items-center">
                {/* Image Section */}
                <div className="relative">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-32 h-32 relative rounded-2xl overflow-hidden
                            shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Gradient Border */}
                        <div className="absolute inset-0 p-1 bg-gradient-to-br from-[#103080] to-blue-500 rounded-2xl">
                            <div className="absolute inset-0 bg-white rounded-xl" />
                        </div>
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-xl relative z-10"
                        />
                    </motion.div>
                    
                    {/* Floating Quote Icon */}
                    <motion.div
                        initial={{ rotate: -15 }}
                        whileHover={{ rotate: 0, scale: 1.1 }}
                        className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br 
                            from-[#103080] to-blue-500 rounded-2xl shadow-lg
                            flex items-center justify-center transform"
                    >
                        <FaQuoteLeft className="text-white text-2xl" />
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                    <p className="text-gray-700 italic text-lg leading-relaxed relative">
                        <span className="text-[#103080] text-3xl font-serif">"</span>
                        {testimonial.content}
                        <span className="text-[#103080] text-3xl font-serif">"</span>
                    </p>
                    <motion.div 
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="border-t border-gray-100 pt-4"
                    >
                        <h4 className="text-xl font-bold bg-gradient-to-r from-[#103080] to-blue-600 
                            bg-clip-text text-transparent">
                            {testimonial.name}
                        </h4>
                        <p className="text-[#103080] font-medium">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;