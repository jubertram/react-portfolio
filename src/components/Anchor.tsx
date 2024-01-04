import { MouseEventHandler } from "react";

type AnchorProps = {
  name: string,
  section: string,
  className?: string,
  onClick?: MouseEventHandler;
}

export default function Anchor({name, section, className, onClick}: AnchorProps) {
  return (
    <a href={section} className={"mx-3 hover:transition-colors hover:duration-300 " + className} onClick={onClick}>{name}</a>
  )
}
