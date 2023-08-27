import { createPublicClient, http } from 'viem';
import { mainnet, polygonMumbai, arbitrumGoerli } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: arbitrumGoerli,
  transport: http(),
});

export const ensClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
