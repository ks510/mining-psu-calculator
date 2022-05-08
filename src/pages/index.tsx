import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Mining PSU Calculator</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center h-full">
        <h1
          className="text-5xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-light to-orange-dark title-shadow tracking-[-0.01em]">Mining
          PSU
          Calculator</h1>
      </main>
    </div>
  );
};

export default Home;
