"use client"

import { Button } from "@/components/ui/button"

interface WelcomeScreenProps {
  onEnter: () => void
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#ffafbd] to-[#ffc3a0] flex flex-col justify-center items-center z-50">
      <div className="text-center max-w-[600px] p-8 bg-white/90 rounded-[20px] shadow-lg animate-[pulse_2s_infinite_alternate]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ff4d79] mb-6 drop-shadow-sm">🫳Heyyy khadus😍</h1>
        <p className="text-lg mb-8 leading-relaxed">
          I built this sanctuary for you—a space where my heart speaks louder than words. Click below and let’s write
          our story together
        </p>
        <Button
          onClick={onEnter}
          className="bg-[#ff6b8b] hover:bg-[#ff4d79] text-white border-none py-4 px-8 text-lg rounded-full cursor-pointer transition-all duration-300 shadow-md hover:translate-y-[-5px] hover:shadow-lg relative overflow-hidden"
        >
          chal start kar
        </Button>
      </div>
    </div>
  )
}
