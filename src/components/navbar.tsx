"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const NavItems = [
  { name: "Interview", href: "/interview" },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "Testimonials", href: "/testimonials" },
    ]
  },
  { name: "About", href: "/about" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 bg-black/40 backdrop-blur-lg shadow-lg border-b-1 border-white/25" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <div className="font-bold text-2xl flex items-center">
            <span className="font-display text-white">Mock</span>
            <span className="font-display bg-gradient-to-r from-cyan-500 to-blue-600  bg-clip-text text-transparent">Master</span>

            {scrolled && (
              <motion.span

                className="hidden sm:inline-block ml-2 text-xs font-normal bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-2 py-1 rounded-full"
              >
                AI Interview Assistant
              </motion.span>
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NavItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="px-4 py-2 text-slate-300 hover:text-white transition-colors flex items-center gap-1 rounded-lg hover:bg-white/5"
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-1 w-48 bg-slate-900/90 backdrop-blur-lg border border-slate-700 rounded-lg shadow-lg overflow-hidden z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-white/5">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-800 hover:to-blue-900  text-white border-none font-semibold">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-6">
                <div className="flex flex-col gap-4">
                  {NavItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="w-full text-left px-4 py-3 text-slate-300 hover:text-white transition-colors flex items-center justify-between rounded-lg hover:bg-white/5"
                          >
                            {item.name}
                            <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-1 border-l border-slate-700 pl-4"
                              >
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-slate-400 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-slate-800 pt-6 flex flex-col gap-3">
                  <Button variant="outline" asChild className="w-full border-slate-700 text-slate-300 hover:text-white hover:border-slate-500">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none">
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Sign up</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}