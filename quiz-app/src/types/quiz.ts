export interface Category {
  id: number;
  name: string;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizState {
  categories: Category[];
  selectedCategory: number | null;
  difficulty: 'easy' | 'medium' | 'hard' | null;
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  loading: boolean;
  error: string | null;
  quizStarted: boolean;
  quizCompleted: boolean;
}

export type Difficulty = 'easy' | 'medium' | 'hard';