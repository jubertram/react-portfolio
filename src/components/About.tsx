/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import Emoji from "../assets/tech_emoji.png"
import RoundText from "../assets/round-text.svg"

export default function About() {
  return (
    <section id="about" className="w-screen h-content py-20 md:py-36">
      <div className="px-5 flex flex-col lg:flex-row md:gap-16 lg:gap-32 items-center md:justify-center">
        <div className="relative">
        <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg max-h-[310px] rounded-lg" alt="laptop picture" />
        <div className="hidden sm:block sm:absolute bg-white -right-14 -bottom-14 h-48 w-48 rounded-full">
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              repeatDelay:0
            }}
          >
            <img src={RoundText} className="relative left-1" alt="" />
          </motion.div>
            <img src={Emoji} className="w-16 absolute top-16 left-16" />
        </div>
        </div>
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3">
        <h2 className="text-green font-bold mt-14 md:mt-0 text-center lg:text-left">A PROPOS DE MOI</h2>
        <h4 className="text-2xl w-full text-center lg:text-left mt-0 font-bold">Un Développeur Junior passionné</h4>
        <p className="text-center text-mediumGray px-3 lg:px-0 lg:text-left md:p-0 md:m-0">
          Développeur depuis fin 2022 suite à une reconversion professionnel, je me suis découvert une très grande appétence pour le développement. Après avoir réussi haut la main le bootcamp Le Wagon, je suis parti au Canada pour travailler dans ce domaine.
          <br/><br/>
          Depuis, j'ai développé mes compétences avec notamment React, Tailwind, Typescript. J'ai également pu continuer à approfondir mes connaissances avec Ruby on Rails.
          <br/><br/>
          Je suis une personne calme, rigoureuse et ordonnée, j'ai acquis dans mon précédent emploi un fort esprit d'équipe et pouvoir d'adaptation et de réaction élevé.
        </p>
      </div>
      </div>
    </section>
  )
}
