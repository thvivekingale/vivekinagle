"use client"

import { useState } from "react"
import WelcomeScreen from "@/components/welcome-screen"
import HeartsAnimation from "@/components/hearts-animation"
import MainContent from "@/components/main-content"
import ImageModal from "@/components/image-modal"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleEnter = () => {
    setShowWelcome(false)
    setTimeout(() => {
      setShowContent(true)
    }, 500)
  }

  const openModal = (image: string, index: number) => {
    setCurrentImage(image)
    setCurrentIndex(index)
    setModalOpen(true)
  }

  return (
    <main>
      {showWelcome && <WelcomeScreen onEnter={handleEnter} />}
      <HeartsAnimation active={!showWelcome} />
      <MainContent visible={showContent} onImageClick={openModal} />
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={currentImage}
        index={currentIndex}
        setIndex={setCurrentIndex}
      />
    </main>
  )
}
