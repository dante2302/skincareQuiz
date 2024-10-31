import resultsImg from "/assets/resultsImg.png";
import resultsMobile from "/assets/resultsMobile.png";
import "./ResultsPage.css";
import TextCard from "../ProductSlider/TextCard";
import ProductCard from "../ProductCard/ProductCard";
import ProductSlider from "../ProductSlider/ProductSlider";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useQuizContext } from "../../contexts/QuizContext";
import { useNavigate } from "react-router-dom";

export default function ResultsPage() {
    let winDimensions = useWindowDimensions();
    const { clearQuiz, setQuizRetaken } = useQuizContext();

    const navigate = useNavigate();

    const retakeQuiz = () => 
    {
        clearQuiz();
        setQuizRetaken(true);
        navigate("/quiz/1");
    }

    return (
        <div className="results-outer">
        <div className="results-hero">
            <img
                src={winDimensions.width > 768 ? resultsImg : resultsMobile}
                alt="Image"
                className="results-img"
            />

            <div className="results-overlay">

            </div>
            <div className="results-hero-content">
                <div className="results-hero-text-container">
                    <h1 className="results-hero-heading">Build your everyday self care routine.</h1>
                    <p className="results-hero-text">
                        Perfect for if you're looking for soft, nourished skin, our
                        moisturizing body washes are made with skin-natural nutrients that
                        work with your skin to replenish moisture. With a light formula,
                        the bubbly lather leaves your skin feeling cleansed and cared for.
                        And by choosing relaxing fragrances you can add a moment of calm
                        to the end of your day.
                    </p>
                </div>
                <div className="retake-button-wrap">
                    <button 
                        className="retake-button"
                        onClick={retakeQuiz}
                    >Retake the quiz</button>
                </div>
            </div>
        </div>
<ProductSlider items={[<ProductCard price={45} key={1}/>, <ProductCard price={5} key={2}/>]} mainItem={<TextCard />} styleClass="carousel-positioning"/>
            </div>
    );
}