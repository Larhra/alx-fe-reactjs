import { create } from 'zustand';
import { QuizState, Question, Category, Difficulty } from '../types/quiz';

const useQuizStore = create<QuizState>((set) => ({
  categories: [],
  selectedCategory: null,
  difficulty: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  loading: false,
  error: null,
  quizStarted: false,
  quizCompleted: false,
}));

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://opentdb.com/api_category.php');
    const data = await response.json();
    useQuizStore.setState({ categories: data.trivia_categories });
  } catch (error) {
    useQuizStore.setState({ error: 'Failed to fetch categories' });
  }
};

export const startQuiz = async (category: number, difficulty: Difficulty, amount: number = 10) => {
  useQuizStore.setState({ loading: true, error: null });
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    const data = await response.json();
    if (data.response_code === 0) {
      useQuizStore.setState({
        questions: data.results,
        quizStarted: true,
        currentQuestionIndex: 0,
        score: 0,
        loading: false,
      });
    } else {
      throw new Error('Failed to fetch questions');
    }
  } catch (error) {
    useQuizStore.setState({
      error: 'Failed to fetch questions',
      loading: false,
    });
  }
};

export default useQuizStore;