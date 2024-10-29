import homeImg from "../../assets/homeImg.png";
import homeForeground from "../../assets/homeForeground.png";

function Home() {
  return (
    <div>
      <div>
        <img src={homeImg} alt="Hero" />
        <img
          src={homeForeground}
          alt="Foreground"
        />
        <div>
          <div>
            <h1>Build a self care routine suitable for you</h1>
            <p>
              Take out test to get a personalised self care routine based on
              your needs
            </p>
          </div>
          <div>
            <button>Start the quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
