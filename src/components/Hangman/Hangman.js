import React, { useState, useEffect } from "react";

import { showNotification as notify } from "utils/showNotification";

import Header from "components/Header";
import Figure from "components/Figure";
import WrongLetters from "components/WrongLetters";
import Words from "components/Words";
import Popup from "components/Popup";
import Notification from "components/Notification";
import Hint from "components/Hint";

import { languages } from "constant/listOfProgrammingLanguage";
let random = Math.floor(Math.random() * languages.length)
let selectedWord = languages[random].name; 
let hint = languages[random].hint;

function Hangman() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toUpperCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            notify(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            notify(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  useEffect(() => {
    // pre-populate the correct letter with special character
    selectedWord.split("").forEach((letter) => {
      if (!(letter.charCodeAt() >= 65) || !(letter.charCodeAt() <= 90 || (letter.charCodeAt() === 32))) {
        setCorrectLetters((currentLetters) => [...currentLetters, letter]);
      }
    });
  }, [playable]);

  const playAgain = () => {
    setPlayable(true);

    // Empty
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * languages.length);
    selectedWord = languages[random].name;
    hint = languages[random].hint;
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Words selectedWord={selectedWord} correctLetters={correctLetters} />
        <Hint hint={hint} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default Hangman;
