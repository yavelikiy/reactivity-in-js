import React from "react";
import styles from "./list.module.less";

const List = ({ items, className }) => (
  <ul className={styles.list + (className ? " " + className : "")}>
    {items.map(({ key, name }) => (
      <li key={key}>{name}</li>
    ))}
  </ul>
);

export default List;
