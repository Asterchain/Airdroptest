import React from 'react';
import { User } from '../types';

interface WalletProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const Wallet: React.FC<WalletProps> = ({ user, setUser }) => {
  const connectWallet = () => {
    if (!user.tonWallet) {
      const dummyWallet = `EQ${Math.floor(Math.random() * 900000 + 100000)}...${Math.floor(Math.random() * 900000 + 100000)}`;
      setUser((prevUser) => ({
        ...prevUser,
        tonWallet: dummyWallet,
      }));
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">TON Wallet</h2>
      {user.tonWallet ? (
        <div>Connected: {user.tonWallet}</div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Connect TON Wallet
        </button>
      )}
    </div>
  );
};

export default Wallet;