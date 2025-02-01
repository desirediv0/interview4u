"use client"

import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { GiCheckMark } from "react-icons/gi";
import { LuLoader } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import { useInView } from 'react-intersection-observer';


const services = [
  {
      number: "01",
      title: "Technical Interviews",
      description: "Expert-led technical assessments across programming languages and frameworks",
      icon: <GrUserExpert className="text-4xl text-white" />,
      gradient: "from-[#103080] to-blue-600"
  },
  {
      number: "02",
      title: "System Design",
      description: "Comprehensive evaluation of architectural and system design capabilities",
      icon: <LuLoader className="text-4xl text-white" />,
      gradient: "from-blue-600 to-[#103080]"
  },
  {
      number: "03",
      title: "Behavioral Assessment",
      description: "In-depth analysis of problem-solving and team collaboration skills",
      icon: <GiCheckMark className="text-4xl text-white" />,
      gradient: "from-[#103080] to-blue-600"
  }
];


const ServiceStandOut = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r 
                    from-blue-300/20 to-purple-300/20 rounded-full mix-blend-multiply 
                    filter blur-3xl animate-blob" />
                <div className="absolute -bottom-8 right-1/4 w-[600px] h-[600px] bg-gradient-to-r 
                    from-indigo-300/20 to-blue-300/20 rounded-full mix-blend-multiply 
                    filter blur-3xl animate-blob animation-delay-2000" />
                
                {/* Floating Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 bg-blue-500/10 rounded-full"
                            animate={{
                                y: ['0%', '100%'],
                                x: i % 2 === 0 ? ['-100%', '100%'] : ['100%', '-100%'],
                                scale: [1, 0.5, 1],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.2,
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Header with enhanced animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center space-y-6 mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                            rounded-full backdrop-blur-sm border border-white/20"
                    >
                        <span className="text-[#103080] font-semibold tracking-wider uppercase text-sm">
                            Why Choose Us
                        </span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl font-bold">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-r from-[#103080] to-blue-600 
                                bg-clip-text text-transparent inline-block"
                        >
                            Our Services
                        </motion.span>{' '}
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-gray-900"
                        >
                            Stand Out
                        </motion.span>
                    </h2>
                </motion.div>

                {/* Enhanced Service Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} inView={inView} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// New ServiceCard Component with enhanced 3D effect
const ServiceCard = ({ service, index, inView }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
    const rotateY = useSpring(0, { stiffness: 100, damping: 30 });

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        rotateX.set(xPct * 10);
        rotateY.set(yPct * 10);
    }

    function handleLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            className="relative group perspective"
        >
            <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl 
                shadow-lg transition-all duration-300 transform-gpu
                hover:shadow-2xl border border-white group-hover:border-blue-100">
                
                {/* Service number with enhanced design */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br 
                    from-[#103080] to-blue-500 rounded-xl rotate-12 group-hover:rotate-0 
                    transition-transform duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{service.number}</span>
                </div>

                {/* Enhanced icon container */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} 
                        p-5 shadow-lg transform-gpu transition-transform duration-300
                        group-hover:shadow-xl`}
                >
                    {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 
                    group-hover:text-[#103080] transition-colors">
                    {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 
                    transition-colors">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
};

export default ServiceStandOut;