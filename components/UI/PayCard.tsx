import Image from "next/image";
import React from "react";
import { payment } from "@/public/asseets";

const PayCard = () => {
  return (
    <>
      <div className="main text-white mx-[5%] flex flex-col gap-5 ">
        {/* sender */}
        <div className="card flex flex-col gap-5">
          <p>Sender</p>
          {/* wallet id */}
          <input
            type="text"
            name=""
            id=""
            placeholder="You'r Wallet Address / ENS Name"
            className="bg-purple-600/[0.15] p-4 rounded-2xl"
          />

          <div className="flex ">
            {/*  Amount  */}
            <input
              type="int"
              name=""
              id=""
              placeholder="Amount"
              className="bg-purple-600/[0.15] p-4 rounded-2xl grow"
            />
            {/* Blockchian */}
            {/* <label htmlFor="">Intial Chain :</label> */}
            <select
              name="BlockChain"
              id="Chains"
              className="appearance-none rounded-2xl bg-purple-600/[0.70] mx-5 px-3"
            >
              <option value="" selected>
              Intial Chain
              </option>
              <option value="optm">Optiomiom</option>
              <option value="poi">Poligon</option>
              <option value="eat">Etherium</option>
              {/* can add more Here */}
            </select>
          </div>
        </div>
        {/* receiver  */}
        <div className="card flex flex-col gap-5">
          <p>Receiver</p>
          {/* wallet id */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Receiver's Wallet Address / ENS Name"
            className="bg-purple-600/[0.15] p-4 rounded-2xl"
          />

          <div className="flex ">
            {/* Gas Amount  */}
            <input
              id="disabled-input"
              type="int"
              name=""
              placeholder="Gas Amount"
              disabled
              className="bg-purple-600/[0.15] p-4 rounded-2xl grow  cursor-text "
            />
            {/* Blockchian */}
            {/* <label htmlFor=""> :</label> */}
            <select
              name="BlockChain"
              id="Chains"
              className="appearance-none rounded-2xl bg-purple-600/[0.70] mx-5 px-3"
            >
              <option value="" selected>
              Destination Chain
              </option>
              <option value="optm">Optiomiom</option>
              <option value="poi">Poligon</option>
              <option value="eat">Etherium</option>
              {/* can add more Here */}
            </select>
          </div>
        </div>
        {/* paymet button  */}
        <button className="bg-purple-600/[0.50] hover:bg-purple-600/[0.60] flex items-center rounded-xl justify-center gap-4 p-2 ">
          <Image src={payment} alt="" height={30} width={30} />
          Make Payment
        </button>
      </div>
    </>
  );
};

export default PayCard;
