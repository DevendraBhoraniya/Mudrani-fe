'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const isWalletConnected = false;

  return (
    <>
      <nav className="flex justify-between bg-blend-saturation items-center py-3 px-4 mx-20 mt-10 mb-5 border rounded-2xl border-purple-600/[0.90]">
        {/* logo */}
        <div className="img  rounded-full ">
          {/* <Image src="/logo.ico" alt="absrtact" width={30} height={30} /> */}
          <span className="ml-3 text-purple-400">Mudrani Wallet</span>
        </div>

        {/* Desktop View */}
        <div className="md:block hidden ml-[10%] ">
          {/* links */}
          <div className="links flex flex-row gap-5">
            <Link href="/" className="hover:text-purple-400/[0.70]">
              Home
            </Link>
            <Link href="/wallet" className="hover:text-purple-400/[0.70]">
              Wallet
            </Link>
            <Link href="/bridge" className="hover:text-purple-400/[0.70]">
              Bridge
            </Link>
            <Link href="/union" className="hover:text-purple-400/[0.70]">
              Union Data
            </Link>
          </div>
        </div>
        <div className="wallet md:block hidden">
          {/* connect wallet  */}
          <ConnectButton />
        </div>
        {/* mobile vie show/hide button */}
        <button
          onClick={() => setToggle(!toggle)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 md:hidden"
        >
          <svg
            className={`fill-current h-3 w-3 ${toggle ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${toggle ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </nav>
      {/* desktop navbar End  */}
      {/* mobile Navbr */}
      <div className=" absolute flex items-end ml-[36%] float-left justify-between text-sm text-white/[0.70] ">
        <div></div>
        <div
          className={` border rounded-2xl px-4 py-3 border-purple-600/[0.90] flex flex-col gap-3 items-center  bg-black ${
            toggle ? 'block' : 'hidden'
          }`}
        >
          {/* links */}
          <Link href="/" className="hover:text-purple-400/[0.70]">
            Home
          </Link>
          <Link href="/wallet" className="hover:text-purple-400/[0.70]">
            Wallet
          </Link>
          <Link href="/bridge" className="hover:text-purple-400/[0.70]">
            Bridge
          </Link>
          {/* connect wallet  */}
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
