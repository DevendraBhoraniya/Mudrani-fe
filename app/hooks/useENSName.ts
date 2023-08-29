// hooks/useEnsName.tsx
import { useState, useEffect } from 'react';
import { ensClient } from '../wallet/utils';

export const useEnsName = (address: string) => {
  const [ensName, setEnsName] = useState<string | null>(null);

  useEffect(() => {
    async function resolveEnsName() {
      try {
        // Ensure the address starts with "0x"
        const formattedAddress = address.startsWith('0x')
          ? address
          : `0x${address}`;

        const resolvedName = await ensClient.getEnsName({
          address: formattedAddress as `0x${string}`,
        });

        if (resolvedName) {
          setEnsName(resolvedName);
        }
      } catch (error) {
        console.error('Failed to resolve ENS name:', error);
      }
    }

    resolveEnsName();
  }, [address]);

  return ensName;
};
