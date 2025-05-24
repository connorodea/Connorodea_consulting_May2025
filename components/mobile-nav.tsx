"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? "unset" : "hidden"
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-custom overflow-y-auto">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={closeMenu} className="text-white">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="mt-8 px-6 pb-16">
            <ul className="space-y-6">
              <li>
                <Link
                  href="#services"
                  onClick={closeMenu}
                  className="text-white text-2xl font-semibold hover:text-caribbean"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={closeMenu}
                  className="text-white text-2xl font-semibold hover:text-caribbean"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#case-studies"
                  onClick={closeMenu}
                  className="text-white text-2xl font-semibold hover:text-caribbean"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  onClick={closeMenu}
                  className="text-white text-2xl font-semibold hover:text-caribbean"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  onClick={closeMenu}
                  className="text-white text-2xl font-semibold hover:text-caribbean"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={closeMenu}
                  className="text-white text-2xl font-semibold hover:text-caribbean"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="text-white text-2xl font-semibold hover:text-caribbean"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
