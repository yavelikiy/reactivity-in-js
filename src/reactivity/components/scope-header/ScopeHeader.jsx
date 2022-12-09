import React from "react";
import LettersFall from "../letters-fall/LettersFall";
import styles from "./scope-header.module.less";

const ScopeHeader = ({ title, stepId }) => (
  <div className={styles.container}>
    <h2 className={styles.caption}>
      <LettersFall text={title} loop={false} stepId={stepId} />
    </h2>
    <div className={styles.line}></div>
    <div className={styles.lineMiddle}></div>
    <div className={styles.lineSmall}></div>
  </div>
);

export default ScopeHeader;
