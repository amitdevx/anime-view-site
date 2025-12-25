'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-screen bg-black"></div>;
  }

  const wishlistItems = [
    {
      id: 1,
      title: 'My Hero Academia',
      description: 'A superhero story about young heroes in training',
      image: '/res/anime ke 14 img.jpg',
      addedDate: '2 days ago',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Demon Slayer',
      description: 'An epic tale of demon hunters and redemption',
      image: '/res/anime img/zom-100.jpeg',
      addedDate: '1 week ago',
      priority: 'high'
    },
    {
      id: 3,
      title: 'Jujutsu Kaisen',
      description: 'Supernatural action with intense storytelling',
      image: '/res/anime img/death note.jpg',
      addedDate: '2 weeks ago',
      priority: 'medium'
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
                <Link href="/explore" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
                  Explore
                </Link>
                <Link href="/wishlist" className="px-6 py-5 text-(--theme-color) border-b-2 border-(--theme-color) no-underline">
                  Wishlist
                </Link>
                <Link href="/market" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
                  Market
                </Link>
              </nav>
            </div>

            <div className="flex flex-col text-(--theme-color) p-10 h-full overflow-auto bg-(--theme-bg-color) max-sm:p-5">
              <h1 className="text-[28px] font-semibold mb-2.5">My Wishlist</h1>
              <p className="text-(--inactive-color) mb-7.5">Anime you want to watch ({wishlistItems.length} items)</p>
              
              <div className="space-y-3.75">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-(--content-bg) p-5 rounded-[14px] flex gap-5 hover:bg-(--theme-bg-color) transition-colors border border-(--border-color)">
                    <Image src={item.image} alt={item.title} width={120} height={150} className="rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2.5">
                        <h3 className="text-[18px] font-semibold">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-sm text-[12px] font-medium ${
                          item.priority === 'high' ? 'bg-red-500/30 text-red-400' : 'bg-yellow-500/30 text-yellow-400'
                        }`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-(--inactive-color) text-[14px] mb-3">{item.description}</p>
                      <p className="text-(--inactive-color) text-[12px]">Added {item.addedDate}</p>
                      <div className="flex gap-2.5 mt-3.75">
                        <button className="px-5 py-1.5 bg-[#3a6df0] text-white rounded-[20px] cursor-pointer transition-colors hover:bg-[#1e59f1] text-[14px]">
                          Watch Now
                        </button>
                        <button className="px-5 py-1.5 bg-red-500/30 text-red-400 rounded-[20px] cursor-pointer transition-colors hover:bg-red-500/50 text-[14px]">
                          Remove
                        </button>
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
