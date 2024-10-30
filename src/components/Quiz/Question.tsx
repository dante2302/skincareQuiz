import ProgressBar from "../ProgressBar/ProgressBar";
import arrowLeft from "/assets/questionArrow.png";
import "./styles/Question.css";

export default function Question() {
  return (
    <div className="question-outer-wrap">
      <div className="question-content-container">
        <h1 className="question-heading">Is There Anything Troubling About Your Hair?</h1>
      <ol className="answer-list">


        <li className="answer-container">
          <button className="answer-button">
            {`${String.fromCharCode("a".charCodeAt(0) + 1)}. Frizz`}
          </button>
        </li>
      </ol>

      <div className="bottom-buttons-container">
        <button
          className="go-back-button"
        >
          Back
        </button>
        <button
          className="next-question-button"
        >
          Next Question
          <img src={arrowLeft} alt="arrowNext" />
        </button>
      </div>
      </div>
      <ProgressBar color="red" percentage={50} />
    </div>
  );
}