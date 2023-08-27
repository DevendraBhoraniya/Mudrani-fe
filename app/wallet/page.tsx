"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
const isWalletCreated = false;

  const [isCopied, setIsCopied] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="border border-purple-600/[0.70] h-[300px] w-full p-5 mx-[13%] rounded-xl flex justify-center items-center ">
          {isWalletCreated ? (
            <>
              <div className="flex flex-col justify-center items-center gap-5 ">
                <Image
                  src="/logo.ico"
                  alt="Logo"
                  className="rounded-full border  "
                  height={50}
                  width={50}
                />

                <div className="flex gap-2">
                  <input
                    className="bg-purple-600/[0.15] p-1 rounded-2xl"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <button
                    className={`bg-purple-600 rounded-full p-1 ${
                      isCopied ? "bg-green-500" : ""
                    }`}
                    onClick={handleCopy}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <Link href="/pay" >
                  <button
                    onClick={() => {}}
                    className="bg-purple-600/[0.40] p-2 rounded-md "
                  >
                    Pay
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <Link href="">
              <button className="bg-purple-600/[0.50] p-2 rounded-xl ">
                Create Wallet
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
