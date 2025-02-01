"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { IoLocationOutline } from "react-icons/io5"
import { BsTelephone } from "react-icons/bs"
import Link from 'next/link'
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { FaWhatsapp } from "react-icons/fa6"
import Wrapper from './Wrapper'

const socialLinks = [
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaFacebookSquare />, href: "#", label: "Facebook" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaWhatsapp />, href: "#", label: "WhatsApp" }
]

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" }
]

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#103080] to-blue-900 text-white overflow-hidden">
         

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/">
                            <motion.h1 
                                whileHover={{ scale: 1.05 }}
                                className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 
                                    bg-clip-text text-transparent"
                            >
                                Interview4u
                            </motion.h1>
                        </Link>
                        <p className="text-blue-100 leading-relaxed">
                            Transforming technical hiring with expert-led interviews and 
                            comprehensive assessments for finding the perfect tech talent.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center 
                                        backdrop-blur-sm hover:bg-white/20 transition-colors text-xl"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <div className="space-y-3">
                            {footerLinks.map((link, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link 
                                        href={link.href}
                                        className="text-blue-100 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Newsletter</h3>
                        <p className="text-blue-100">Subscribe to our newsletter for updates and insights.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                                    backdrop-blur-sm focus:outline-none focus:border-white/40 
                                    transition-colors text-white placeholder:text-blue-200"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-lg bg-white text-[#103080] font-semibold 
                                    hover:bg-blue-50 transition-colors"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <div className="space-y-4">
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="#"
                                className="flex items-center gap-3 text-blue-100 hover:text-white 
                                    transition-colors"
                            >
                                <IoLocationOutline className="text-2xl" />
                                <span>Desire div Sector-12 Dwarka</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="tel:+919871228880"
                                className="flex items-center gap-3 text-blue-100 hover:text-white 
                                    transition-colors"
                            >
                                <BsTelephone className="text-2xl" />
                                <span>+91 9871228880</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="mailto:hello@domain.com"
                                className="flex items-center gap-3 text-blue-100 hover:text-white 
                                    transition-colors"
                            >
                                <GoMail className="text-2xl" />
                                <span>hello@domain.com</span>
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 py-6 mt-8">
                    <p className="text-center text-blue-100">
                        © Interview4u {new Date().getFullYear()} | All Rights Reserved | Design By{' '}
                        <Link 
                            href="https://desirediv.com/" 
                            target='_blank'
                            className="text-white hover:text-blue-200 transition-colors"
                        >
                            Desirediv
                        </Link>
                    </p>
                </div>
            </Wrapper>
        </footer>
    )
}