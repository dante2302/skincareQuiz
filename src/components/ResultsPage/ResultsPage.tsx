import resultsImg from "/assets/resultsImg.png";
import resultsForeground from "/assets/resultsForeground.png";
import "./ResultsPage.css";

export default function ResultsPage() {
    return (
        <div className="results-hero">
            <img
                src={resultsImg}
                alt="Image"
                className="results-img"
            />

            <img
                src={resultsForeground}
                alt="Foreground"
                className="results-foreground-img"
            />

            <div className="results-hero-content">
                <div className="results-hero-text-container">
                    <h1 className="results-hero-heading">Build you everyday self care routine.</h1>
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
                    <button className="retake-button">Retake the quiz</button>
                </div>
            </div>
        </div>
    );
}