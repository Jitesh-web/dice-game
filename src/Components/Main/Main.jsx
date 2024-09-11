import React, { useState, useCallback } from "react";
import styles from "./main.module.css";
import Navbar from "../Navbar/Navbar";
import { useSharedState } from "../SharedStateContext";

const Main = () => {
  const { selectedNumber, setValidationMessage, setScoreValue } =
    useSharedState(); // Use the shared state
  const [visible, setVisible] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  const handleShowRules = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  const handleReset = useCallback(() => {
    setScoreValue(0);
  }, [setScoreValue]);

  const generateRandomNumber = useCallback(() => {
    if (selectedNumber) {
      const number = Math.floor(Math.random() * 6) + 1;
      setRandomNumber(number);
      checkScore(selectedNumber, number);
    } else {
      setValidationMessage(true);
    }
  }, [selectedNumber, setValidationMessage]);

  const checkScore = useCallback(
    (selectedNumber, number) => {
      const selectedNum = parseInt(selectedNumber, 10);
      setScoreValue((prevValue) =>
        selectedNum === number ? prevValue + number : prevValue - 2
      );
    },
    [setScoreValue]
  );

  const imagePath = randomNumber
    ? `/images/dice/dice_${randomNumber}.png`
    : `/images/dice/dice_${1}.png`;

  return (
    <div>
      <Navbar />
      <main className={styles.mainContainer}>
        <div>
          <img
            src={imagePath}
            alt="dice image"
            className={styles.diceImage}
            onClick={generateRandomNumber}
          />
        </div>
        <p className={styles.desc}>Click on Dice to roll</p>
        <button className={styles.resetBtn} onClick={handleReset}>
          Reset Score
        </button>
        <button className={styles.showBtn} onClick={handleShowRules}>
          Show Rules
        </button>
      </main>
      {visible && (
        <section className={styles.diceRules}>
          <h2>How to play dice game</h2>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            After clicking on the dice, if the selected number is equal to the
            dice number, you will get the same point as the dice. If you guess
            wrong, 2 points will be deducted.
          </p>
        </section>
      )}
    </div>
  );
};

export default Main;
