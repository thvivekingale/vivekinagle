"use client"

import { useEffect, useRef } from "react"

interface HeartsAnimationProps {
  active: boolean
}

export default function HeartsAnimation({ active }: HeartsAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    const container = containerRef.current
    const numberOfHearts = 30

    // Clear any existing hearts
    container.innerHTML = ""

    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement("div")
      heart.classList.add("heart")

      // Random positioning and styling
      const left = Math.random() * 100
      const delay = Math.random() * 15
      const duration = 15 + Math.random() * 15
      const size = Math.random() * 15 + 10
      const opacity = Math.random() * 0.5 + 0.3

      heart.style.left = `${left}%`
      heart.style.animationDelay = `${delay}s`
      heart.style.animationDuration = `${duration}s`
      heart.style.width = `${size}px`
      heart.style.height = `${size}px`
      heart.style.opacity = `${opacity}`

      // Random color variations
      const hue = Math.random() * 20 + 340 // Pink to red hues
      heart.style.backgroundColor = `hsla(${hue}, 100%, 75%, ${opacity})`

      // Set before and after pseudo-elements size
      const style = document.createElement("style")
      style.innerHTML = `
        .heart:nth-child(${i + 1})::before,
        .heart:nth-child(${i + 1})::after {
          width: ${size}px;
          height: ${size}px;
          background-color: hsla(${hue}, 100%, 75%, ${opacity});
        }
        .heart:nth-child(${i + 1})::before {
          top: -${size / 2}px;
        }
        .heart:nth-child(${i + 1})::after {
          left: -${size / 2}px;
        }
      `

      document.head.appendChild(style)
      container.appendChild(heart)
    }
  }, [active])

  return <div ref={containerRef} className="hearts-container" />
}
