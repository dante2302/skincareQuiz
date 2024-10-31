import questionArrow from "/assets/questionArrow.png";
import { useQuizContext } from "../../contexts/QuizContext";
import { STATUS } from "../../enums/Statuses.enum";
import "./Question.css";
import QuestionProps from "../../interfaces/QuestionProps.interface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import IndexProgressBar from "../ProgressBar/IndexProgressBar";


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
    quizLength,
    lastQuestionIdx,
  } = useQuizContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (lastQuestionIdx < idx) {
      navigate(`/quiz/${lastQuestionIdx + 1}`)
    }
  },[])
  useEffect(() => {
  console.log(error);
  },[error])

  const isLastQuestion = idx === quizLength - 1;
  return (
    <div className="question-error-wrap">
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
                {`${String.fromCharCode("a".charCodeAt(0) + index)}. ${answer}`}
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
            { isLastQuestion ? "Discover your results!" : "Next Question"}
            <img src={questionArrow} alt="arrowNext" />
          </button>
        </div>
          {error > 0 && 
          <div className="error">
            <ChooseError />
            <p>You need to choose an answer</p>
          </div>
            }
      </div>
      <IndexProgressBar 
        currentIndex={idx+1} 
        listLength={quizLength} 
        strokeWidth=".3rem"
        radius={60}
      />
    </div>
    </div>
  );
}