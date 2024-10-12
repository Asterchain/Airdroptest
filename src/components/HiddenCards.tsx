import React, { useState } from 'react';
import { User, SPECIAL_CARDS } from '../types';

interface HiddenCardsProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateBalance: (amount: number) => void;
}

const HiddenCards: React.FC<HiddenCardsProps> = ({ user, setUser, updateBalance }) => {
  const [revealedCards, setRevealedCards] = useState<boolean[]>(Array(25).fill(false));

  const revealHiddenCard = (index: number) => {
    if (!revealedCards[index]) {
      const randomCard = SPECIAL_CARDS[Math.floor(Math.random() * SPECIAL_CARDS.length)];
      setUser((prevUser) => ({
        ...prevUser,
        specialCards: [...prevUser.specialCards, randomCard],
      }));
      updateBalance(50);
      setRevealedCards((prev) => {
        const newRevealed = [...prev];
        newRevealed[index] = true;
        return newRevealed;
      });
      alert(`You revealed a ${randomCard} special card and earned 50 AST tokens!`);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Hidden Special Cards</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {revealedCards.map((revealed, index) => (
          <div
            key={index}
            onClick={() => revealHiddenCard(index)}
            className={`w-full h-24 bg-white bg-opacity-20 rounded flex items-center justify-center cursor-pointer transition-transform duration-300 ${
              revealed ? 'bg-opacity-40' : 'hover:scale-105'
            }`}
          >
            {revealed ? 'Revealed' : 'Click to reveal'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiddenCards;