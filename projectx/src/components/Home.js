import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ auth, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(auth);
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
              nisi ut aliquip.
            </h3>

            <Link to={!user && "/Login"}>
              <button className="button_sign" onClick={handleAuthentication}>
                {user ? "Sign Out" : "Sign In / Sign Up"}
              </button>
            </Link>
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
