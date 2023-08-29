// DataComponents.tsx

import { useEnsName } from '../hooks/useENSName';

export const DepositComponent = ({ data }: any) => {
  const ensName = useEnsName(data.account);
  return (
    <div className="p-4 rounded bg-gray-800">
      <h3 className="text-xl mb-4">Token: {data.token}</h3>
      <p>ID: {data.id}</p>
      <p>Amount: {data.amount}</p>
      <p>Account: {ensName || data.account}</p>
      <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
      <p>
        Markets Total Supply: {data.marketsTotalSupply?.join(', ') || 'N/A'}
      </p>
    </div>
  );
};

export const MemberApplicationsComponent = ({ data }: any) => {
  const stakerEnsName = useEnsName(data.staker);
  const applicantEnsName = useEnsName(data.applicant);
  return (
    <div className="p-4 rounded bg-gray-800">
      <h3 className="text-xl mb-4">ID: {data.id}</h3>
      <p>Staker: {stakerEnsName || data.staker}</p>
      <p>Applicant: {applicantEnsName || data.applicant}</p>
      <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
};

export const BorrowsComponent = ({ data }: any) => {
  const ensName = useEnsName(data.account);
  return (
    <div className="p-4 rounded bg-gray-800">
      <h3 className="text-xl mb-4">Account: {ensName || data.account}</h3>

      <p>ID: {data.id}</p>
      <p>Amount: {data.amount}</p>
      <p>Fee: {data.fee}</p>
      <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
};

export const RepaysComponent = ({ data }: any) => {
  const ensName = useEnsName(data.account);
  return (
    <div className="p-4 rounded bg-gray-800">
      <h3 className="text-xl mb-4">Account: {ensName || data.account}</h3>
      <p>ID: {data.id}</p>
      <p>Amount: {data.amount}</p>
      <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
};

export const StakersComponent = ({ data }: any) => {
  const ensName = useEnsName(data.account);
  return (
    <div className="p-4 rounded bg-gray-800">
      <h3 className="text-xl mb-4">Account: {ensName || data.account}</h3>
      <p>ID: {data.id}</p>
      <p>Total Locked Stake: {data.totalLockedStake}</p>
      <p>Total Frozen: {data.totalFrozen}</p>
      <p>Credit Limit: {data.creditLimit}</p>
      <p>Staked Amount: {data.stakedAmount}</p>
      <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
};

export const TrustlinesComponent = ({ data }: any) => {
  const stakerEnsName = useEnsName(data.staker);
  const borrowerEnsName = useEnsName(data.borrower);
  return (
    <div className="p-4 rounded bg-gray-800">
      <h3 className="text-xl mb-4">Staker: {stakerEnsName || data.staker}</h3>
      <p>ID: {data.id}</p>
      <p>Borrower: {borrowerEnsName || data.borrower}</p>
      <p>Amount: {data.amount}</p>
      <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
};

export const UTokenMetaComponent = ({ data }: any) => (
  <div className="p-4 rounded bg-gray-800">
    <h3 className="text-xl mb-4">ID: {data.id}</h3>
    <p>Total Borrows: {data.totalBorrows}</p>
    <p>Total Supply: {data.totalSupply}</p>
    <p>Total Reserves: {data.totalReserves}</p>
    <p>Total Redeemable: {data.totalRedeemable}</p>
    <p>Borrow Rate: {data.borrowRate}</p>
    <p>Supply Rate: {data.supplyRate}</p>
    <p>Exchange Rate: {data.exchangeRate}</p>
    <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
  </div>
);

export const UserManagerMetaComponent = ({ data }: any) => (
  <div className="p-4 rounded bg-gray-800">
    <h3 className="text-xl mb-4">ID: {data.id}</h3>
    <p>Total Staked: {data.totalStaked}</p>
    <p>Total Frozen: {data.totalFrozen}</p>
    <p>Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
  </div>
);
