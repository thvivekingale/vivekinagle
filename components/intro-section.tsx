export default function IntroSection() {
  return (
    <section id="intro" className="h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl md:text-5xl text-[#ff4d79] mb-8 opacity-0 translate-y-[30px] animate-[fadeInUp_1.5s_forwards]">
        The Start of Something Beautiful ✌️
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-0 translate-y-[30px] animate-[fadeInUp_1.5s_0.5s_forwards]">
        Scroll down to begin our journey...(click on photos to enlarge)
      </p>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-4xl text-[#ff6b8b] animate-[bounce_2s_infinite] opacity-0 animation-delay-[2s] animation-fill-mode-forwards">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}
