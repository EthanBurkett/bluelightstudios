import type { NextPage } from "next";
import Button from "../Components/Button";
import Link from "next/link";
import DefaultPage from "../Components/DefaultPage";

const Home: NextPage = () => {
  return (
    <DefaultPage>
      <h1>BlueLight Studios</h1>
      <h2>Discord Bots, Trading Bots, Website Development</h2>

      <Link href="/aboutus">
        <Button text="Learn More" />
      </Link>
    </DefaultPage>
  );
};

export default Home;
