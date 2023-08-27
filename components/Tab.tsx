"use client"
import React from "react";
import PayCard from "./UI/PayCard";
import NftCard from "./UI/NftCard";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap text-White">
        <div className="w-full ">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row bg-violet-950/[0.20] p-4 rounded-xl"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal hover:bg-gray-600/[0.20] " +
                  (openTab === 1
                    ? "text-white bg-purple-600/[0.40]"
                    : "text-purple-600 bg-transparent rounded-lg")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Pay
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal hover:bg-gray-600/[0.20] " +
                  (openTab === 2
                    ? "text-white bg-purple-600/[0.40]"
                    : "text-purple-600 bg-transparent rounded-lg")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                NFT
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded mt-3">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">

                {/* Tab 1 detail */}
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <PayCard /> 
                </div>

                {/*  Tab 2 detail */}
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex justify-center w-full text-[30px]" >
                  <NftCard />.....
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;