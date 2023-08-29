'use client';
import React, { useState, useEffect } from 'react';
import {
  useDeposits,
  useMemberApplications,
  useBorrows,
  useRepays,
  useStakers,
  useTrustlines,
  useUTokenMeta,
  useUserManagerMeta,
} from '../hooks/useDataHooks';

import {
  DepositComponent,
  MemberApplicationsComponent,
  BorrowsComponent,
  RepaysComponent,
  StakersComponent,
  TrustlinesComponent,
  UTokenMetaComponent,
  UserManagerMetaComponent,
} from './DataComponents';

export default function Page() {
  const [selectedApi, setSelectedApi] = useState<string | null>(null);
  const [currentData, setCurrentData] = useState<any[] | null>(null);

  const deposits = useDeposits();
  const memberApplications = useMemberApplications();
  const borrows = useBorrows();
  const repays = useRepays();
  const stakers = useStakers();
  const trustlines = useTrustlines();
  const uTokenMeta = useUTokenMeta();
  const userManagerMeta = useUserManagerMeta();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const apiDataMap: { [key: string]: any[] } = {
    fetchDeposits: deposits,
    fetchMemberApplications: memberApplications,
    fetchBorrows: borrows,
    fetchRepays: repays,
    fetchStakers: stakers,
    fetchTrustlines: trustlines,
    fetchUTokenMeta: uTokenMeta,
    fetchUserManagerMeta: userManagerMeta,
  };

  useEffect(() => {
    if (selectedApi) {
      const data = apiDataMap[selectedApi];
      if (data) {
        setCurrentData(data);
      }
    }
  }, [selectedApi, apiDataMap]);

  const apiToComponentMap: { [key: string]: React.FC<{ data: any }> } = {
    fetchDeposits: DepositComponent,
    fetchMemberApplications: MemberApplicationsComponent,
    fetchBorrows: BorrowsComponent,
    fetchRepays: RepaysComponent,
    fetchStakers: StakersComponent,
    fetchTrustlines: TrustlinesComponent,
    fetchUTokenMeta: UTokenMetaComponent,
    fetchUserManagerMeta: UserManagerMetaComponent,
  };

  return (
    <div className="flex flex-col bg-black text-white min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-5xl font-semibold tracking-wider">
          Get Union Data
        </h1>
        <p className="mt-2 text-gray-400">
          Explore various data points with ease.
        </p>
      </header>

      <div className="flex flex-grow">
        <div className="w-1/4 p-4 mt-[4%]">
          {Object.keys(apiDataMap).map((apiName) => (
            <div
              key={apiName}
              onClick={() => setSelectedApi(apiName)}
              className="block p-4 my-2 bg-black rounded cursor-pointer hover:text-purple-400/[0.70] transition"
            >
              {apiName.replace('fetch', 'Fetch ')}
            </div>
          ))}
        </div>
        <div className="w-3/4 p-4">
          {selectedApi && (
            <div>
              <h2 className="text-2xl mb-4">
                {selectedApi.replace('fetch', '')} Data
              </h2>
              <div className="space-y-4">
                {currentData?.map((item, index) => {
                  const Component = apiToComponentMap[selectedApi as string];
                  return <Component key={index} data={item} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
