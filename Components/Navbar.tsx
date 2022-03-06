import { ScriptProps } from "next/script";

export default function Navbar({ children }: ScriptProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col fixed place-self-end mr-[5vw] lg:mr-[5vw] md:mr-[10vw] sm:mr-[15vw] navbar">
        {children}
      </div>
    </>
  );
}
