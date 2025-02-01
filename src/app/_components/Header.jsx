"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { Pacifico } from "next/font/google"
import { usePathname } from 'next/navigation'

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(16, 48, 128, 0.0)", "rgba(255, 255, 255, 0.95)"]
  )
  const headerBackdrop = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])
  const headerHeight = useTransform(scrollY, [0, 100], ["100px", "80px"])
  const logoScale = useTransform(scrollY, [0, 100], [1.2, 1])
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgb(16, 48, 128)"]
  )

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4"
      style={{
        background: headerBackground,
        backdropFilter: headerBackdrop,
        height: headerHeight,
      }}
    >
      <div className=" h-full flex items-center justify-between px-6">
        <motion.div
          className="flex-shrink-0"
          style={{ scale: logoScale }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <motion.span
              style={{ color: textColor }}
              className={`text-3xl font-bold ${pacifico.variable} font-pacifico`}
            >
              Interview4u
            </motion.span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div className="relative group">
                <motion.span
                  style={{ color: textColor }}
                  className="text-base font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                )}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                    origin-left scale-x-0 transition-transform group-hover:scale-x-100"
                />
              </motion.div>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#103080] to-blue-600 text-white rounded-full 
              text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 
              hover:translate-y-[-2px]"
          >
            Book a Demo
          </motion.button>
        </nav>

        <motion.button
          style={{ color: textColor }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
        </motion.button>
      </div>

           
      
              <motion.nav
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: {
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3, staggerChildren: 0.1 }
                  },
                  closed: {
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.3 }
                  }
                }}
                className="md:hidden overflow-y-auto fixed top-[80px] left-0 right-0 
                  bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl
                  max-h-[calc(100vh-80px)]"
              >
                {/* Add backdrop overlay */}
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 -z-10"
                    onClick={() => setIsMenuOpen(false)}
                  />
                )}
      
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: -20, opacity: 0 }
                      }}
                      onClick={() => setIsMenuOpen(false)} 
                    >
                      <Link href={item.href}>
                        <motion.div 
                          className="relative py-3 px-4 rounded-lg hover:bg-gray-50 
                            transition-colors"
                          whileHover={{ x: 6 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-[#103080] font-medium">{item.label}</span>
                         
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}  // Close menu on click
                    className="mt-4 py-3 bg-gradient-to-r from-[#103080] to-blue-600 
                      text-white rounded-xl font-medium shadow-lg mx-4"
                  >
                    Book a Demo
                  </motion.button>
                </div>
              </motion.nav>
      
     
    </motion.header>
  )
}

export default Header