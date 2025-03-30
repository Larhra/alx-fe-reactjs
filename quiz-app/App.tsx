import React, { useEffect } from 'react';
import { Brain } from 'lucide-react';
import useQuizStore, { fetchCategories } from './store/quizStore';
import QuizSetup from './components/QuizSetup';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';

function App() {
  const { quizStarted, quizCompleted, loading, error } = useQuizStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-6 md:p-8">
        <div className="flex items-center justify-center mb-8">
          <Brain className="w-12 h-12 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Quiz Master</h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <>
            {!quizStarted && <QuizSetup />}
            {quizStarted && !quizCompleted && <QuizQuestion />}
            {quizCompleted && <QuizResults />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;