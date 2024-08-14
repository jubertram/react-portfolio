import { Card } from "flowbite-react";

export default function Project(){
  return (
    <section id="projects" className="w-screen h-content py-36 bg-lightGray">
      <div className="container mx-auto px-5 flex flex-col md:gap-16 lg:gap-32 items-center md:justify-center">
      <div className="flex flex-col w-full w-2/3">
        <h2 className="w-full md:mt-0 text-left">PORTFOLIO</h2>
        <h4 className="text-2xl w-full text-center lg:text-left mt-0 font-bold">Chaque projet est une pièce unique de développement</h4>
      </div>
      <Card className="w-[600px]" href="https://www.climatecareerportal.com/" horizontal imgSrc="src/assets/Iron&Earth.png">
      <h5>Iron & Earth</h5>
      <p>
        Platform to help canadian workers to do a green career transitino
      </p>

      </Card>
      </div>
    </section>
  )
}
