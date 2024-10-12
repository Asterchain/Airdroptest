import React from 'react';
import { User, SPECIAL_CARDS } from '../types';

interface SpecialCardsProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateBalance: (amount: number) => void;
}

const SpecialCards: React.FC<SpecialCardsProps> = ({ user, setUser, updateBalance }) => {
  const generateSpecialCard = () => {
    if (user.astBalance >= 100) {
      updateBalance(-100);
      const card = SPECIAL_CARDS[Math.floor(Math.random() * SPECIAL_CARDS.length)];
      setUser((prevUser) => ({
        ...prevUser,
        specialCards: [...prevUser.specialCards, card],
      }));
      alert(`You generated a ${card} special card!`);
    } else {
      alert("You need at least 100 AST tokens to generate a special card.");
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Special Cards</h2>
      <button
        onClick={generateSpecialCard}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Generate Special Card (100 AST)
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {user.specialCards.map((card, index) => (
          <div key={index} className="bg-white bg-opacity-20 rounded p-2 text-center">
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialCards;