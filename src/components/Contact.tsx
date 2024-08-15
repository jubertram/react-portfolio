/* eslint-disable react/no-unescaped-entities */
export default function Contact(){
  return (
    <section id="contact" className="h-content py-20 flex flex-col justify-center items-center">
      <div className="w-full md:w-3/4 text-center px-5 lg:px-28 flex flex-col gap-10">
      <div>
        <h2 className="mt-0 text-green font-boldmd:mt-0 text-center lg:text-left">CONTACT</h2>
        <h4 className="text-2xl w-full text-center lg:text-left mt-0 font-bold">N'hésitez pas à me contacter ! 👇</h4>
      </div>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-40">
          <div className="flex items-center gap-5">
            <div className="shadow-lg w-fit p-3 rounded-full">
            <svg className="w-8 h-8 text-green dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
            </svg>

            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="my-0">Localisation</h3>
              <a href="#" className="hover:text-green text-mediumGray">Nice, France</a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="shadow-lg w-fit p-3 rounded-full">
            <svg className="w-8 h-8 text-green dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="my-0">Mail</h3>
              <a href="mailto:bertramjulien@gmail.com" className="hover:text-green text-mediumGray">bertramjulien@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
