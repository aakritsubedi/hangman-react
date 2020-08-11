import React, { useEffect } from "react";

import { checkWin } from 'utils/checkWin';

function Popup({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) {
  let finalMessage = "";
  let finalMessageRevelWord = "";
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulation ... You win';
    playable = false;
  }
  else if(  checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ){
    finalMessage = 'Sorry ... You lost';
    finalMessageRevelWord = `The programming language was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevelWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
