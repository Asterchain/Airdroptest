import React, { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import Planets from './components/Planets';
import Moons from './components/Moons';
import SpecialCards from './components/SpecialCards';
import HiddenCards from './components/HiddenCards';
import Wallet from './components/Wallet';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    astBalance: 0,
    tasks: {},
    planets: [],
    moons: [],
    specialCards: [],
    tonWallet: null,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const reward = Math.floor(Math.random() * 5) + 1;
      setUser((prevUser) => ({
        ...prevUser,
        astBalance: prevUser.astBalance + reward,
      }));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const updateBalance = (amount: number) => {
    setUser((prevUser) => ({
      ...prevUser,
      astBalance: prevUser.astBalance + amount,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-blue-200 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Aster Smartchain Web App</h1>
        <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
          <div className="text-3xl font-bold text-center mb-8">
            AST Balance: {user.astBalance}
          </div>
          <Tasks user={user} setUser={setUser} updateBalance={updateBalance} />
          <Planets user={user} setUser={setUser} updateBalance={updateBalance} />
          <Moons user={user} setUser={setUser} updateBalance={updateBalance} />
          <SpecialCards user={user} setUser={setUser} updateBalance={updateBalance} />
          <HiddenCards user={user} setUser={setUser} updateBalance={updateBalance} />
          <Wallet user={user} setUser={setUser} />
        </div>
      </div>
    </div>
  );
};

export default App;