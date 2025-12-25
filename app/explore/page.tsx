'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

export default function ExplorePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-screen bg-black"></div>;
  }

  const exploreCategories = [
    {
      id: 1,
      title: 'Action',
      description: 'High-energy anime with intense battles and adventures',
      image: '/res/anime img/Aot_1677677992610_1677677997559_1677677997559.webp',
      count: '234 anime'
    },
    {
      id: 2,
      title: 'Romance',
      description: 'Heartfelt stories about love and relationships',
      image: '/res/anime img/one piece.png',
      count: '156 anime'
    },
    {
      id: 3,
      title: 'Comedy',
      description: 'Hilarious and entertaining anime series',
      image: '/res/anime img/death note.jpg',
      count: '189 anime'
    },
    {
      id: 4,
      title: 'Drama',
      description: 'Deep emotional stories that touch the heart',
      image: '/res/anime ke 14 img.jpg',
      count: '167 anime'
    },
    {
      id: 5,
      title: 'Fantasy',
      description: 'Magical worlds and extraordinary adventures',
      image: '/res/anime img/zom-100.jpeg',
      count: '198 anime'
    },
    {
      id: 6,
      title: 'Thriller',
      description: 'Suspenseful and mind-bending anime',
      image: '/res/anime ke 14 img.jpg',
      count: '143 anime'
    },
  ];

  return (
    <>
      <div className="video-bg fixed right-0 top-0 w-full h-full -z-10">
        <video width="320" height="240" autoPlay loop muted className="w-full h-full object-cover">
          <source src="/res/VID_71130801_064326_019.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-[rgba(0,0,0,0.212)] w-screen h-screen flex flex-col overflow-hidden relative backdrop-blur-[5px] font-medium">
        <div className="flex flex-col h-full mx-auto w-full max-w-screen-2xl">
          <Header />
          
          <div className="flex grow overflow-hidden">
            <Sidebar />
            <main className="flex flex-col grow">
            <div className="flex items-center h-14.5 shrink-0">
              <nav className="flex items-center ml-auto mr-7.5">
                <Link href="/" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
                  Home
                </Link>
                <Link href="/explore" className="px-6 py-5 text-(--theme-color) border-b-2 border-(--theme-color) no-underline">
                  Explore
                </Link>
                <Link href="/wishlist" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
                  Wishlist
                </Link>
                <Link href="/market" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
                  Market
                </Link>
              </nav>
            </div>

            <div className="flex flex-col text-(--theme-color) p-10 h-full overflow-auto bg-(--theme-bg-color) max-sm:p-5">
              <h1 className="text-[28px] font-semibold mb-2.5">Explore</h1>
              <p className="text-(--inactive-color) mb-7.5">Discover all anime categories and find your next favorite show</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {exploreCategories.map((category) => (
                  <div key={category.id} className="rounded-[14px] overflow-hidden hover:scale-105 transition-transform cursor-pointer group border border-(--border-color)">
                    <div className="relative h-62.5 overflow-hidden">
                      <Image src={category.image} alt={category.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-semibold text-[18px]">{category.title}</h3>
                        <p className="text-gray-300 text-[14px] mt-2">{category.count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
        </div>

        <div className="overlay-app fixed w-full h-full left-0 top-0 pointer-events-auto bg-[rgba(36,39,59,0.8)] opacity-0 invisible transition-all"></div>
      </div>

      <ThemeToggle />
    </>
  );
}
