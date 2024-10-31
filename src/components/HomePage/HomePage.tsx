import homeImg from "/assets/homeImg.png";
import homeMobile from "/assets/homeMobile.png";
import "./HomePage.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../../contexts/QuizContext";

export default function HomePage() {
  const winDimensions = useWindowDimensions();
  const navigate = useNavigate();
  const q = useQuizContext();
  const startQuiz = () => { 
    q.clearQuiz(); 
    navigate("/quiz/1") 
  };

  return (
    <div>
      <div className="home-outer-wrap">
        {winDimensions.width > 640 ?
        <img
          src={homeImg}
          className="home-img"
          alt="Home Image"
        />
        : 
        <img 
          src={homeMobile} 
          className={`${winDimensions.height < 600 ? "home-img-full-height": ""} home-mobile`}
          alt="Home Image" 
        />
        }
        <div
          className="home-overlay"
        >
        </div>

        <div className="home-content-container">
          <div className="home-text-container">
            <h1>Build a self care routine suitable for you</h1>
            <p>
              Take out test to get a personalised self care routine based on
              your needs
            </p>
          </div>

          <div className="home-button-wrap">
            <button 
              className="home-button"
              onClick={startQuiz}
            >{q.lastQuestionIdx > 0 ? "Resume the quiz" : "Start the quiz"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}