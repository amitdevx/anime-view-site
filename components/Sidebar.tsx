'use client';

import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="flex-basis-[240px] p-6.5 overflow-auto shrink-0 max-lg:hidden">
      {/* Apps Section */}
      <div className="mb-5">
        <h3 className="text-(--inactive-color) mb-3.5 text-[14px]">Apps</h3>
        <nav className="flex flex-col whitespace-nowrap space-y-0">
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 512 512" className="w-4 mr-2" fill="currentColor">
              <g>
                <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" />
              </g>
              <path d="M192 192h128v128H192zm0 0M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" />
            </svg>
            All Apps
          </Link>
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg) relative">
            <svg viewBox="0 0 488.932 488.932" className="w-4 mr-2" fill="currentColor">
              <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
            </svg>
            recent
            <span className="ml-auto w-4.5 h-4.5 bg-[#3a6df0] text-white rounded-full text-[11px] flex items-center justify-center">1</span>
          </Link>
        </nav>
      </div>

      {/* Categories Section */}
      <div className="mb-5">
        <h3 className="text-(--inactive-color) mb-3.5 text-[14px]">Categories</h3>
        <nav className="flex flex-col whitespace-nowrap space-y-0">
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 488.455 488.455" className="w-4 mr-2" fill="currentColor">
              <path d="M287.396 216.317c23.845 23.845 23.845 62.505 0 86.35s-62.505 23.845-86.35 0-23.845-62.505 0-86.35 62.505-23.845 86.35 0" />
            </svg>
            anime
          </Link>
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 512 512" className="w-4 mr-2" fill="currentColor">
              <path d="M427.397 91.581H385.21l-30.544-61.059H133.76l-30.515 61.089-42.127.075C27.533 91.746.193 119.115.164 152.715L0 396.86c0 33.675 27.384 61.074 61.059 61.074h366.338c33.675 0 61.059-27.384 61.059-61.059V152.639c-.001-33.674-27.385-61.058-61.059-61.058zM244.22 381.61c-67.335 0-122.118-54.783-122.118-122.118s54.783-122.118 122.118-122.118 122.118 54.783 122.118 122.118S311.555 381.61 244.22 381.61z" />
            </svg>
            action
          </Link>
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 512 512" className="w-4 mr-2" fill="currentColor">
              <circle cx="295.099" cy="327.254" r="110.96" transform="rotate(-45 295.062 327.332)" />
              <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
            </svg>
            story based
          </Link>
        </nav>
      </div>

      {/* Chats Section */}
      <div className="mb-5">
        <h3 className="text-(--inactive-color) mb-3.5 text-[14px]">chats</h3>
        <nav className="flex flex-col whitespace-nowrap space-y-0">
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 332 332" className="w-4 mr-2" fill="currentColor">
              <path d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z" />
            </svg>
            world chat
          </Link>
        </nav>
      </div>

      {/* Resource Links Section */}
      <div>
        <h3 className="text-(--inactive-color) mb-3.5 text-[14px]">Resource Links</h3>
        <nav className="flex flex-col whitespace-nowrap space-y-0">
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 512 512" className="w-4 mr-2" fill="currentColor">
              <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z" />
            </svg>
            Stock
          </Link>
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 511.441 511.441" className="w-4 mr-2" fill="currentColor">
              <path d="M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z" />
              <path d="M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z" />
            </svg>
            Tutorials
          </Link>
          <Link href="#" className="text-(--theme-color) flex items-center font-normal p-2.5 text-[14px] rounded-md no-underline hover:bg-(--hover-menu-bg)">
            <svg viewBox="0 0 512 512" className="w-4 mr-2" fill="currentColor">
              <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM196 271h-75v105c0 8.291-6.709 15-15 15s-15-6.709-15-15V136c0-8.291 6.709-15 15-15h90c41.353 0 75 33.647 75 75s-33.647 75-75 75zm210-60c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.291-6.709 15-15 15s-15-6.709-15-15V241h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-24.814 20.186-45 45-45h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-8.276 0-15 6.724-15 15v45h45z" />
            </svg>
            Portfolio
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
