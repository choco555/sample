import React from "react";
import Prism from "../Prism";
import ChatBox from "../ChatBox";
import ShinyText from "@/components/ShinyText";
// import FluidGlass from "../FluidGlass";

const Hero: React.FC = () => {
  const handleChatSubmit = (message: string) => {
    console.log('Chat message:', message);
    // Add your chat logic here
  };

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      {/* Background Prism Animation */}
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* ShinyText - Center */}
      <div className="absolute inset-0 flex items-center justify-center z-20 bottom-35 px-8">
        <div
          className="text-center w-full text-[12rem] max-[1000px]:text-[clamp(4rem,16vw,12rem)] mx-auto max-w-[1000px] max-[1000px]:max-w-[calc(100vw-60px)]"
          style={{
            lineHeight: '1',
            letterSpacing: '-0.02em'
          }}
        >
          <ShinyText
            text="Sample"
            disabled={false}
            speed={3}
            className='font-bold'
          />
          {/* <FluidGlass mode="lens" lensProps={{ ior: 1.15, thickness: 2 }}>
            Some Content
          </FluidGlass> */}
        </div>
      </div>

      {/* Chat Box - Centered */}
      <div className="absolute inset-0 z-30 flex items-center justify-center top-100">
        <ChatBox
          placeholder="What do you want to know?"
          onSubmit={handleChatSubmit}
        />
      </div>

      {/* Bottom Content - Centered */}
      <div className="absolute inset-0 flex items-end justify-center z-20 bottom-10">
        <div className="flex items-center gap-10 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 max-w-[90vw] md:max-w-md px-4 md:px-0">
            <ShinyText
              text="AI Agents use AI to automate tasks, make decisions, and improve your product stack."
              disabled={false}
              speed={3}
              className='text-sm md:text-xl leading-relaxed text-center md:text-left'
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero;