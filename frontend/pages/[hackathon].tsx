import type { NextPage } from "next";
import Head from "next/head";
import PublicLayout from "../components/layout/publicLayout";
import HackathonHero from "../components/hackathon/hero";
import Host from "../components/hackathon/host";
import Features from "../components/hackathon/features";
const Hackathon: NextPage = () => {
  return (
    <PublicLayout transparentBg={true}>
      <Head>
        <title>Hackathon</title>
        <meta
          name="description"
          content="Ngaged Work is a 360 solution to help you create a positive culture on your organization."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HackathonHero />
      <Host />
      <Features />
    </PublicLayout>
  );
};

export default Hackathon;
