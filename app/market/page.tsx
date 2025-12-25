'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

export default function MarketPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-screen bg-black"></div>;
  }

  const marketItems = [
    {
      id: 1,
      title: 'Anime Merch Bundle',
      description: 'Official merchandise collection',
      price: '$49.99',
      image: '/res/anime ke 14 img.jpg',
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      title: 'Limited Edition Figure',
      description: 'Collectible anime figure with packaging',
      price: '$29.99',
      image: '/res/anime img/zom-100.jpeg',
      rating: 5,
      inStock: true
    },
    {
      id: 3,
      title: 'Anime Poster Set',
      description: 'High-quality poster collection',
      price: '$19.99',
      image: '/res/anime img/death note.jpg',
      rating: 4,
      inStock: false
    },
    {
      id: 4,
      title: 'Manga Volume Bundle',
      description: 'Complete series collection',
      price: '$89.99',
      image: '/res/anime img/one piece.png',
      rating: 4.5,
      inStock: true
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
                <Link href="/wishlist" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
                  Wishlist
                </Link>
                <Link href="/market" className="px-6 py-5 text-(--theme-color) border-b-2 border-(--theme-color) no-underline">
                  Market
                </Link>
              </nav>
            </div>

            <div className="flex flex-col text-(--theme-color) p-10 h-full overflow-auto bg-(--theme-bg-color) max-sm:p-5">
              <h1 className="text-[28px] font-semibold mb-2.5">Marketplace</h1>
              <p className="text-(--inactive-color) mb-7.5">Shop official anime merchandise and collectibles</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {marketItems.map((item) => (
                  <div key={item.id} className="bg-(--content-bg) rounded-[14px] overflow-hidden hover:shadow-lg transition-all hover:scale-105 border border-(--border-color)">
                    <div className="relative h-50 overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
                      <p className="text-(--inactive-color) text-[14px] mb-3">{item.description}</p>
                      <div className="flex justify-between items-center mb-3.75">
                        <span className="text-[#3a6df0] font-semibold text-[18px]">{item.price}</span>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-[12px]">{item.rating}</span>
                        </div>
                      </div>
                      <button disabled={!item.inStock} className={`w-full py-2 rounded-[20px] cursor-pointer transition-colors text-[14px] font-medium ${
                        item.inStock 
                          ? 'bg-[#3a6df0] text-white hover:bg-[#1e59f1]' 
                          : 'bg-gray-500/30 text-gray-400 cursor-not-allowed'
                      }`}>
                        {item.inStock ? 'Add to Cart' : 'Unavailable'}
                      </button>
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
