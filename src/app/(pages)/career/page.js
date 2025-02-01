"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { FaBriefcase, FaClock, FaLaptop, FaGraduationCap } from "react-icons/fa"
import Wrapper from "@/app/_components/Wrapper"
import ContactForm from "./ContactForm"
import Breadcrum from "@/app/_components/Breadcrum"

const benefits = [
  { title: "Flexible Hours", description: "Work-life balance friendly schedule", icon: FaClock },
  { title: "Remote Work", description: "Work from anywhere options available", icon: FaLaptop },
  { title: "Growth", description: "Career advancement opportunities", icon: FaBriefcase },
  { title: "Learning", description: "Continuous learning & development", icon: FaGraduationCap },
]

export default function Career() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full 
                    mix-blend-multiply filter blur-3xl animate-blob"
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full 
                    mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        />
      </div>

      <Breadcrum page="Career" />

      <Wrapper className="relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12 md:mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-[#103080] font-semibold tracking-wider uppercase text-sm">Join Our Team</span>
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Build Your <span className="text-[#103080]">Career</span> With Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Join our dynamic team and be part of revolutionizing the technical hiring process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                                        transition-all border border-gray-100 flex flex-col items-center text-center"
                >
                  <benefit.icon className="text-4xl text-[#103080] mb-4" />
                  <h3 className="text-xl font-semibold text-[#103080] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Suspense
              fallback={
                <div className="h-full flex items-center justify-center">
                  <div
                    className="animate-spin rounded-full h-12 w-12 
                                        border-t-2 border-b-2 border-[#103080]"
                  />
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  )
}

