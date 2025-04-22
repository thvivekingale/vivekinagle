"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface GallerySectionProps {
  onImageClick: (image: string, index: number) => void
}

export default function GallerySection({ onImageClick }: GallerySectionProps) {
  const [images] = useState([
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000007c0852309935200de4462658_conversation_id%3D67ed8dd1-6bbc-800f-a9a6-2aa04f4b6504%26message_id%3D78cc5c03-6963-4591-b0b1-f99416822a1c-WHfzt1laRt2dBdMJeOQLHPMke8DuyA.png",
      caption: "Your beautiful smile",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000005a1451f6a04fcdae19b7a678_conversation_id%3D67ec9bfc-c9c8-8007-99e5-e46d24f2116c%26message_id%3Dcb082715-3374-41c2-a210-3056fa67d732-1z3b7Zk3ZwsSxC0ja4afWHkMhh4Jtq.png",
      caption: "Your charming look",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000007db45230a120a426a44c0108_conversation_id%3D67ec3b13-576c-800f-8dfd-946d8b9b3bd6%26message_id%3D67d65f1c-f2c5-406d-8dcc-c69c3ff573bf-BHzezvJ7muFP1hpQLUWxbTRuWZw2KP.png",
      caption: "Your elegant grace",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000a73c5230b471ec2f8787feab_conversation_id%3D67ec9bfc-c9c8-8007-99e5-e46d24f2116c%26message_id%3D9651155d-2112-4c85-89f9-83b328b51493-FuAS9d3jF9w49CT8Txxt0zNG8CfOBL.png",
      caption: "Your timeless beauty",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000000ff0523095b60fd15f5570d0_conversation_id%3D67ed8f23-bc94-800f-92c8-2c0b0f728369%26message_id%3D2c90819b-34f9-4ae4-8e2c-98d1a147afe6-yYktlaq0TgWoJSdAwEqMD2s0f8tWt4.png",
      caption: "Your many expressions",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000f20451f6a6c3724901d9cd18_conversation_id%3D67ed8f23-bc94-800f-92c8-2c0b0f728369%26message_id%3D85452407-f79a-483f-a600-5d6acacff9a4-w5vCQlWfrkkmgU9KIiXaErKNeWZCHe.png",
      caption: "A portrait of perfection",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2012_57_51%20AM-5kp48lMGE3naHNhCFBg43NpTK4sjyd.png",
      caption: "Your professional side",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2012_52_31%20AM-3Ub2l9TNWaK0Ez1MTOwfuhGti2eApF.png",
      caption: "Your radiant presence",
    },
  ])

  // Function to create heart particles on hover
  const createHeartParticles = (container: HTMLElement) => {
    // Clear existing particles
    const existingParticles = container.querySelectorAll(".heart-particle")
    existingParticles.forEach((particle) => particle.remove())

    // Create new particles
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("div")
      particle.classList.add("heart-particle")

      // Random positioning
      const size = Math.random() * 15 + 5
      const left = Math.random() * 100
      const top = Math.random() * 100
      const delay = Math.random() * 2
      const duration = 2 + Math.random() * 2

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${left}%`
      particle.style.top = `${top}%`
      particle.style.animationDelay = `${delay}s`
      particle.style.animationDuration = `${duration}s`

      container.appendChild(particle)
    }
  }

  // Handle mouse enter for heart particles
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.querySelector(".particle-container")
    if (container) {
      createHeartParticles(container as HTMLElement)
    }
  }

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl text-[#ff4d79] mb-12 relative inline-block">
        The World Looks Better With You In It🫂
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[100px] h-[3px] bg-[#ff6b8b] rounded-md"></span>
      </h2>

      <div className="relative w-full h-[350px] my-8 overflow-hidden">
        <div className="gallery-track flex w-[calc(300px*16)] absolute left-0 animate-[scroll_40s_linear_infinite] hover:animation-play-state-paused">
          <style jsx global>{`
            .gallery-track:hover .gallery-item:not(:hover) img {
              filter: blur(3px) brightness(0.7);
              transform: scale(0.95);
            }
            
            .heart-particle {
              position: absolute;
              background-color: #ff6b8b;
              transform: rotate(45deg);
              opacity: 0;
              pointer-events: none;
              animation: floatHeart 3s ease-in-out forwards;
              z-index: 5;
            }
            
            .heart-particle::before,
            .heart-particle::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: #ff6b8b;
            }
            
            .heart-particle::before {
              top: -50%;
              left: 0;
            }
            
            .heart-particle::after {
              top: 0;
              left: -50%;
            }
            
            @keyframes floatHeart {
              0% {
                transform: rotate(45deg) translateY(0) scale(0);
                opacity: 0;
              }
              20% {
                opacity: 0.8;
              }
              100% {
                transform: rotate(45deg) translateY(-100px) scale(1);
                opacity: 0;
              }
            }
            
            .particle-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 2;
              overflow: hidden;
            }
          `}</style>

          {/* Original images */}
          {images.map((image, index) => (
            <div
              key={`img-${index}`}
              className="gallery-item w-[300px] h-[350px] px-[15px] transition-all duration-500 relative"
              onClick={() => onImageClick(image.src, index)}
              onMouseEnter={handleMouseEnter}
            >
              <div className="relative w-full h-full cursor-pointer group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  fill
                  className="object-cover rounded-[10px] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-[10px] opacity-0 translate-y-[20px] transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0">
                  {image.caption}
                </div>
                <div className="particle-container"></div>
              </div>
            </div>
          ))}

          {/* Duplicate images for seamless loop */}
          {images.map((image, index) => (
            <div
              key={`img-dup-${index}`}
              className="gallery-item w-[300px] h-[350px] px-[15px] transition-all duration-500 relative"
              onClick={() => onImageClick(image.src, index)}
              onMouseEnter={handleMouseEnter}
            >
              <div className="relative w-full h-full cursor-pointer group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  fill
                  className="object-cover rounded-[10px] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-[10px] opacity-0 translate-y-[20px] transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0">
                  {image.caption}
                </div>
                <div className="particle-container"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ff6b8b] to-transparent my-12 opacity-50"></div>
    </section>
  )
}
