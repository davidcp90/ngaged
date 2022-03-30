import type { NextPage } from 'next'
import Head from 'next/head'
import PublicLayout from '../components/layout/publicLayout';
import HomeHero from '../components/home/hero';
import Fact from '../components/home/fact';
import Features from '../components/home/features';
const Home: NextPage = () => {
  return (
    <PublicLayout beta={true}>
      <Head>
        <title>Ngaged Work - Happier teams</title>
        <meta
          name="description"
          content="Ngaged Work is a 360 solution to help you create a positive culture on your organization."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <Fact />
      <Features />
    </PublicLayout>
  );
}

export default Home
