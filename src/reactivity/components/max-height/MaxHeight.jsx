import React from "react";
import styles from "./max-height.module.less";

const MaxHeight = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default MaxHeight;
