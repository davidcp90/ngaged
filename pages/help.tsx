import type { NextPage } from 'next'
import Head from 'next/head'
import PublicLayout from '../components/layout/publicLayout';
const Home: NextPage = () => {
  return (
    <PublicLayout beta={false}>
      <Head>
        <title>Ngaged Work - Happier teams</title>
        <meta
          name="description"
          content="Ngaged Work is a 360 solution to help you create a positive culture on your organization."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        src="https://tally.so/embed/w7QVZm?alignLeft=1&hideTitle=1&transparentBackground=1"
        width="100%"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Ngaged Help"
      ></iframe>
    </PublicLayout>
  );
}

export default Home


