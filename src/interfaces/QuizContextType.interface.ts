import { Status } from "../enums/Statuses.enum";

export default interface QuizContextType {
  questionAnswers: string[];
  setQuestionAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  activeAnswers: string[];
  setActiveAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  error: Status;
  setError: React.Dispatch<React.SetStateAction<Status>>;
  navigateBack: (questionNumber: number) => void;
  navigateForward: (questionNumber: number) => void;
  chooseAnswer: (answer: string, idx: number) => void;
}