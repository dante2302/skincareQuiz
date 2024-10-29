import homeImg from "/assets/homeImg.png";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <div className="home-outer-wrap">
        <img
          src={homeImg}
          className="home-img"
          alt="Home Image"
        />

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
            <button className="home-button">Start the quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}