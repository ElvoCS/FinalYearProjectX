import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./CardStyle.css";

import { render } from "react-dom";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Info() {
  return (
    <div className="container">
      <Carousel />
    </div>
  );
}

export default Info;
