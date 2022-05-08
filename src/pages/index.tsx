import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mining PSU Calculator</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl">Mining PSU Calculator</h1>
      </main>
    </>
  );
};

export default Home;
