
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
          <div className="mt-20">
            Skills
          </div>

        </div>
      </div>

    </section>
  )
}
