import { createContext, useContext, useState, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../enums/LocalStorageKeys.enum';
import { useNavigate } from 'react-router-dom';
import { Status, STATUS } from '../enums/Statuses.enum';
import QuizContextType from '../interfaces/QuizContextType.interface';
import { QuizObject } from '../interfaces/QuizObject.interface';
const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider = ({ children, quiz }: { children: ReactNode, quiz: QuizObject }) => {
  const [questionAnswers, setQuestionAnswers] =
    useLocalStorage<string[]>(
      LOCAL_STORAGE_KEYS.questionAnswers,
      Array(quiz.length).fill("")
    );

  const [activeAnswers, setActiveAnswers] =
    useLocalStorage<string[]>(
      LOCAL_STORAGE_KEYS.activeAnswers, 
      Array(quiz.length).fill("")
    );

  const [error, setError] = useState<Status>(STATUS.Success);
  const navigate = useNavigate();

  const navigateForward = (questionIdx: number) => {
    if (questionAnswers[questionIdx] === "") {
      setError(STATUS.Error);
      return;
    }

    if (questionIdx === questionAnswers.length - 1) {
      navigate("/quiz-results");
      return
    }

    navigate(`/question-${questionIdx + 2}`);
    // Idx is always 1 behind URL question number
    // To move forward - idx+2
  };

  const navigateBack = (questionIdx: number) => {
    if (questionIdx == 0) {
      navigate("/");
      return;
    }
    navigate(`/question-${questionIdx}`);
    // Idx is always 1 behind URL question number
    // To move backward - go to the /question-idx
  };

  const chooseAnswer = (answer: string, idx: number) => {
    setQuestionAnswers((prev) => {
      const updated = [...prev];
      updated[idx] = answer.toLowerCase();
      return updated;
    });

    setError(STATUS.Success);

    setActiveAnswers((prev) => {
      const updated = [...prev];
      updated[idx] = answer;
      return updated;
    });
  }

  return (
    <QuizContext.Provider
      value={{
        questionAnswers,
        setQuestionAnswers,
        activeAnswers,
        setActiveAnswers,
        error,
        setError,
        navigateBack,
        navigateForward,
        chooseAnswer,
        quizLength: quiz.length
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
