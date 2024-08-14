import { Navbar } from "flowbite-react";

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

export default function HomeNavbar() {
  return (
      <Navbar fluid rounded className="sticky top-0 h-20 pt-6 w-full">
        <Navbar.Brand href="#home" >
          <span className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white">Julien.Dev</span>
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
