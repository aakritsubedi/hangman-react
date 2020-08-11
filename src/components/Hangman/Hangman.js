import React from "react";

import Header from "components/Header";
import Figure from "components/Figure";
import WrongLetters from "components/WrongLetters";
import Words from "components/Words";
import Popup from "components/Popup";
import Notification from "components/Notification";

function Hangman() {
  return (
    <div className="game-container">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Words />
      </div>
      <Popup />
      <Notification />
    </div>
  );
}

export default Hangman;
