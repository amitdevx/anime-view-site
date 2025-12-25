'use client';

import React, { useState } from 'react';

interface AnimeCardProps {
  title: string;
  description: string;
  image: string;
  borderColor: string;
  bgColor: string;
  buttonLabel: string;
  buttonType?: 'watch' | 'wishlist';
}

const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  description,
  borderColor,
  bgColor,
  buttonLabel,
}) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <div className="flex flex-col w-[calc(33.3%-20px)] text-[16px] bg-(--content-bg) rounded-[14px] p-5 cursor-pointer transition-transform hover:scale-[1.02] hover:bg-(--theme-bg-color)">
      <div className="flex items-center">
        <svg viewBox="0 0 52 52" className="w-7 rounded-md mr-3 shrink-0" style={{ backgroundColor: bgColor }}>
          <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill={bgColor} />
        </svg>
        <span className="text-(--theme-color)">{title}</span>
      </div>

      <p className="text-[14px] font-normal leading-[1.6em] mt-5 border-b border-(--border-color) pb-5">
        {description}
      </p>

      <div className="flex items-center ml-auto mt-4">
        <button className="bg-[#3a6df0] border-none px-6 py-1.5 text-white rounded-[20px] cursor-pointer transition-colors hover:bg-[#1e59f1]">
          {buttonLabel}
        </button>
        <div className="w-1.25 h-1.25 bg-(--button-inactive) rounded-full box-shadow mx-3"></div>
      </div>

      {/* Wishlist Popup Modal */}
      {isWishlistOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-(--popup-bg) p-10 rounded-md z-10 shadow-lg w-125 max-sm:w-full">
          <div className="flex justify-between items-center pb-5 border-b border-(--border-color)">
            <h2 className="text-(--theme-color)">wishlist</h2>
            <button onClick={() => setIsWishlistOpen(false)} className="w-6 h-6 text-(--theme-color) bg-none border-none cursor-pointer">
              ✕
            </button>
          </div>
          <div className="mt-5 text-[14px] font-normal">
            Adjust your selections for advanced options as desired before continuing.
          </div>
          <div className="mt-10 flex gap-2">
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="bg-none text-(--button-inactive) border border-(--button-inactive) px-6 py-1.5 rounded-[20px] cursor-pointer"
            >
              Cancel
            </button>
            <button className="bg-[#3a6df0] text-white px-6 py-1.5 rounded-[20px] cursor-pointer transition-colors hover:bg-[#1e59f1]">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeCard;
