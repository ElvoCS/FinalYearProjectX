import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        className="carousel__img"
        alt=""
        src="https://i.imgur.com/F7MJ508.png"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img
        className="carousel__img"
        alt=""
        src="https://i.imgur.com/F7MJ508.png"
      />
      <p className="legend">Legend 2</p>
    </div>
  </Carousel>
);
