import React, { useState } from 'react';
import useQuizStore from '../store/quizStore';

const QuizQuestion = () => {
  const { questions, currentQuestionIndex, score } = useQuizStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    .sort(() => Math.random() - 0.5);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === currentQuestion.correct_answer) {
      useQuizStore.setState({ score: score + 1 });
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        useQuizStore.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        useQuizStore.setState({ quizCompleted: true });
      }
    }, 1500);
  };

  const getAnswerButtonClass = (answer: string) => {
    if (!showResult || selectedAnswer !== answer) return 'bg-white hover:bg-gray-50';
    if (answer === currentQuestion.correct_answer) return 'bg-green-100';
    return 'bg-red-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
        <span className="text-sm text-gray-500">Score: {score}</span>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-medium text-gray-900 mb-4"
          dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
        />

        <div className="space-y-2">
          {answers.map((answer, index) => (
            <button
              key={index}
              className={`w-full p-3 text-left border rounded-lg transition-colors duration-200 ${getAnswerButtonClass(
                answer
              )}`}
              onClick={() => !showResult && handleAnswerSelect(answer)}
              disabled={showResult}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;