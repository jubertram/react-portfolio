"use client";
import { Navbar } from "flowbite-react";


const navItems: Array<{
  name: string;
  section: string;
}> = [
  {
    name: "Accueil",
    section: "#home",
  },
  {
    name: "A propos",
    section: "#about",
  },
  {
    name: "Projets",
    section: "#projects",
  },
  {
    name: "Contact",
    section: "#contact",
  },
];

export default function HomeNavbar() {
  return (
      <Navbar fluid rounded className="sticky top-0 z-50 w-screen">
        <Navbar.Brand href="#home" className="h-16 ml-10" >
          <span className="self-center whitespace-nowrap text-xl font-extrabold">Julien.Dev</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          {navItems.map((item) => {
            return <Navbar.Link key={item.name} href={item.section}>{item.name}</Navbar.Link>

          })}
        </Navbar.Collapse>
      </Navbar>
  )
}
