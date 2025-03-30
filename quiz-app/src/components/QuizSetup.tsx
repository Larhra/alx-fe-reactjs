import React, { useState } from 'react';
import useQuizStore, { startQuiz } from '../store/quizStore';
import { Difficulty } from '../types/quiz';

const QuizSetup = () => {
  const { categories } = useQuizStore();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');

  const handleStartQuiz = () => {
    startQuiz(selectedCategory, difficulty);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Category
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
        >
          <option value={0}>Select a category...</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Difficulty
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        onClick={handleStartQuiz}
        disabled={!selectedCategory}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizSetup;