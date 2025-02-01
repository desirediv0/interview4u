"use client"

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
      name: "Rajan Mehra",
      role: "CEO at TechCorp",
      content:
        "Interview4u has transformed our hiring process. Their expert interviewers helped us find top talent quickly and efficiently.",
      image: "/test2.png",
      company: "TechCorp Solutions",
    },
    {
      name: "Priya Sharma",
      role: "CTO at InnovateX",
      content:
        "The technical assessment quality is outstanding. We've significantly reduced our mis-hires since partnering with them.",
      image: "/test3.png",
      company: "InnovateX Systems",
    },
    {
      name: "Tarun Singh",
      role: "COO at DevHub",
      content:
        "Their comprehensive evaluation process has helped us build a strong tech team. Highly recommended for tech hiring.",
      image: "/test1.png",
      company: "DevHub Technologies",
    },
    
  ]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState(0);

    // Navigation handlers with useCallback to prevent re-renders
    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Toggle play/pause
    const togglePlayPause = useCallback(() => {
        setIsPlaying(prev => !prev);
    }, []);

    // Auto-play effect
    useEffect(() => {
        let intervalId;

        if (isPlaying) {
            intervalId = setInterval(() => {
                handleNext();
            }, 5000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isPlaying, handleNext]);

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background Effects */}
          

            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-[#103080] 
                        font-semibold tracking-wider uppercase text-sm">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        What Our <span className="text-[#103080]">Clients</span> Say
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative h-[250px] mb-16">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction < 0 ? 200 : -200 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute w-full"
                        >
                            <TestimonialCard testimonial={testimonials[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-8">
                    <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePrev}
                        className="p-3 rounded-full bg-[#103080] text-white hover:bg-blue-700 
                            transition-all shadow-lg active:shadow-md"
                    >
                        <FaChevronLeft className="w-5 h-5" />
                    </motion.button>

                    <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={togglePlayPause}
                        className="p-3 rounded-full bg-[#103080] text-white hover:bg-blue-700 
                            transition-all shadow-lg active:shadow-md"
                    >
                        {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
                    </motion.button>

                    {/* Progress Indicators */}
                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <motion.button
                                key={idx}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-12 h-2 rounded-full transition-all duration-300
                                    ${idx === currentIndex ? 'bg-[#103080]' : 'bg-gray-300 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>

                    <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNext}
                        className="p-3 rounded-full bg-[#103080] text-white hover:bg-blue-700 
                            transition-all shadow-lg active:shadow-md"
                    >
                        <FaChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;