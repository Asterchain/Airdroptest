import React from 'react';
import { User, TASKS } from '../types';

interface TasksProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateBalance: (amount: number) => void;
}

const Tasks: React.FC<TasksProps> = ({ user, setUser, updateBalance }) => {
  const completeTask = (task: string) => {
    if (!user.tasks[task]) {
      const reward = Math.floor(Math.random() * 41) + 10;
      updateBalance(reward);
      setUser((prevUser) => ({
        ...prevUser,
        tasks: { ...prevUser.tasks, [task]: true },
      }));
      alert(`Task '${task}' completed! You earned ${reward} AST tokens.`);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      {TASKS.map((task) => (
        <div key={task} className="flex justify-between items-center mb-2">
          <span>{task}</span>
          <button
            onClick={() => completeTask(task)}
            disabled={user.tasks[task]}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            {user.tasks[task] ? 'Completed' : 'Complete'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;