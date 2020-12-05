import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        {/* Login Link */}
        <div className="home__imageContainer">
          <div className="login__container">
            <h1>BrainTrain</h1>
            <h3>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h3>
            <button className="button_log">Log In</button>
            <button className="button_sign">Sign In</button>
          </div>
        </div>

        <div className="breaker"></div>

        {/* Image which will link to different parts of site */}
        <div className="home__imageContainer">
          <Link to="/info" style={{ textDecoration: "none" }}>
            <div className="home__imageNtext">
              <img
                className="home__image"
                src="https://i.imgur.com/F7MJ508.png"
                alt="brain"
              />
              <h1 className="title">Cognitive Decline Info</h1>
            </div>
          </Link>

          <Link to="/test" style={{ textDecoration: "none" }}>
            <div className="home__imageNtext">
              <img
                className="home__image"
                src="https://i.imgur.com/HXLpCJc.png"
                alt="brain"
              />
              <h1 className="title">Test Your Memory</h1>
            </div>
          </Link>

          <Link to="/learn" style={{ textDecoration: "none" }}>
            <div className="home__imageNtext">
              <img
                className="home__image"
                src="https://i.imgur.com/F7MJ508.png"
                alt="brain"
              />
              <h1 className="title">What Is Memory</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
