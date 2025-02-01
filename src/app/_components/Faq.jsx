"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
      question: 'What services do you provide?',
      answer: 'We offer comprehensive technical interview services including coding assessments, system design evaluations, and behavioral interviews. Our expert panel ensures thorough evaluation of candidates across various technology stacks.'
  },
  {
      question: 'How does the interview process work?',
      answer: 'Our process begins with understanding your requirements, followed by matching you with suitable technical experts. Interviews are conducted online, and detailed feedback reports are provided within 24 hours.'
  },
  {
      question: 'What technologies do you cover?',
      answer: 'We cover a wide range of technologies including Frontend (React, Angular, Vue), Backend (Node.js, Python, Java), Full Stack, DevOps, and Cloud technologies. Our expert panel is regularly updated with the latest tech trends.'
  },
  {
      question: 'What are your pricing plans?',
      answer: 'We offer flexible pricing plans based on your hiring needs. This includes per-interview pricing and subscription models for bulk hiring. Contact our team for a customized quote tailored to your requirements.'
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative group"
    >
        <motion.button
            onClick={onClick}
            className="w-full p-8 text-left flex justify-between items-center gap-4
                bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-2xl
                border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500
                group-hover:border-blue-200/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#103080] to-blue-500
                    flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                    <FaQuestionCircle className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 
                    bg-clip-text text-transparent group-hover:from-[#103080] group-hover:to-blue-600">
                    {question}
                </h3>
            </div>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#103080] to-blue-500 
                    flex items-center justify-center shadow-lg transform transition-all duration-300
                    group-hover:scale-110"
            >
                {isOpen ? <FaMinus className="text-white" /> : <FaPlus className="text-white" />}
            </motion.div>
        </motion.button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="pt-6 pb-8 px-8 space-y-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-[#103080] to-blue-500 rounded-full" />
                        <p className="text-lg text-gray-600 leading-relaxed">{answer}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-3 rounded-full bg-gradient-to-r 
                            from-blue-50 to-purple-50 border border-blue-100/20 shadow-lg mb-8"
                    >
                        <span className="text-[#103080] font-bold tracking-wider uppercase">FAQs</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl font-bold mb-8">
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-[#103080] to-blue-600 
                            bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Find answers to common questions about our technical interview services 
                        and how we can help you hire the best talent.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;