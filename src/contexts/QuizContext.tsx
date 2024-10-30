import { createContext, useContext, useState, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../enums/LocalStorageKeys.enum';
import { useNavigate } from 'react-router-dom';
import { Status, STATUS } from '../enums/Statuses.enum';
import QuizContextType from '../interfaces/QuizContextType.interface';

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [questionAnswers, setQuestionAnswers] =
        useLocalStorage<string[]>(
            LOCAL_STORAGE_KEYS.questionAnswers,
            Array(10).fill("")
        );

    const [activeAnswers, setActiveAnswers] =
        useLocalStorage<string[]>(LOCAL_STORAGE_KEYS.activeAnswers, Array(10).fill(""));

    const [error, setError] = useState<Status>(STATUS.Success);
    const navigate = useNavigate();

    const navigateBack = (questionNumber: number) => {
        if (questionNumber === 1) return navigate("/");
        navigate(`/question-${questionNumber - 1}`);
    };

    const navigateForward = (questionNumber: number) => {
        if (questionAnswers[questionNumber - 1] === "") {
            setError(STATUS.Error);
            return;
        }
        if (questionNumber === questionAnswers.length) return navigate("/quiz-results");
        navigate(`/question-${questionNumber + 1}`);
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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
