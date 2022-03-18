import type { NextPage } from "next";
import Head from "next/head";
import PublicLayout from "../../components/layout/publicLayout";
import HackathonLayout from "../../components/hackathon/hackLayout";
import Host from "../../components/hackathon/host";
import Features from "../../components/hackathon/features";
import { getHackathonData, getHackathonPaths } from "../../lib/hackathon";
import { GetStaticPaths, GetStaticProps } from "next";
const Hackathon: NextPage = ({ hackathonData }: any) => {
  return hackathonData ? (
    <HackathonLayout
      heroImg={hackathonData.cover}
      transparentBg={true}
      hostLogo={hackathonData.hostLogo}
    >
      <Head>
        <title>{hackathonData.title} - Ngaged</title>
        <meta name="description" content={hackathonData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Host />
      <Features />
    </HackathonLayout>
  ) : null;
};

export const getStaticPaths: GetStaticPaths = async() => {
  const paths = getHackathonPaths();
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async({ params }: any) => {
  const hackathonData = getHackathonData(params.slug);
  return {
    props: {
      hackathonData,
    },
  };
}

export default Hackathon;