import Link from "next/link";
import { ScriptProps } from "next/script";
import { ReactElement } from "react";

type NavItemProps = ScriptProps & {
  text: string;
  location: string;
};

export default function NavItem({ ...props }: NavItemProps): ReactElement {
  return (
    <>
      <li className="cursor-pointer transition-all hover:scale-[1.1] m-1 text-right">
        <Link href={props.location}>
          <a className="text-xl sm:text-2xl md:text-3xl font-thin transition-all hover:text-zinc-50">
            {props.text}
          </a>
        </Link>
      </li>
      {props.children ? props.children : null}
    </>
  );
}
