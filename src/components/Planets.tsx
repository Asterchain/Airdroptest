import React from 'react';
import { User, PLANETS } from '../types';

interface PlanetsProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateBalance: (amount: number) => void;
}

const Planets: React.FC<PlanetsProps> = ({ user, setUser, updateBalance }) => {
  const minePlanet = (planet: string) => {
    if (!user.planets.includes(planet)) {
      setUser((prevUser) => ({
        ...prevUser,
        planets: [...prevUser.planets, planet],
      }));
      alert(`You discovered ${planet}!`);
    }
    const reward = Math.floor(Math.random() * 16) + 5;
    updateBalance(reward);
    alert(`You mined ${reward} AST tokens from ${planet}!`);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Planets</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {PLANETS.map((planet) => (
          <div key={planet} className="flex items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2 font-bold">
              {planet[0]}
            </div>
            <span>{planet}</span>
            <button
              onClick={() => minePlanet(planet)}
              className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Mine
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;