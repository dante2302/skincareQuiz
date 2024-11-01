import resultsImg from "/assets/resultsImg.png";
import resultsMobile from "/assets/resultsMobile.png";
import "./ResultsPage.css";
import TextCard from "../ProductSlider/TextCard";
import ProductSlider from "../ProductSlider/ProductSlider";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useQuizContext } from "../../contexts/QuizContext";
import { useNavigate } from "react-router-dom";
import useResults from "../../hooks/useResults";
import { useEffect } from "react";
import useFavorites from "../../hooks/useFavorites";
import LoadingOverlay from "./LoadingOverlay";

export default function ResultsPage() {
    const winDimensions = useWindowDimensions();
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
        {
            navigate(`/quiz/${lastQuestionIdx+1}`);
        }
    }, []) 
    const [products, _, loading] = useResults(questionAnswers);
    const [favoriteIds, setFavorites] = useFavorites();
    products.sort((a, b) => sortFavorites(a.id, b.id, favoriteIds));

    function sortFavorites<T>(a: T, b: T, arr2: T[]) {
        const indexA = arr2.indexOf(a);
        const indexB = arr2.indexOf(b);
        // If both elements are in arr2, sort by their index in arr2
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }
        // If only a is in arr2, it should come first
        if (indexA !== -1) return -1;
        // If only b is in arr2, it should come first
        if (indexB !== -1) return 1;
        // If neither are in arr2, maintain original order
        return 0;
    };

    const retakeQuiz = () => 
    {
        clearQuiz();
        setFavorites([] as number[]);
        setQuizRetaken(true);
        navigate("/quiz/1");
    }

    return (
        <>
        <LoadingOverlay visible={loading} />
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
                items={products}
                mainItem={<TextCard />} 
                styleClass="carousel-positioning" 
            />
            </div>
</>
    );
}