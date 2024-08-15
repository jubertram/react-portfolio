/* eslint-disable react/no-unescaped-entities */
import ProjectCard from "./ProjectCard";

export default function Project(){
  return (
    <section id="projects" className="w-full h-content py-20 md:py-36 bg-lightGray">
      <div className="container w-full mx-auto px-3 md:px-24 flex flex-col gap-10 lg:gap-20 items-center md:justify-center">
      <div className="flex flex-col w-full md:pl-16">
        <h2 className="w-full md:mt-0 text-center lg:text-left">PORTFOLIO</h2>
        <h4 className="text-2xl w-full text-center lg:text-left mt-0 font-bold">Chaque projet est une pièce unique de développement</h4>
      </div>
      <div className="flex flex-col gap-32">
        <ProjectCard
          title="Iron & Earth 🌍"
          img="src/assets/Iron&Earth.png"
          content={
            <>
              <p className="text-mediumGray my-0">Un site web canadien de recherche d'emploi et d'aide à la reconversion vers les énergies vertes.
              </p>
              <ul className="text-mediumGray list-disc list-inside">
                Ma mission :
                <li>Développement et maintenance de la partie front-end du site.</li>
                <li>Développement et maintenance de la partie back-end du site.</li>
                <li>Implementation de la traduction Française du site.</li>
              </ul>
            </>
          }
          badges={["React", "Ruby"]}
          links={[{
            href: "https://www.climatecareerportal.com/",
            cta: "Visiter le site"
          }]}
        />

        <ProjectCard
          reverse
          title="Tracer 🏃🏼‍➡️"
          content={
            <p className="text-mediumGray my-0">
              Une web-app qui permet au sportif de Parkour de retrouver tous les endroits permettant de pratiquer leur sport. Le site utilise une carte qui inventorie les différents "spots" et permet de sauvegarder certains spots en favoris sur son compte utilisateur.
            </p>
          }
          badges={["Ruby on Rails", "PostgreSQL"]}
          img="src/assets/Tracer.png"
          links={[{
            cta: <div className="flex gap-1 align-baseline">
              Demo live
              <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
              </svg>
            </div>,
            href: "https://tracer-wagon.herokuapp.com/"
          },
          {
            cta: <div className="flex gap-1 items-center">
              Code
              <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
              </svg>
            </div>,
            href: "https://github.com/jubertram/Tracer"
          },
          ]}
        />
      </div>

      </div>
    </section>
  )
}
