import resultsImg from "/assets/resultsImg.png";
import resultsMobile from "/assets/resultsMobile.png";
import "./ResultsPage.css";
import TextCard from "../ProductSlider/TextCard";
import ProductCard from "../ProductCard/ProductCard";
import ProductSlider from "../ProductSlider/ProductSlider";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useQuizContext } from "../../contexts/QuizContext";
import { useNavigate } from "react-router-dom";
import useResults from "../../hooks/useResults";
import { useEffect } from "react";

export default function ResultsPage() {
    let winDimensions = useWindowDimensions();
    const { 
        questionAnswers, 
        lastQuestionIdx,
        clearQuiz,
        quizRetaken, 
        setQuizRetaken,
        quizLength
    } = useQuizContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(lastQuestionIdx != quizLength - 1 && !quizRetaken)
            navigate(`/quiz/${lastQuestionIdx+1}`);
    }, []) 
    const [products, setProducts, loading] = useResults(questionAnswers);



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
            <ProductSlider 
                items={products.map(p => 
                    <ProductCard price={p.variants[0].price}/>
                ) } 
                mainItem={<TextCard />} 
                styleClass="carousel-positioning" 
            />
            </div>
    );
}