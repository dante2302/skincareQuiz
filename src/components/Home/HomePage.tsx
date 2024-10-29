import homeImg from "../../assets/homeImg.png";
import homeForeground from "../../assets/homeForeground.png";
import "./home.css";

export default function HomePage() {
  return (
    <div>
      <div className="home-outer-wrap">
        <img 
          src={homeImg} 
          className="home-img" 
          alt="Home Image" 
        />

        <img
          src={homeForeground}
          alt="Foreground"
          className="home-foreground-img"
        />

        <div className="home-content-wrap">
          <div className="home-text-wrap">
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