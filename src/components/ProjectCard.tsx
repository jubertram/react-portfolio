import { Badge, Button } from "flowbite-react";
import { ReactElement, ReactHTML } from "react";

interface linksType {
  cta: string | ReactElement;
  href: string;
}

export default function ProjectCard({
  img,
  title,
  content,
  badges,
  links,
  reverse= false,
}: {
  img: string;
  title: string;
  content: ReactElement;
  badges: string[];
  links: linksType[];
  reverse?: boolean;
})
{
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-32 w-full items-center justify-around`}>
        <img src={img} alt="" className="w-[450px] object-cover rounded-lg"/>
    <div className="flex flex-col w-full text-center lg:w-1/3 items-center justify-center gap-4">
      <h3 className="my-0">{title}</h3>
      {content}
      <div className="flex gap-2 items-center justify-center w-full">
        {badges.map(badge =>
          <Badge key={badge} color="gray" className="bg-green text-white">{badge}</Badge>
        )}
      </div>

      <div className="flex gap-2 flex-col w-full md:flex-row items-center justify-center">
        {links.map(link =>
          <Button key={link.href} color="dark" className="hover:bg-gray-900 w-full md:w-fit" target="_blank" href={link.href}>{link.cta}</Button>
        )}
      </div>
    </div>
  </div>
  )
}
