import React, { useCallback } from "react";
import styles from "./home.module.css";
import dices from "/images/dices.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/main"); // Navigate to the /main route
  }, [navigate]);

  return (
    <div className={styles.home_container}>
      <img
        src={dices}
        alt="dice logo"
        className={styles.dicesLogo}
        loading="lazy"
      />
      <div className={styles.descSection}>
        <h1 className={styles.home_title}>DICE GAME</h1>

        <Button text="Play Now" onClick={handleClick} />
      </div>
    </div>
  );
};

export default React.memo(Home);
