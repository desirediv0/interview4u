"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCloudUploadAlt } from "react-icons/fa"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setIsSubmitting(true)
      const formData = new FormData(event.currentTarget)
      // Add form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000))
      event.currentTarget.reset()
      setFileName("")
      alert("Application Submitted Successfully!")
    } catch (error) {
      console.error(error)
      alert("Error submitting application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl 
                transition-all duration-300 border border-gray-100"
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
            <label htmlFor={field} className="block text-base md:text-lg font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              id={field}
              name={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
                                focus:border-[#103080] focus:ring-2 focus:ring-[#103080]/20 
                                transition-all outline-none"
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <label htmlFor="resume" className="block text-base md:text-lg font-medium text-gray-700">
            Resume
          </label>
          <div className="relative">
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
            <label
              htmlFor="resume"
              className="w-full px-4 py-3 rounded-xl border border-dashed 
                                border-gray-300 flex items-center justify-center gap-2 
                                cursor-pointer hover:border-[#103080] transition-colors"
            >
              <FaCloudUploadAlt className="text-2xl text-gray-500" />
              <span className="text-gray-500 truncate">{fileName || "Upload your resume"}</span>
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <label htmlFor="message" className="block text-base md:text-lg font-medium text-gray-700">
            Cover Letter
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 
                            focus:border-[#103080] focus:ring-2 focus:ring-[#103080]/20 
                            transition-all outline-none resize-none"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 md:py-4 bg-gradient-to-r from-[#103080] to-blue-600 
                        text-white rounded-xl text-base md:text-lg font-semibold hover:shadow-lg 
                        transition-all disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </motion.button>
      </div>
    </motion.form>
  )
}

