import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Mining Rig Power Calculator</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center h-full">
        <h1
          className="text-5xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-light to-orange-dark title-glow-orange tracking-[-0.01em]">Mining
          Rig Power Calculator</h1>
        <div className="relative">
          <div className="w-[892px] h-[271px] glass-box mt-14">
            <div className="absolute top-0 left-0 h-full w-full glass-box-blue-glow"></div>
            <div className="absolute top-0 left-0 h-full w-full glass-box-orange-glow"></div>
          </div>
        </div>
        <h1
          className="text-5xl leading-tight font-bold text-primary-blue title-glow-blue tracking-[-0.01em] mt-14">Total
          Power Needed</h1>
        <p className="text-7xl font-extrabold leading-normal">⚡ 2340 W</p>
      </main>
    </div>
  );
};

export default Home;
