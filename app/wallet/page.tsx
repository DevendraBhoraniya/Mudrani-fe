'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  SimpleSmartContractAccount,
  SmartAccountProvider,
  type SimpleSmartAccountOwner,
  LocalAccountSigner,
} from '@alchemy/aa-core';
import { mnemonicToAccount } from 'viem/accounts';
import { polygonMumbai, arbitrumGoerli } from 'viem/chains';
import { parseEther } from 'viem';
import { create, SdkConfig } from '@connext/sdk';
import { generatePrivateKey } from 'viem/accounts';
import { ensClient, publicClient } from './utils';
import { useEnsResolver } from 'wagmi';
import { normalize } from 'viem/ens';

const ACCOUNT_FACTORY = `${process.env.NEXT_PUBLIC_ACCOUNT_FACTORY_ADDRESS}`;
const ARBITRUM_RPC = `${process.env.NEXT_PUBLIC_ARBITRUM_RPC}`;
const ENTRY_POINT_ADDRESS = `${process.env.NEXT_PUBLIC_ENTRY_POINT_ADDRESS}`;

const Wallet = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [inputText, setInputText] = useState('');
  const [addr, setAddr] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [isWalletCreated, setIsWalletCreated] = useState(false);
  const [bal, setBal] = useState(0);

  const [recipientAddress, setRecipientAddress] = useState('');
  // let provider: any;
  const SIMPLE_ACCOUNT_FACTORY_ADDRESS =
    '0x9406cc6185a346906296840746125a0e44976454';
  const createWallet = async () => {
    // generate the private key
    let privateKey = generatePrivateKey();

    // Check if private key exists in local storage
    if (typeof window !== 'undefined') {
      privateKey =
        (localStorage.getItem('myPrivateKey') as `0x${string}`) || '';
    }

    // If private key doesn't exist in local storage, generate a new one
    if (!privateKey) {
      privateKey = generatePrivateKey();

      if (typeof window !== 'undefined') {
        // Store the newly generated private key in local storage
        localStorage.setItem('myPrivateKey', privateKey);
      }
    } else {
    }

    const owner: SimpleSmartAccountOwner =
      LocalAccountSigner.privateKeyToAccountSigner(privateKey);

    const provider = new SmartAccountProvider(
      `https://arb-goerli.g.alchemy.com/v2/${ARBITRUM_RPC}`, // rpcUrl
      '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', // entryPointAddress
      arbitrumGoerli // chain
    ).connect(
      (rpcClient) =>
        new SimpleSmartContractAccount({
          entryPointAddress: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
          chain: arbitrumGoerli,
          factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
          rpcClient,
          owner,
        })
    );

    const address = (await provider.getAddress()).toString();

    setAddr(address);
    // const balance = await publicClient.getBalance({
    //   address: addr,
    // });
    // setIsWalletCreated(true);
    fetchBalance(addr);

    if (typeof window !== 'undefined') {
      localStorage.setItem('walletAddress', address);
    }
    setIsWalletCreated(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isWalletCreated', 'true');
    }
  };

  // for balance

  const fetchBalance = async (addr: string) => {
    try {
      // const result = await publicClient.getBalance({ address: addr });
      const result = await publicClient.getBalance({
        address: addr as `0x${string}`,
        // address:"0xfF70FBff8b7B1716f08B158C8c27640a82aCcaba"
      });

      setBal(Number(result));
    } catch (error) {
      // console.error('Failed to fetch balance:', error);
    }
  };

  // global

  // wallet created

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('isWalletCreated')) {
        setIsWalletCreated(true);
        const storedAddr = localStorage.getItem('walletAddress');
        if (storedAddr) {
          setAddr(storedAddr);
        }
      }
    }
  }, []);

  // for balance

  useEffect(() => {
    if (addr) {
      fetchBalance(addr);
    }
  }, [addr]); // This effect will run every time `addr` changes

  const sendTx = async () => {
    let privateKey = generatePrivateKey();

    // Check if private key exists in local storage
    if (typeof window !== 'undefined') {
      privateKey =
        (localStorage.getItem('myPrivateKey') as `0x${string}`) || '';
    }

    // If private key doesn't exist in local storage, generate a new one
    if (!privateKey) {
      privateKey = generatePrivateKey();

      if (typeof window !== 'undefined') {
        // Store the newly generated private key in local storage
        localStorage.setItem('myPrivateKey', privateKey);
      }
    } else {
    }

    const owner: SimpleSmartAccountOwner =
      LocalAccountSigner.privateKeyToAccountSigner(privateKey);

    const provider = new SmartAccountProvider(
      `https://arb-goerli.g.alchemy.com/v2/${ARBITRUM_RPC}`, // rpcUrl
      '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', // entryPointAddress
      arbitrumGoerli // chain
    ).connect(
      (rpcClient) =>
        new SimpleSmartContractAccount({
          entryPointAddress: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
          chain: arbitrumGoerli,
          factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
          rpcClient,
          owner,
        })
    );

    if (typeof window !== 'undefined' && localStorage.getItem('myPrivateKey')) {
      const { hash } = await provider.sendUserOperation({
        // target: '0xE0B2A968Fc566bce543E9da6D3893FfE1170B833',
        target: recipientAddress as `0x${string}`,
        data: '0x',
        // value: parseEther('0.0001'),
        value: parseEther(tokenAmount),
      });
      // console.log(hash, 'transaction hash');
    }
  };

  // new one

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setIsCopied(true);
    } catch (error) {}
  };

  // ENS Resolver

  // const { data } = useEnsResolver({
  //   name: 'wagmi-dev.eth',
  // });
  // const run = async () => {
  //   const resolverAddress = await ensClient.getEnsResolver({
  //     name: normalize('karangoraniya.eth'),
  //   });
  // };

  // useEffect(() => {
  //   run();
  // }, []); // This effect will run every time `addr` changes

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
                  className="rounded-full border"
                  height={50}
                  width={50}
                />

                {/* Account Address */}
                <p className="text-white font-medium">{addr}</p>
                <button className="" onClick={handleCopy}>
                  Copy
                </button>

                {/* Account Balance */}
                <p className="text-gray-600">Balance: {bal} ETH</p>

                {/* Send Token Fields */}
                <div className="flex flex-col gap-2">
                  <input
                    className="bg-purple-600/[0.15] p-1 rounded-2xl"
                    type="text"
                    placeholder="Recipient Address"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                  />
                  <input
                    className="bg-purple-600/[0.15] p-1 rounded-2xl"
                    type="number"
                    placeholder="Amount"
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(e.target.value)}
                  />
                </div>

                {/* Send Token Button */}
                <button
                  className="bg-purple-600/[0.40] p-2 rounded-md"
                  onClick={sendTx}
                >
                  Send Tokens
                </button>
              </div>
            </>
          ) : (
            <Link href="">
              <button
                className="bg-purple-600/[0.50] p-2 rounded-xl"
                onClick={createWallet}
              >
                Create Wallet
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Wallet;
