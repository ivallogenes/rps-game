import { useState, useEffect } from 'react';
import styles from './RockPaperScissorGame.module.scss';

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

function RockPaperScissorGame() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [randomChoice, setRandomChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(()=> {
    const hiddenWisdomStyle = "padding:12px;background-color:#4AA6E0;color:white;font-size:14px;";
    console.log("%cIs randomness random? Or is there something else at play?", hiddenWisdomStyle);
  }, []);

  function handlePlayerChoice(choice) {
    const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setRandomChoice(randomChoice);
    if (choice.name === randomChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && randomChoice.name === "scissors") ||
      (choice.name === "paper" && randomChoice.name === "rock") ||
      (choice.name === "scissors" && randomChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setRandomChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1>Rock Paper Scissors</h1>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && randomChoice && (
        <div className={styles.results}>
          <div className={styles.chosenTools}>
            <span className={styles.chosenEmoji}>{playerChoice.emoji}</span>
            <p>You chose {playerChoice.name}</p>
          </div>
          <div className={styles.chosenTools}>
            <span className={styles.chosenEmoji}>{randomChoice.emoji}</span>
            <p>Randomness chose {randomChoice.name}</p>
          </div>
          <h2 className={styles.winner}>{result}</h2>
          <button className={styles.replayButton} onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissorGame;
