import React from "react";

import "./WelcomeBox.scss";

const WelcomeBox = ({ name }) => (
  <div className="welcome-box" data-test-id="welcome-box">
    <div className="container">
      <span>
        Seja bem vindo, <strong>{name}</strong>
      </span>
    </div>
  </div>
);

export default WelcomeBox;
