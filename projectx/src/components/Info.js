import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./CardStyle.css";

function Info() {
  return (
    <div className="container">
      <Card
        className="Card"
        Style="border-radius:30px;background-color: #3C4DAD; margin-top:80px;"
      >
        <CardContent>
          {/*Title */}
          <h2 className="card__title">Title</h2>
          {/*Body */}
          <h3 className="card__body">Body</h3>
        </CardContent>
      </Card>
      <Card
        className="Card"
        Style="border-radius:30px;background-color: #3C4DAD; margin-top:80px;"
      >
        <CardContent>
          {/*Title */}
          <h2 className="card__title">Title</h2>
          {/*Body */}
          <h3 className="card__body">Body</h3>
        </CardContent>
      </Card>
      <Card
        className="Card"
        Style="border-radius:30px;background-color: #3C4DAD; margin-top:80px;"
      >
        <CardContent>
          {/*Title */}
          <h2 className="card__title">Title</h2>
          {/*Body */}
          <h3 className="card__body">Body</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default Info;
