'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const MainContent = dynamic(() => import('@/components/MainContent'), { ssr: false });
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-screen bg-black"></div>;
  }

  return (
    <>
      <div className="video-bg fixed right-0 top-0 w-full h-full -z-10">
        <video width="320" height="240" autoPlay loop muted className="w-full h-full object-cover">
          <source src="/res/VID_71130801_064326_019.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-[rgba(0,0,0,0.212)] max-w-312.5 max-h-215 h-[90vh] flex flex-col overflow-hidden relative w-full rounded-[14px] backdrop-blur-[5px] font-medium shadow-lg">
        <Header />
        
        <div className="flex grow overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>

        <div className="overlay-app fixed w-full h-full left-0 top-0 pointer-events-auto bg-[rgba(36,39,59,0.8)] opacity-0 invisible transition-all"></div>
      </div>

      <ThemeToggle />
    </>
  );
}
