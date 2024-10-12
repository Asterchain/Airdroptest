import React from 'react';
import { User, MOONS } from '../types';

interface MoonsProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateBalance: (amount: number) => void;
}

const Moons: React.FC<MoonsProps> = ({ user, setUser, updateBalance }) => {
  const exploreMoon = (moon: string) => {
    if (!user.moons.includes(moon)) {
      const reward = Math.floor(Math.random() * 151) + 50;
      updateBalance(reward);
      setUser((prevUser) => ({
        ...prevUser,
        moons: [...prevUser.moons, moon],
      }));
      alert(`You explored ${moon} and found ${reward} AST tokens!`);
    } else {
      alert(`You've already explored ${moon}.`);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Moons</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {MOONS.map((moon) => (
          <div key={moon} className="flex items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2 font-bold">
              {moon[0]}
            </div>
            <span>{moon}</span>
            <button
              onClick={() => exploreMoon(moon)}
              disabled={user.moons.includes(moon)}
              className="ml-auto bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-2 rounded text-sm disabled:opacity-50"
            >
              {user.moons.includes(moon) ? 'Explored' : 'Explore'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moons;