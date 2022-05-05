import React from "react";
import styles from "../styles/Button.module.css";


function Button(props) {
  return <button className={styles.button}>{props.children || ""}</button>;
}
export default Button;
