import Anchor from "./Anchor"
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'


const navItems: Array<{
  name: string;
  section: string;
}> = [
  {
    name: "Home",
    section: "#home",
  },
  {
    name: "About",
    section: "#about",
  },
  {
    name: "Projects",
    section: "#projects",
  },
  {
    name: "Contact",
    section: "#contact",
  },
];

export default function Navbar() {
  return (
    <nav className="z-40 bg-white px-6 flex h-20 items-center justify-between fixed w-full shadow-md md:px-8">
      <Anchor section='#home' className="font-bold hover:text-gray text-xl" name="Julien.dev"/>

      <div id="mobile-menu" className="md:hidden">
        <Menu>
          {({open}) => (
            <>
              <Menu.Button>
              <FontAwesomeIcon icon={faBars} className="text-2xl pr-4 hover:text-green"/>
              </Menu.Button>

              <Transition
                show={open}
                enter='transition duration-300 ease-out'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition duration-300 ease-out'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
                className='absolute top-0 left-0 z-50 w-screen h-screen'
              >
                <Menu.Items className='overflow-auto bg-white'>
                  <Menu.Item>
                    {({ close }) => (
                      <a href="" onClick={close} className="hover:text-gray fixed right-0 top-0 mt-4 mr-8 text-md">
                        <FontAwesomeIcon icon={faX}/>
                      </a>
                    )}
                  </Menu.Item>
                  <div className="flex flex-col gap-9 items-center justify-center h-screen">
                    {navItems.map((item) => {
                      return (
                        <Menu.Item>
                          <Anchor className="font-normal text-3xl" key={item.name} section={item.section} name={item.name} onClick={close}/>
                        </Menu.Item>
                      )
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>

      <div id="desktop-menu" className="hidden md:flex">
        {navItems.map((item) => {
          return <Anchor key={item.name} section={item.section} name={item.name}/>
        })}
      </div>
    </nav>
  )
}
