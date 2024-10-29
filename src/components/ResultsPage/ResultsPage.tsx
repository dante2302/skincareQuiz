import resultsImg from "/assets/resultsImg.png";
import "./ResultsPage.css";
import TextCard from "../ProductSlider/TextCard";
import ProductCard from "../ProductCard/ProductCard";
import ProductSlider from "../ProductSlider/ProductSlider";

export default function ResultsPage() {
    return (
        <div className="b">
        <div className="results-hero">
            <img
                src={resultsImg}
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
                    <button className="retake-button">Retake the quiz</button>
                </div>
            </div>
        </div>
<ProductSlider items={[<ProductCard price={45}/>, <ProductCard price={55}/>, <ProductCard price={65}/>]} mainItem={<TextCard />} styleClass="carousel-positioning"/>
            </div>
    );
}