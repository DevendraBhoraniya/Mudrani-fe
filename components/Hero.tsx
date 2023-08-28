import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <div className="md:h-[90vh] h-[50vh] mx-[8%] flex md:flex-row flex-col justify-center items-center">
        <div className="absolute z-[-5]">
          <div className="md:h-[600px] h-[300px] w-[300px] md:w-[600px] blur-[50px] blur_gradient  rounded-full " />
        </div>

        <h1 className="md:text-[50px] text-[30px] md:w-auto w-[50%] font-extrabold purple_gradient">
          Simplify Payments, Amplify Possibilities.
        </h1>
      </div>
      {/* learn  */}
      <div className="flex flex-col justify-center w-full items-center h-fit p-3  my-[5%]  ">
        <h5 className="my-2 text-[30px] text-purple-600/[0.60] font-bold ">
          Transfer Token Easily in 3 Easy Steps
        </h5>
        <div className="flex flex-col w-full mx-[15%] gap-5 justify-center items-center ">
          <span className="">1. Create Account</span>
          <span className="">2. Add Amount to your newly Created Account</span>
          <span className="">3. Use This Account to Transfer Token Easily</span>
        </div>
      </div>

      {/* getting started */}
      <div className="flex flex-col justify-center items-center w-full mt-[5%] ">
        <span>There are two way to use our Platform</span>
        <div className="flex justify-evenly gap-5 w-full mx-[10%] ">
          <div className="cwallet my-[2%] ">
            <div className="cwallet">
              By Creating Account Abstraction wallet
            </div>
            <Link
              href="/wallet"
              className="bg-purple-500/[0.50] p-2 rounded-lg my-[2%] "
            >
              Get Started
            </Link>
          </div>
          <div className="border h-[100px] my-5" />
          <div className="mpaymet my-[2%]">
            <div className="dpay">By connecting your existing wallet</div>
            <Link
              href="/bridge"
              className="bg-purple-500/[0.50] p-2 rounded-lg my-[2%]"
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
