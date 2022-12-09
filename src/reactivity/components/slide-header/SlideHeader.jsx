import React from "react";
import styles from "./slide-header.module.less";

const SlideHeader = ({ title }) => (
  <div className={styles.container}>
    <h6 className={styles.caption}>{title}</h6>
    <div className={styles.line}></div>
  </div>
);

export default SlideHeader;
