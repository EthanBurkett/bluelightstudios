import type { NextPage } from "next";
import DefaultPage from "../../Components/DefaultPage";
import Link from "next/link";
import Button from "../../Components/Button";
import { FaDiscord } from "react-icons/fa";

const AboutUs: NextPage = () => {
  return (
    <DefaultPage>
      <h1>Who Are We?</h1>
      <h2>
        BlueLight Studios is a team of high-skilled developers that create
        beautiful applications in terms of advanced discord bots, stock and
        crypto trading bots, website applications, and we'll even host it for
        you!
        <p className="text-lg mt-2 sm:text-xl md:text-xl lg:text-2xl text-zinc-300">
          Interested in learning more about us? Click the link below to join our
          discord server
        </p>
      </h2>
      <Link href="https://discord.gg/y2fnkCSmuY">
        <Button icon={<FaDiscord />} text="Discord" />
      </Link>
    </DefaultPage>
  );
};

export default AboutUs;
