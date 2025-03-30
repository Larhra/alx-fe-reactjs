import React from 'react';
import useQuizStore from '../store/quizStore';
import { Trophy, RefreshCw } from 'lucide-react';

const QuizResults = () => {
  const { score, questions } = useQuizStore();
  const percentage = (score / questions.length) * 100;

  const handleRetry = () => {
    useQuizStore.setState({
      quizStarted: false,
      quizCompleted: false,
      currentQuestionIndex: 0,
      score: 0,
      questions: [],
    });
  };

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <Trophy className="w-16 h-16 text-yellow-400" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900">Quiz Completed!</h2>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="text-4xl font-bold text-indigo-600 mb-2">
          {percentage.toFixed(0)}%
        </div>
        <p className="text-gray-600">
          You got {score} out of {questions.length} questions correct
        </p>
      </div>

      <button
        className="flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        onClick={handleRetry}
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        Try Another Quiz
      </button>
    </div>
  );
};

export default QuizResults;