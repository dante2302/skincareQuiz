import questionArrow from "/assets/questionArrow.png";
import { useQuizContext } from "../../contexts/QuizContext";
import { STATUS } from "../../enums/Statuses.enum";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./styles/Question.css";
import QuestionProps from "../../interfaces/QuestionProps.interface";


export default function Question({
  question,
  answers,
  idx,
}: QuestionProps) {
  const {
    error,
    navigateBack,
    navigateForward,
    chooseAnswer,
    activeAnswers,
    quizLength
  } = useQuizContext();

  return (
    <div className="question-outer-wrap">
      <div className="question-content-container">
        <h1 className="question-heading">{question}</h1>
        <ol className="answer-list">
          {answers.map((answer: string, index: number) =>
            <li
              className={`
                ${activeAnswers[idx] == answer ? "active-answer" : ""}
                answer-container`}
              key={index}
            >
              <button
                className="answer-button"
                onClick={() => chooseAnswer(answer, idx)}
              >
                {`${String.fromCharCode("a".charCodeAt(0) + 1)}. ${answer}`}
              </button>
            </li>
          )}
        </ol>

        <div className="bottom-buttons-container">
          <button
            className="go-back-button"
            onClick={() => navigateBack(idx)}
          >
            Back
          </button>
          <button
            className="next-question-button"
            onClick={() => navigateForward(idx)}
          >
            {idx === quizLength - 1 ? "Discover your results!" : "Next Question"}
            <img src={questionArrow} alt="arrowNext" />
          </button>
        </div>
      </div>
      <ProgressBar
        percentage={(idx / quizLength) * 100}
      />
    </div>
  );
}