import { NextPage } from "next";
import { ScriptProps } from "next/script";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import moment from "moment";
import Clock from "react-live-clock";

const DefaultPage: NextPage = ({ children }: ScriptProps) => {
  const Date = moment().utcOffset("-0600").format("YYYY.MM.DD");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
      />
      <link
        rel="shortcut icon"
        href="../public/favicon.ico"
        type="image/x-icon"
      />
      <h2 className="text-2xl absolute self-start p-10">{Date}</h2>
      <h2 className="text-2xl absolute w-56 self-start p-10 pt-16">
        <Clock format={"h:mm:ss a"} ticking={true} />
      </h2>
      <div className="main absolute z-[2] pointer-events-auto">
        {children}
        <Navbar>
          <NavItem text="Home" location="/" />
          <NavItem text="About Us" location="/about-us" />
          <NavItem text="Projects" location="/projects" />
          <NavItem text="Discord" location="https://discord.gg/y2fnkCSmuY" />
        </Navbar>
      </div>
      <footer className="absolute w-[100vw] h-[95vh] flex items-end justify-center">
        <p>© Copyright 2022 - BlueLight Studios</p>
      </footer>
    </>
  );
};

export default DefaultPage;
