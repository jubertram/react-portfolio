import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

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

  const techStacks: [string,string,string,string] = ["https://skillicons.dev/icons?i=html,css", "https://skillicons.dev/icons?i=js,ts", "https://skillicons.dev/icons?i=react,rails", "https://skillicons.dev/icons?i=tailwind,sass" ]

  return (
    <section id="home" className="bg-lightGray h-fit w-screen">
      <div className="py-20 px-5 md:mx-auto lg:py-16 2xl:py-0 lg:w-[60rem]">
        <div className="flex items-center justify-center flex-col min-h-screen">
          <div className="flex flex-col items-center gap-6 lg:gap-[5rem] lg:flex-row-reverse lg:justify-center">
            <div className="bg-[url('assets/pp.png')] bg-cover md:w-[22rem] md:h-[22rem] w-60 h-60 border" style={heroImageStyle}></div>
            <div className="md:mt-0 flex flex-col items-center md:max-w-[32rem]">
              <h1 className="text-center my-0 font-extrabold lg:text-left text-3xl md:text-5xl !leading-snug">Développeur React Front-End ✋🏼</h1>
              <p className="my-7 text-center lg:text-left text-lg text-mediumGray">Bonjour, je suis Julien Bertram. Un développeur junior passionné, basé à Nice, France. 📍</p>
              <div className="flex gap-4 w-full justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/julien-bertram/" rel="noreferrer" target="_blank" className="text-3xl hover:text-green">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/jubertram" target="_blank" rel="noreferrer" className="text-3xl hover:text-green">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-24 w-full flex flex-col lg:flex-row items-center lg:justify-start">
            <h4 className="border-b-2 pb-2 border-b-zinc-400 lg:border-r-2 lg:pr-5 lg:border-r-zinc-400 lg:border-b-0 lg:p-0 lg:m-0 lg:mr-20">Tech Stack</h4>
            <div className="flex flex-wrap justify-center gap-8 content-center mt-5 lg:mt-0">
            {techStacks.map((stack) => {
              return <div key={stack} className="transition ease-in-out hover:-translate-y-3 duration-500"><img key={stack} src={stack} /></div>
            })}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
