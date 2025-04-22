"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  image: string
  index: number
  setIndex: (index: number) => void
}

export default function ImageModal({ isOpen, onClose, image, index, setIndex }: ImageModalProps) {
  const [loading, setLoading] = useState(true)
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000007c0852309935200de4462658_conversation_id%3D67ed8dd1-6bbc-800f-a9a6-2aa04f4b6504%26message_id%3D78cc5c03-6963-4591-b0b1-f99416822a1c-WHfzt1laRt2dBdMJeOQLHPMke8DuyA.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000005a1451f6a04fcdae19b7a678_conversation_id%3D67ec9bfc-c9c8-8007-99e5-e46d24f2116c%26message_id%3Dcb082715-3374-41c2-a210-3056fa67d732-1z3b7Zk3ZwsSxC0ja4afWHkMhh4Jtq.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000007db45230a120a426a44c0108_conversation_id%3D67ec3b13-576c-800f-8dfd-946d8b9b3bd6%26message_id%3D67d65f1c-f2c5-406d-8dcc-c69c3ff573bf-BHzezvJ7muFP1hpQLUWxbTRuWZw2KP.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000a73c5230b471ec2f8787feab_conversation_id%3D67ec9bfc-c9c8-8007-99e5-e46d24f2116c%26message_id%3D9651155d-2112-4c85-89f9-83b328b51493-FuAS9d3jF9w49CT8Txxt0zNG8CfOBL.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000000ff0523095b60fd15f5570d0_conversation_id%3D67ed8f23-bc94-800f-92c8-2c0b0f728369%26message_id%3D2c90819b-34f9-4ae4-8e2c-98d1a147afe6-yYktlaq0TgWoJSdAwEqMD2s0f8tWt4.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000f20451f6a6c3724901d9cd18_conversation_id%3D67ed8f23-bc94-800f-92c8-2c0b0f728369%26message_id%3D85452407-f79a-483f-a600-5d6acacff9a4-w5vCQlWfrkkmgU9KIiXaErKNeWZCHe.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2012_57_51%20AM-5kp48lMGE3naHNhCFBg43NpTK4sjyd.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2012_52_31%20AM-3Ub2l9TNWaK0Ez1MTOwfuhGti2eApF.png",
  ]

  const captions = [
    "Your beautiful smile",
    "Your charming look",
    "Your elegant grace",
    "Your timeless beauty",
    "Your many expressions",
    "A portrait of perfection",
    "Your professional side",
    "Your radiant presence",
  ]

  useEffect(() => {
    if (isOpen) {
      setLoading(true)
    }
  }, [isOpen, index])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        setIndex((index - 1 + images.length) % images.length)
      } else if (e.key === "ArrowRight") {
        setIndex((index + 1) % images.length)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    if (isOpen) {
      document.body.style.overflow = "hidden" // Prevent scrolling
    } else {
      document.body.style.overflow = "" // Re-enable scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "" // Ensure scrolling is re-enabled on unmount
    }
  }, [isOpen, index, images.length, onClose, setIndex])

  if (!isOpen) return null

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/90 z-[1000] flex justify-center items-center transition-opacity duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Decorative hearts in the background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              opacity: 0.2,
            }}
          >
            <div
              className="text-[#ff6b8b]"
              style={{
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              ♥
            </div>
          </div>
        ))}
      </div>

      <span
        className="absolute top-4 right-4 text-white text-4xl cursor-pointer z-[1001] transition-transform duration-300 hover:scale-110"
        onClick={onClose}
      >
        &times;
      </span>

      <div className="max-w-[90%] max-h-[90%] animate-[zoomIn_0.3s_ease] relative">
        <div className="relative" style={{ width: "85vw", height: "85vh", maxWidth: "1200px", maxHeight: "800px" }}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
              <div className="w-16 h-16 border-4 border-[#ff6b8b] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={images[index] || "/placeholder.svg"}
            alt={captions[index] || "Image"}
            fill
            className="object-contain"
            onLoadingComplete={() => setLoading(false)}
          />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-center">
            <p className="text-xl font-semibold">{captions[index]}</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 w-full flex justify-between px-5 transform -translate-y-1/2 z-[1001]">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIndex((index - 1 + images.length) % images.length)
          }}
          className="bg-[#ff6b8b]/30 hover:bg-[#ff6b8b]/50 border-none text-white text-4xl p-4 cursor-pointer rounded-full transition-all duration-300"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            setIndex((index + 1) % images.length)
          }}
          className="bg-[#ff6b8b]/30 hover:bg-[#ff6b8b]/50 border-none text-white text-4xl p-4 cursor-pointer rounded-full transition-all duration-300"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}
