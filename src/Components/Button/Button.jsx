import React from "react";
import styles from "./button.module.css";

const Button = React.memo(({ text, number, onClick }) => {
  const buttonClass = number ? styles.btnNumbers : styles.btnStyling;

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
});

export default Button;
