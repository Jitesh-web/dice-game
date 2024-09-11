import React, { useCallback } from "react";
import styles from "./navbar.module.css";
import Button from "../Button/Button";
import { useSharedState } from "../SharedStateContext";

const Navbar = () => {
  const {
    scoreValue,
    selectedNumber,
    setSelectedNumber,
    validationMessage,
    setValidationMessage,
  } = useSharedState();
  // Use useCallback to memoize the handler function
  const handleButtonNumber = useCallback(
    (value) => {
      setSelectedNumber(value);
      setValidationMessage(false);
    },
    [setSelectedNumber, setValidationMessage]
  );
  return (
    <nav className={styles.navContainer}>
      <div className={styles.totalScore}>
        <span className={styles.scoreValue}>{scoreValue}</span>
        <span className={styles.score}>Total Score</span>
      </div>
      <div className={styles.btnSelectContainer}>
        {validationMessage && (
          <div className={styles.validationMessage}>
            <span>You have not selected any number</span>
          </div>
        )}

        <div className="btnContainer">
          {/* Generate buttons using a loop */}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Button
              key={num}
              text={String(num)}
              number={true}
              onClick={() => handleButtonNumber(String(num))}
            />
          ))}
          
        </div>
        <div className={styles.selectContainer}>
          <span className={styles.selectNumber}>Select Number</span>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
