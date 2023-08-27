import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <div className="md:h-[90vh] h-[50vh]  flex md:flex-row flex-col justify-center items-center">
        <div className="absolute z-[-5]">
          <div className="md:h-[600px] h-[300px] w-[300px] md:w-[600px] blur-[50px] blur_gradient  rounded-full " />
        </div>

        <h1 className="md:text-[60px] text-[30px] md:w-auto w-[50%] font-extrabold purple_gradient">
          Simplify Payments, Amplify Possibilities.
        </h1>
      </div>
      {/* getig started */}
      <div className="flex flex-col justify-center items-center w-full mt-[5%] ">
        <span>Ther are two way to use our Platform</span>
        <div className="flex justify-evenly gap-5 w-full mx-[10%]  ">
          <div className="cwallet">
          <div className="cwallet">By Creating Account Absterction wallet</div>
          <Link href="/wallet">Get Sarted</Link>
          </div>
          <div className="border h-[30px] my-5 " />
          <div className="mpaymet ">
          <div className="dpay">By connectiong your existing wallet</div>
          <Link href="/pay">Make Paymnt</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
