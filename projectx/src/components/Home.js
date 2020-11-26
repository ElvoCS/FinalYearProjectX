import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        {/* Login Link */}
        <div></div>

        {/* Image which will link to different parts of site */}
        <div className="home__imageContainer">
          <div className="home__imageNtext">
            <img
              className="home__image"
              src="https://i.imgur.com/HXLpCJc.png"
              alt="brain"
            />
            <h1 className="title">info</h1>
          </div>

          <div className="home__imageNtext">
            <img
              className="home__image"
              src="https://i.imgur.com/HXLpCJc.png"
              alt="brain"
            />
            <h1 className="title">info</h1>
          </div>

          <div className="home__imageNtext">
            <img
              className="home__image"
              src="https://i.imgur.com/HXLpCJc.png"
              alt="brain"
            />
            <h1 cl assName="title">
              info
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
