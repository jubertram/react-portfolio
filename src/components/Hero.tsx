import { ReactNode } from "react"

export default function Hero(){

  const heroImageStyle: {
    borderRadius: string,
    border: string,
    animationDuration: string,
    animationTimingFunction:string,
    animationDelay:string,
    animationIterationCount: string,
    animationDirection: string,
    animationFillMode: string,
    animationPlayState: string,
    animationName: string,
    animationTimeline: string,
    animationRangeStart: string,
    transition: string,
  } = {
    borderRadius:"60% 40% 30% 70%/60% 30% 70% 40%",
    border: "3px solid #2d2e32",
    animationDuration: "8s",
    animationTimingFunction:" ease-in-out",
    animationDelay: "0s",
    animationIterationCount: "infinite",
    animationDirection: "normal",
    animationFillMode: "none",
    animationPlayState: "running",
    animationName: "morph",
    animationTimeline: "auto",
    animationRangeStart: "normal",
    transition: "all 1s ease-in-out",
  }

  const techStacks: [string,string,string,string] = ["https://skillicons.dev/icons?i=html,css", "https://skillicons.dev/icons?i=js,ts", "https://skillicons.dev/icons?i=react,remix", "https://skillicons.dev/icons?i=tailwind,sass" ]

  return (
    <section id="home" className="bg-lightGray h-screen w-screen">
      <div className="pt-32 lg:pt-14 md:mx-auto py-0 px-16 max-w-[101rem]">
        <div className="flex items-center justify-center flex-col lg:h-screen">
          <div className="flex flex-col items-center gap-16 lg:gap-40 lg:flex-row-reverse lg:justify-center">
            <div className="bg-[url('assets/pp.png')] bg-cover md:w-80 md:h-80 w-60 h-60 border" style={heroImageStyle}></div>
            <div className="mt-10 md:mt-0 flex flex-col items-center md:max-w-[32rem]">
              <h1 className="text-center lg:text-left">Front-End React Developer ✋🏼</h1>
              <p className="my-3 text-center lg:text-left text-lg text-mediumGray">Hi, I'm Julien Bertram. A passionate Front-end React Developer based in Montréal, QC. 📍</p>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center">
            <h2 className="font-medium border-b-2 border-b-zinc-400 pb-2">Tech Stack</h2>
            <ul className="flex wrap content-center mt-5">
            {techStacks.map((stack) => {
              return <li className="pr-8"><img key={stack} src={stack}/></li>
            })}
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}
