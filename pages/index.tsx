import type { NextPage } from "next";
import Head from "next/head";
import { Container, Spacer, Text, Link } from "@nextui-org/react";
import { ThemeChanger } from "../components/ThemeChanger";
import { FiCoffee } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Oi Doug</title>
        <meta name="description" content="Douglas Schmidt's - App Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container sm style={{ height: "100vh" }}>
        <Spacer y={6} />
        <FiCoffee size={50} color="#4ADE7B" />
        <Spacer y={2} />
        <Text h1>Oi,&nbsp; I&apos;m Doug&nbsp; 👋</Text>
        <Spacer />
        <Text h1>Nice to meet you!</Text>
        <Spacer />
        <Text h1>
          I create digital products from idea to production using a{" "}
          <Link color="primary" href="/ux">
            lean UX approach
          </Link>{" "}
          and developing using fast-to-ship tools like{" "}
          <Link color="primary" href="/react-native">
            React-Native
          </Link>
          and{" "}
          <Link color="primary" href="/firebase">
            Firebase.
          </Link>
        </Text>
        <Spacer />
        <Text></Text>
        <Spacer y={2} />
        <ThemeChanger />
        <Spacer y={6} />
      </Container>
    </Container>
  );
};

export default Home;
