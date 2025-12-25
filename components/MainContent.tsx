'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimeCard from './AnimeCard';

const MainContent: React.FC = () => {
  const animeList = [
    {
      id: 1,
      title: 'Fullmetal Alchemist:',
      description: 'Two brothers seek the Philosopher\'s Stone to restore their bodies.',
      image: '/res/anime ke 14 img.jpg',
      borderColor: '#3291b8',
      bgColor: '#061e26',
      buttonLabel: 'Open',
      status: 'watched',
    },
    {
      id: 2,
      title: 'Zom 100:',
      description: 'A young man navigates a zombie apocalypse with humor and heart.',
      image: '/res/anime img/zom-100.jpeg',
      borderColor: '#c75deb',
      bgColor: '#3a3375',
      buttonLabel: 'wishlist',
      status: 'available',
    },
    {
      id: 3,
      title: 'Naruto:',
      description: 'A ninja\'s journey from outcast to hero of his village.',
      image: '/res/anime ke 14 img.jpg',
      borderColor: '#c75deb',
      bgColor: '#3a3375',
      buttonLabel: 'Open',
      status: 'watched',
    },
  ];

  const featuredAnime = [
    {
      id: 1,
      title: 'Attack on Titan:',
      description: 'A story of humanity\'s fight against Titans, giant humanoid creatures who devour humans without reason.',
      image: '/res/anime img/Aot_1677677992610_1677677997559_1677677997559.webp',
      borderColor: '#a059a9',
      bgColor: '#210027',
    },
    {
      id: 2,
      title: 'One Piece:',
      description: 'A story of a young pirate and his crew\'s journey to find the ultimate treasure, One Piece.',
      image: '/res/anime img/one piece.png',
      borderColor: '#c1316d',
      bgColor: '#2f0015',
    },
    {
      id: 3,
      title: 'Death Note:',
      description: 'A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it.',
      image: '/res/anime img/death note.jpg',
      borderColor: '#c75deb',
      bgColor: '#3a3375',
    },
  ];

  return (
    <main className="flex flex-col grow">
      {/* Main Header */}
      <div className="flex items-center h-14.5 shrink-0">
        <Link href="#" className="text-(--theme-color) px-7.5 no-underline max-lg:hidden">
          All Apps
        </Link>
        <nav className="flex items-center ml-37.5 max-lg:ml-auto">
          <Link href="/" className="px-6 py-5 text-(--theme-color) border-b-2 border-(--theme-color) no-underline">
            Desktop
          </Link>
          <Link href="#" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
            Mobile
          </Link>
          <Link href="#" className="px-6 py-5 text-(--inactive-color) border-b-2 border-transparent no-underline">
            Web
          </Link>
        </nav>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col text-(--theme-color) p-10 h-full overflow-auto bg-(--theme-bg-color) max-sm:p-5">
        {/* Featured Section */}
        <div className="flex items-center w-full justify-between bg-linear-to-r from-purple-500 via-pink-500 to-red-500 rounded-[14px] p-10 max-sm:p-5">
          <div className="max-w-87.5">
            <h3 className="font-medium text-[17px] flex items-center m-0 text-white">
              anime ke 14
            </h3>
            <div className="font-normal text-[14px] mt-4 leading-[1.7em] text-gray-100 line-clamp-4">
              Grab yourself free access of content from anime ke 14 in a 30-day free trial.
            </div>
            <button className="bg-[#3a6df0] border-none px-6.5 py-2 text-white rounded-[20px] mt-4 cursor-pointer transition-colors hover:bg-[#1e59f1]">
              Start free trial
            </button>
          </div>
          <Image src="https://assets.codepen.io/3364143/glass.png" alt="Glass" width={186} height={186} className="object-cover -mt-6.25 max-sm:w-27.5" />
        </div>

        {/* Recent Section */}
        <div className="mt-7.5 flex flex-col">
          <h2 className="text-(--content-title-color) mb-3.5">recent</h2>
          <ul className="flex flex-col w-full bg-(--content-bg) p-0 m-0 rounded-[14px] cursor-pointer space-y-0">
            {animeList.map((anime, index) => (
              <li key={anime.id} className={`list-none p-4.5 flex items-center text-[16px] w-full whitespace-nowrap transition-colors hover:bg-(--theme-bg-color) ${index !== animeList.length - 1 ? 'border-b border-(--border-color)' : ''}`}>
                <div className="flex items-center w-37.5 max-sm:w-30">
                  <svg viewBox="0 0 52 52" style={{ border: `1px solid ${anime.borderColor}` }} className="w-7 rounded-md mr-4 shrink-0">
                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill={anime.bgColor} />
                  </svg>
                  <span>{anime.title}</span>
                </div>
                <div className="ml-auto w-35 text-[15px] max-md:hidden flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${anime.status === 'watched' ? 'bg-[#3bf083]' : 'bg-[#396df0]'}`}></span>
                  {anime.status === 'watched' ? 'watched' : 'Available'}
                </div>
                <div className="flex items-center justify-end w-46.75 ml-auto max-sm:w-auto">
                  <button className={`text-[15px] px-6 py-1.5 rounded-[20px] cursor-pointer max-sm:px-3.5 ${anime.status === 'watched' ? 'bg-none text-(--button-inactive) border border-(--button-inactive)' : 'bg-[#3a6df0] text-white'}`}>
                    {anime.buttonLabel}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Anime Section */}
        <div className="mt-7.5 flex flex-col">
          <h2 className="text-(--content-title-color) mb-3.5">anime in your plan</h2>
          <div className="flex flex-wrap w-[calc(100%+20px)] gap-0">
            {featuredAnime.map((anime) => (
              <div key={anime.id} className="w-[calc(33.3%-20px)] mr-5 last:mr-0">
                <AnimeCard
                  title={anime.title}
                  description={anime.description}
                  image={anime.image}
                  borderColor={anime.borderColor}
                  bgColor={anime.bgColor}
                  buttonLabel="watch"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
