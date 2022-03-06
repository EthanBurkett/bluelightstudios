import "../production/globals.css";
import "../production/Main.css";
import type { AppProps } from "next/app";
import Particles from "react-tsparticles";
import { useTheme } from "@material-ui/core";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BlueLight Studios</title>
      <Particles
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          zIndex: -1,
        }}
        id="tsparticles"
        options={{
          background: {
            opacity: 0,
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: theme.palette.primary.main,
            },
            links: {
              color: theme.palette.primary.main,
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
