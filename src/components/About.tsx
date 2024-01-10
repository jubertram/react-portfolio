export default function About() {
  return (
    <section id="about" className="w-screen h-content py-20">
      <div className="px-5 flex flex-col lg:flex-row md:gap-10 lg:gap-16 items-center md:justify-center">
      <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg h-[300px] rounded-lg" alt="laptop picture" />
      <div className="flex flex-col items-center lg:items-start md:w-[470px]">
        <h3 className="text-green font-bold mt-14 md:mt-0 text-center lg:text-left">ABOUT ME</h3>
        <h4 className="text-2xl w-full text-center lg:text-left mt-0 font-bold">A passionated Front-end Developer</h4>
        <p className="text-center text-mediumGray px-10 lg:text-left md:p-0 md:m-0">
        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I am a calm, rigorous, and orderly person who has great capacities for understanding, learning, and teamwork.
        </p>
      </div>
      </div>

    </section>
  )
}
