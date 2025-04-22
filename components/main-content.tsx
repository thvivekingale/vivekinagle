"use client"

import { useEffect, useRef } from "react"
import IntroSection from "./intro-section"
import GallerySection from "./gallery-section"
import LetterSection from "./letter-section"

interface MainContentProps {
  visible: boolean
  onImageClick: (image: string, index: number) => void
}

export default function MainContent({ visible, onImageClick }: MainContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return

      const scrollPosition = window.scrollY
      const intro = document.getElementById("intro")

      if (intro && scrollPosition > 50) {
        intro.style.opacity = Math.max(1 - scrollPosition / 500, 0).toString()
      } else if (intro) {
        intro.style.opacity = "1"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={contentRef}
      className={`transition-all duration-1000 relative z-10 ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="max-w-[1000px] mx-auto p-4 md:p-8 bg-[#fffaf5] shadow-lg relative min-h-screen border-l border-r border-[#ffb8c6]">
        <IntroSection />
        <GallerySection onImageClick={onImageClick} />
        <LetterSection />
      </div>
    </div>
  )
}
