"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { PiPhoneThin } from "react-icons/pi";
import Wrapper from "@/app/_components/Wrapper";
import Breadcrum from "@/app/_components/Breadcrum";

const contactMethods = [
    {
        icon: PiPhoneThin,
        title: "Phone",
        info: "+91 9871228880",
    },
    {
        icon: IoMailOutline,
        title: "Mail",
        info: "hello@domain.com",
    },
    {
        icon: IoLocationOutline,
        title: "Address",
        info: "Desire div Dwarka Sector-12",
    },
];

function ContactForm() {
    const searchParams = useSearchParams();
    const subject = searchParams.get("subject") || "NoSubject";

    const handleSubmit = (event) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData.entries());
            console.log("Form data:", formValues);
            event.target.reset();
            alert("Form Submitted Successfully");
        } catch (error) {
            console.error(error);
            alert("Error Please try Again Later");
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow
                border border-gray-100 backdrop-blur-sm"
            onSubmit={handleSubmit}
        >
            <div className="space-y-6">
                {["name", "email", "phone"].map((field, index) => (
                    <motion.div
                        key={field}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                    >
                        <label htmlFor={field} className="block text-lg font-medium text-gray-700">
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            id={field}
                            name={field}
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#103080]
                                focus:ring-2 focus:ring-[#103080]/20 transition-all outline-none"
                        />
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                >
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#103080]
                            focus:ring-2 focus:ring-[#103080]/20 transition-all outline-none resize-none"
                    />
                </motion.div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#103080] to-blue-600 text-white
                        rounded-xl text-lg font-semibold hover:shadow-lg transition-all"
                >
                    Send Message
                </motion.button>
            </div>
        </motion.form>
    );
}

export default function Component() {
    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-white">
            

            <Breadcrum page="Contact" />
            
            <Wrapper className="relative py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-blue-50 rounded-full"
                    >
                        <span className="text-[#103080] font-semibold tracking-wider uppercase text-sm">
                            Contact Us
                        </span>
                    </motion.span>
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Get in <span className="text-[#103080]">Touch</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Have questions? We'd love to hear from you. Send us a message 
                        and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.section
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="grid gap-6">
                            {contactMethods.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                                        transition-all border border-gray-100 flex items-center gap-6"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#103080] to-blue-500
                                        flex items-center justify-center shadow-lg">
                                        <item.icon className="text-white text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.info}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234193737461!2d77.04311527495526!3d28.59275028588715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1735032542396!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all"
                            />
                        </motion.div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Suspense
                            fallback={
                                <div className="h-full flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#103080]" />
                                </div>
                            }
                        >
                            <ContactForm />
                        </Suspense>
                    </motion.section>
                </div>
            </Wrapper>
        </div>
    );
}