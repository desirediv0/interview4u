"use client"

import { motion } from 'framer-motion'
import { FaUserTie, FaUsers, FaClock, FaCheck } from 'react-icons/fa'
import Image from 'next/image'
import Wrapper from './Wrapper'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const serviceData = [
  {
    title: "Interview as a Service",
    icon: <FaUserTie className="text-4xl" />,
    description: "Our expert interviewers conduct thorough assessments tailored to your needs.",
    features: [
      "Customized interview processes",
      "Skilled interviewers across industries",
      "Detailed candidate evaluations",
      "Seamless hiring workflow",
    ],
    image: "/images/contract-employment.jpg",
    gradient: "from-blue-600 to-[#103080]"
  },
  {
    title: "Customised Hiring",
    icon: <FaUsers className="text-4xl" />,
    description: "Find the perfect fit with our personalized recruitment solutions.",
    features: [
      "Tailored recruitment strategies",
      "AI-powered candidate matching",
      "Comprehensive assessments",
      "Cultural fit evaluation",
    ],
    image: "/images/custom-hiring.jpg",
    gradient: "from-[#103080] to-blue-600"
  },
  {
    title: "Contract Employment",
    icon: <FaClock className="text-4xl" />,
    description: "Flexible staffing solutions for your project needs.",
    features: [
      "Quick access to professionals",
      "Flexible contract durations",
      "Reduced hiring risks",
      "Seamless onboarding process",
    ],
    image: "/images/interview-service.jpg",
    gradient: "from-blue-600 to-[#103080]"
  }
]

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Wrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-[#103080] font-semibold tracking-wider uppercase text-sm">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Transform Your <span className="text-[#103080]">Hiring</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your recruitment needs
            </p>
          </motion.div>

          {/* Services List */}
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row gap-12 items-center mb-20 
                ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <motion.div 
                className="relative w-full lg:w-1/2 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-[#103080]/20 
                  rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-[#103080]/10 
                  rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-[400px]"
                  priority={index === 0}
                />
              </motion.div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className={`inline-block p-3 rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-white"
                  >
                    {service.icon}
                  </motion.div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                        <FaCheck className="text-[#103080] flex-shrink-0" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </div>
  )
}